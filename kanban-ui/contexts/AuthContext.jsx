// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword } from 'firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    // Listen for authentication state to change.
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return unsubscribe; 
  }, []);

  const signUpAdmin = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signUpAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};
