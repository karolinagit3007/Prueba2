// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { initializeAuth, getAuth, getReactNativePersistence } from "firebase/auth";
import { getStorage } from "firebase/storage";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcqUT0nW1YUKeltJz-hsIE9Pos_u5ZxkQ",
  authDomain: "kg-prueba.firebaseapp.com",
  projectId: "kg-prueba",
  storageBucket: "kg-prueba.appspot.com",
  messagingSenderId: "507376148980",
  appId: "1:507376148980:web:fc779a09bf835edacd99a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);


export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export const storage = getStorage(app);
