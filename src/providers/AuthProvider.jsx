import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [laodding, setLoadding] = useState(true);

  const createUser = (email, password) => {
    setLoadding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoadding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOutUser = (email, password) => {
    return signOut(auth);
  };

  const Googleprovider = new GoogleAuthProvider();
  const singInUserWithGoogle = () => {
    return signInWithPopup(auth, Googleprovider);
  };

  const githubprovider = new GithubAuthProvider();
  const singInUserWithgithub = () => {
    return signInWithPopup(auth, githubprovider);
  };

  const updaetUserProfile = (name, image) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    })
  }

  useEffect(() => {
    const disConnect = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser), setLoadding(false);

      return () => {
        disConnect();
      };
    });
  }, []);

  const authInfo = {
    user,
    laodding,
    createUser,
    loginUser,
    logOutUser,
    singInUserWithGoogle,
    singInUserWithgithub,
    updaetUserProfile
  };


  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
