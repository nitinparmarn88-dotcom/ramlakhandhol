import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
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
async function loadPrograms() {

  const list = document.getElementById("programs");
  list.innerHTML = "";

  const snapshot = await getDocs(collection(db, "programs"));

  snapshot.forEach((item) => {

    const data = item.data();

    list.innerHTML += `
      <div style="border:1px solid #ccc;padding:10px;margin:10px;border-radius:10px;">
        <b>${data.date}</b><br>
        📍 ${data.location}<br>
        🎉 ${data.event}<br>
        🥁 ${data.dhol}<br>
        📝 ${data.details}<br><br>

        <button onclick="deleteProgram('${item.id}')">
          🗑 Delete
        </button>
      </div>
    `;

  });

}

window.deleteProgram = async function(id){

  if(confirm("Delete Program?")){

    await deleteDoc(doc(db,"programs",id));

    alert("✅ Deleted");

    loadPrograms();

  }

}

loadPrograms();
