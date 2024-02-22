import React, { createContext, useState, useEffect } from 'react';
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInAnonymously,
} from 'firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    // This listener updates the user state on auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // If currentUser is null, app access is not blocked; it's handled gracefully
      setUser(currentUser);
      console.log("Auth state changed:", currentUser);
    });
    return () => unsubscribe(); // Cleanup on component unmount
  }, []);

  const signUpAdmin = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Admin signed up:", userCredential.user);
      // Admin registration logic can be extended here
    } catch (error) {
      console.error("Sign up error:", error);
    }
  };

  const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in:", userCredential.user);
      // User sign-in logic can be extended here
    } catch (error) {
      console.error("Sign in error:", error);
    }
  };

  const signInAsGuest = async () => {
    try {
      const userCredential = await signInAnonymously(auth);
      console.log("Guest signed in:", userCredential.user);
      // Guest sign-in logic can be extended here
    } catch (error) {
      console.error("Guest sign in error:", error);
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
      console.log("User signed out");
      // User sign-out logic can be extended here
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signUpAdmin, signIn, signInAsGuest, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
