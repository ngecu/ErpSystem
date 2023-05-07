import React from 'react';
import { auth } from '../firebase';
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const GoogleLoginButton = () => {
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await auth.signInWithPopup(provider);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={handleGoogleLogin}>
      Sign in with Google
    </button>
  );
};

export default GoogleLoginButton;
