import { initializeApp } from "firebase/app";
import { useDispatch, useSelector } from 'react-redux'

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
import { login, register } from "./actions/userActions";


console.log("process env ",process.env)

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,

  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,

  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,

  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,

  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,

  appId: process.env.REACT_APP_FIREBASE_APP_ID,

  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID  };
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async (dispatch) => {

  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    console.log(res.user);
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length > 0) {
      // await addDoc(collection(db, "users"), {
      //   uid: user.uid,
      //   name: user.displayName,
      //   authProvider: "google",
      //   email: user.email,
      // });
      return({ firstName: user.displayName, email: user.email })

    }
    else{
      return({error:"User doesn't exists"})
    }
    
  } catch (err) {
    console.error(err);
    // alert(err.message);
    return({error:err.message})
  }
};

const registerWithGoogle = async (dispatch) => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    console.log(res.user);
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
      // const dispatch = useDispatch()
      // dispatch(login({firstName:user.displayName,email:user.email}))
      return({ firstName: user.displayName, email: user.email })
    }
    else{
      return({ firstName: user.displayName, email: user.email,profile_pic:user.photoURL })
    }
  } catch (err) {
    console.error(err);
    
    alert(err.message);
    return({error:err.message})
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  signOut(auth);
};
export {
  auth,
  db,
  signInWithGoogle,
  registerWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};