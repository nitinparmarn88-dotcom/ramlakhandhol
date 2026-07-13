import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBu191EYsFJSg2yiKA2xTjGIycAMuKRxZo",
  authDomain: "ram-lakhan-dhol-tasha.firebaseapp.com",
  projectId: "ram-lakhan-dhol-tasha",
  storageBucket: "ram-lakhan-dhol-tasha.firebasestorage.app",
  messagingSenderId: "1066383225372",
  appId: "1:1066383225372:web:970d66160e8cc9c58265d9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("save").addEventListener("click", async () => {
  try {
    await addDoc(collection(db, "programs"), {
      date: document.getElementById("date").value,
      location: document.getElementById("location").value,
      event: document.getElementById("event").value,
      dhol: document.getElementById("dhol").value,
      details: document.getElementById("details").value
    });

    alert("✅ Program Save Successfully");

    document.getElementById("date").value = "";
    document.getElementById("location").value = "";
    document.getElementById("event").value = "";
    document.getElementById("dhol").value = "";
    document.getElementById("details").value = "";

  } catch (e) {
    alert("❌ Error: " + e.message);
  }
});
