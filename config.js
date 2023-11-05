import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js"
const firebaseConfig = {
  apiKey: "AIzaSyAQZ2XOYC0cpWcBD1BHzIi9ZoTHMQYTPs4",
  authDomain: "login-register-practice-7183e.firebaseapp.com",
  projectId: "login-register-practice-7183e",
  storageBucket: "login-register-practice-7183e.appspot.com",
  messagingSenderId: "952785359555",
  appId: "1:952785359555:web:49f34709b6488d09e4c876",
  measurementId: "G-7HRK1TKZWB"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);