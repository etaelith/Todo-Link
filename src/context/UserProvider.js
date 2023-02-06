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

import { auth } from "../firebase/firebase";

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  const login = async (email, password) => {
    // eslint-disable-next-line no-unused-vars
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
  };

  const logout = () => signOut(auth);

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

  const mapUser = (user) => {
    const { displayName, email, uid } = user;

    return {
      username: displayName,
      email,
      uid,
    };
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (!currentUser) {
        console.log("no user");
      } else {
        console.log(currentUser.email);
      }
    });
  }, []);
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
        setUser
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
export default LoginProvider;