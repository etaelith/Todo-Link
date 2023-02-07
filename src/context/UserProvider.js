import { createContext, useState, useEffect } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth, db } from "@firebase/firebase";
import { collection, addDoc, getDocs, query } from "firebase/firestore";

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const router = useRouter();

  const [user, setUser] = useState(null);

  const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password).catch((err) =>
      console.log(err)
    );
  };

  const login = async (email, password) => {
    // eslint-disable-next-line no-unused-vars
    const userCredentials = signInWithEmailAndPassword(auth, email, password);
    return userCredentials;
  };

  const logout = () => signOut(auth).catch((err) => console.log(err));

  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email);
  };

  const loginWithGitHub = () => {
    const githubProvider = new GithubAuthProvider();
    return signInWithPopup(auth, githubProvider);
  };

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const loginWithTwitter = () => {
    const twitterProvider = new TwitterAuthProvider();
    return signInWithPopup(auth, twitterProvider);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      if (!currentUser) {
        router.replace("/");
      } else {
        if (currentUser.email === "etaelithtest@gmail.com") {
          router.replace("/dashboard/admin");
        } else {
          router.replace("/dashboard/user");
        }
      }
    });
  }, []);

  const approveLink = async ({
    name,
    link,
    youtube,
    twitter,
    imageURL,
    category,
    userID,
  }) => {
    try {
      const docRef = await addDoc(collection(db, "links"), {
        name,
        link,
        youtube,
        twitter,
        imageURL,
        category,
        userID,
        createdAt: new Date(),
        favs: 0,
      });
      return docRef;
    } catch (err) {
      console.log(err);
    }
  };
  const fetchLinks = async () => {
    const getRef = query(collection(db, "links"));
    const todoRef = await getDocs(getRef);
    const lista = [];
    todoRef.forEach((doc) => {
      const data = doc.data();
      const id = doc.id;
      lista.push([id, data]);
    });
    return lista;
  };
  return (
    <LoginContext.Provider
      value={{
        signup,
        login,
        logout,
        resetPassword,
        loginWithGitHub,
        loginWithGoogle,
        loginWithTwitter,
        user,
        setUser,
        approveLink,
        fetchLinks,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
export default LoginProvider;
