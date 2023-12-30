import React, { createContext, useEffect, useState } from 'react';
import app from '../authentication/firebase.config';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

export const UserContext = createContext(null);

// authentication code
const auth = getAuth(app);

function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // observer
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const email = user.email;
        const name = user.displayName;
        const userId = user.uid;
        setUser({ email, name, userId });
      } else {
        setUser(null);
      }
    });
  }, []);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((err) => {});
  };
  // end authentication

  const data = {
    user,
    signUp,
    logIn,
    logOut,
  };
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
}

export default UserProvider;
