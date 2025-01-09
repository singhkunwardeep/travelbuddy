import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

// const firebaseConfig = {
//   // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   // authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   // projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   // storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   // messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   // appId: import.meta.env.VITE_FIREBASE_APP_ID,
//   // measurementId: import.meta.env.VITE_MEASUREMENT_ID

//   apiKey: "AIzaSyACAN8oBdiD9qUDSsp4cjIXrnV6LC5V1N0",
//   authDomain: "travelai-de0d9.firebaseapp.com",
//   projectId: "travelai-de0d9",
//   storageBucket: "travelai-de0d9.firebasestorage.app",
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
//   measurementId: import.meta.env.VITE_MEASUREMENT_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyACAN8oBdiD9qUDSsp4cjIXrnV6LC5V1N0",
  authDomain: "travelai-de0d9.firebaseapp.com",
  projectId: "travelai-de0d9",
  storageBucket: "travelai-de0d9.firebasestorage.app",
  messagingSenderId: "885221161230",
  appId: "1:885221161230:web:91e515ec3728d62d0bbf5f",
  measurementId: "G-3J50BGPY7W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);