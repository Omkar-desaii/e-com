import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyAy15JuLqGlwTAEyVDPkTqEDhIqnrSP9D8",
  authDomain: "e-com-ca89a.firebaseapp.com",
  projectId: "e-com-ca89a",
  storageBucket: "e-com-ca89a.appspot.com",
  messagingSenderId: "11046213849",
  appId: "1:11046213849:web:d11d7892bd19322808c6c8",
  measurementId: "G-7HPVBE4G1C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
