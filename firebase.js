import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDU301i6K_Zw3s1x2OgANYdTc9IhF1Tjic",
  authDomain: "mohit-university.firebaseapp.com",
  projectId: "mohit-university",
  storageBucket: "mohit-university.firebasestorage.app",
  messagingSenderId: "562963104496",
  appId: "1:562963104496:web:a626281856f37d3a61f835"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
