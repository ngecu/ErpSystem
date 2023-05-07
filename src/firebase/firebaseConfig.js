import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
 
// Initialize Firebase
const app = initializeApp ({
    apiKey: "AIzaSyCpzWCEMbUi9XyNlcyFbS_iNYl6wNikaLE",

    authDomain: "imagetextconverter-95b1d.firebaseapp.com",
  
    projectId: "imagetextconverter-95b1d",
  
    storageBucket: "imagetextconverter-95b1d.appspot.com",
  
    messagingSenderId: "406861927828",
  
    appId: "1:406861927828:web:616c1329f874c2b163eb81",
  
    measurementId: "G-LKGKDEL2DZ"
  
  
});
 

// Firebase storage reference
const storage = getStorage(app);
export default storage;