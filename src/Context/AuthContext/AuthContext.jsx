import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../../Firebase/firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Create user with email and password
  const createUser = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Sign in with email and password
  const signIn = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Sign in with Google
  const signInWithGoogle = async () => {
    try {
      setLoading(true);
      setError(null);

      // 1. Sign in with Google
      const result = await signInWithPopup(auth, googleProvider);

      // 2. Check if new user & update profile
      const isNewUser =
        result?.user?.metadata?.creationTime ===
        result?.user?.metadata?.lastSignInTime;
      if (isNewUser) {
        await updateUserProfile(result.user.displayName || "Google User");
      }
      return result; // Success
    } catch (error) {
      console.error("Google login error:", error); // Log error
      setError(error.message || "Google login failed");
      throw error; // Re-throw if needed (optional)
    } finally {
      setLoading(false);
      console.log(user);
    }
  };

  // Update user profile
  const updateUserProfile = async (name) => {
    setError(null);
    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Sign out
  const logOut = async () => {
    setLoading(true);
    setError(null);
    try {
      await signOut(auth);
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Observer for user state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authValue = {
    user,
    loading,
    error,
    createUser,
    signIn,
    signInWithGoogle,
    updateUserProfile,
    logOut,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
