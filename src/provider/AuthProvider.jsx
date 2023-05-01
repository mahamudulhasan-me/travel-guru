/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext("");
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  //   create new user
  const createNewUser = (email, password) => {
    setIsLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   update profile
  const updateUserInfo = (user, name) => {
    const updateUserName = updateProfile(user, { displayName: name })
      .then(() => {})
      .catch((err) => {
        console.error(err);
      });
    return updateUserName;
  };
  // login with email and password
  const userSignInWithEmailAndPassword = (email, password) => {
    setIsLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //handle logout
  const logout = () => {
    return signOut(auth);
  };

  //   check if user login or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setIsLoading(false);
      setUser(currentUser);
    });
    return () => unsubscribe;
  }, []);
  const authInfo = {
    user,
    createNewUser,
    updateUserInfo,
    userSignInWithEmailAndPassword,
    logout,
    isLoading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
