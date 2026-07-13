import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBu191EYsFJSg2yiKA2xTjGIycAMuKRxZo",
  authDomain: "ram-lakhan-dhol-tasha.firebaseapp.com",
  projectId: "ram-lakhan-dhol-tasha",
  storageBucket: "ram-lakhan-dhol-tasha.firebasestorage.app",
  messagingSenderId: "1066383225372",
  appId: "1:1066383225372:web:970d66160e8cc9c58265d9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("login").addEventListener("click", async () => {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);

    alert("✅ Login Successful");

    window.location.href = "dashboard.html";

  } catch (error) {
    alert("❌ " + error.message);
  }

});
