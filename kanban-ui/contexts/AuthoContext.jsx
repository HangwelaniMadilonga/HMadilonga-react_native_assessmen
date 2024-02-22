import React, { createContext, useState, useEffect } from 'react';
import { 
  getAuth, 
  onAuthStateChanged, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signInAnonymously
} from 'firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        
        setUser(authUser);
      } else {
        
        setUser(null);
      }
    });
    return unsubscribe; 
  }, []);

  const signUpAdmin = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      console.error(error);
    }
  };

  const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      console.error(error);
    }
  };

  const signInAsGuest = async () => {
    try {
      const userCredential = await signInAnonymously(auth);
      setUser(userCredential.user);
    } catch (error) {
      console.error(error);
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
      setUser(null); 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signUpAdmin, signIn, signInAsGuest, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
