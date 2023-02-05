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

import { auth } from "./firebase";

export const signup = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password);
};

export const login = async (email, password) => {
  // eslint-disable-next-line no-unused-vars
  const userCredentials = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
};

export const logout = () => signOut(auth);

export const resetPassword = (email) => {
  sendPasswordResetEmail(auth, email);
};

export const loginWithGitHub = () => {
  const githubProvider = new GithubAuthProvider();
  return signInWithPopup(auth, githubProvider);
};

export const loginWithGoogle = () => {
  const googleProvider = new GoogleAuthProvider();
  return signInWithPopup(auth, googleProvider);
};

export const loginWithTwitter = () => {
  const twitterProvider = new TwitterAuthProvider();
  return signInWithPopup(auth, twitterProvider);
};

/* const [user, setUser] = useState(null);
useEffect(() => {
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    if (!currentUser) {
        console.log('no user')
    } else {
        console.log(currentUser.uid)
    }
  });
},[]);
 */
