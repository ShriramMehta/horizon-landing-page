import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbRZygmL3O5gbiqSl2j28RHW59Hy0hkGY",
  authDomain: "mynd-health-production.firebaseapp.com",
  projectId: "mynd-health-production",
  storageBucket: "mynd-health-production.appspot.com",
  messagingSenderId: "947789857809",
  appId: "1:947789857809:web:9c79dd8061d95106b35db0",
  measurementId: "G-GCD6S1GC79",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
