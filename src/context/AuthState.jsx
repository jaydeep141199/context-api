// Context/AuthProvider.js
import React, { useReducer } from 'react';
import { AuthReducer } from './AuthReducer';
import { AuthContext } from './AuthContext';

const AuthProvider = ({ children }) => {
  const initialState = {
    isAuthenticated: false,
    user: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const { isAuthenticated } = state;

  const signIn = () => {
    // Perform sign-in logic
    // In a real application, you might set user data here, but for simplicity, we're just setting isAuthenticated to true.
    dispatch({
      type: 'SIGN_IN',
    });
  };

  const signOut = () => {
    // Perform sign-out logic
    dispatch({
      type: 'SIGN_OUT',
    });
  };

  const authContextValue = {
    isAuthenticated,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
