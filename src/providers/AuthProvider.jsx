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
import useAxiosLocal from "../hooks/useAxiosLocal";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [laodding, setLoadding] = useState(true);
  const AxiosLocal = useAxiosLocal();

  const createUser = (email, password) => {
    setLoadding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoadding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOutUser = (email, password) => {
    setLoadding(true);
    return signOut(auth);
  };

  const Googleprovider = new GoogleAuthProvider();
  const singInUserWithGoogle = () => {
    setLoadding(true);
    return signInWithPopup(auth, Googleprovider);
  };

  const githubprovider = new GithubAuthProvider();
  const singInUserWithgithub = () => {
    setLoadding(true);
    return signInWithPopup(auth, githubprovider);
  };

  const updaetUserProfile = (name, image) => {
    setLoadding(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  useEffect(() => {
    const disConnect = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser), setLoadding(false);

      if (currentUser) {
        const userData = { email: currentUser?.email };
        
        AxiosLocal.post("/jwt", userData).then((res) => {
          if (res.data.token) {
            localStorage.setItem("token", res.data.token);
          }
        });
      } else {
        localStorage.removeItem("token");
      }

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
    updaetUserProfile,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
