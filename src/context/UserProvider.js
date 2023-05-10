import { createContext, useState, useEffect } from "react"
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
} from "firebase/auth"
import {
  Timestamp,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  onSnapshot,

} from "firebase/firestore"

import { auth, db } from "@firebase/firebase"

export const LoginContext = createContext()

const LoginProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password).catch((err) =>
      console.log(err)
    )
  }

  const login = async (email, password) => {
    // eslint-disable-next-line no-unused-vars
    const userCredentials = signInWithEmailAndPassword(auth, email, password)
    return userCredentials
  }

  const logout = () => signOut(auth).catch((err) => console.log(err))

  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email)
  }

  const loginWithGitHub = () => {
    const githubProvider = new GithubAuthProvider()
    return signInWithPopup(auth, githubProvider)
  }

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleProvider)
  }

  const loginWithTwitter = () => {
    const twitterProvider = new TwitterAuthProvider()
    return signInWithPopup(auth, twitterProvider)
  }

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      if (!currentUser) {
        console.log("Not user loged")
      } else {
        console.log(`User loged`, currentUser)
      }
    })
  }, [])
  const introduceLink = async ({ name, link, youtube, twitter, userID }) => {
    try {
      const docRef = await addDoc(collection(db, "linksUser"), {
        name,
        link,
        youtube,
        twitter,
        userID,
        createdAt: Timestamp.fromDate(new Date()),
      })
      return docRef
    } catch (err) {
      console.log(err)
    }
  }
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
      })
      return docRef
    } catch (err) {
      console.log(err)
    }
  }

  const listenLinks = (callback) => {
    try {
      const q = query(collection(db, "links"), orderBy("name", "asc"))
      onSnapshot(q, (querySnapshot) => {
        const newLinks = []
        querySnapshot.forEach((doc) => {
          newLinks.push(doc.data())
        })
        callback(newLinks)
      })
    } catch (err) { }
  }

  const fetchUserLinks = async () => {
    const getRef = query(collection(db, "linksUser"), orderBy("name", "asc"))
    const todoRef = await getDocs(getRef)

    const lista = []

    todoRef.forEach((doc) => {
      const data = doc.data()
      const id = doc.id
      lista.push([data, id])
    })
    return lista
  }
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
        listenLinks,
        introduceLink,
        fetchUserLinks,
      }}
    >
      {children}
    </LoginContext.Provider>
  )
}
export default LoginProvider
