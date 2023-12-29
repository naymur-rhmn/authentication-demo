import React, { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import app from '../authentication/firebase.config';

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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const email = user.email;
        const name = user.displayName;
        const userId = user.uid;
        setUser({ email, name, userId });
      } else {
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
  // end authentication code

  const data = {
    signUp,
    logIn,
    user,
    logOut,
  };
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
}

export default UserProvider;
