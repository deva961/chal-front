import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAjHOBCFlA3E_R0dUVlRLETFMx_Ku2-LtQ",
  authDomain: "chalooverseas-ba716.firebaseapp.com",
  projectId: "chalooverseas-ba716",
  storageBucket: "chalooverseas-ba716.appspot.com",
  messagingSenderId: "779705287249",
  appId: "1:779705287249:web:04fac32b2dd9b45049ee70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const db = getFirestore(app);