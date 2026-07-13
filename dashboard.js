import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
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
let editId = null;
// Save Program
document.getElementById("save").addEventListener("click", async () => {

  try {

    await addDoc(collection(db, "programs"), {
      date: document.getElementById("date").value,
      location: document.getElementById("location").value,
      event: document.getElementById("event").value,
      dhol: document.getElementById("dhol").value,
      details: document.getElementById("details").value
    });

    alert("✅ Program Saved Successfully");

    document.getElementById("date").value = "";
    document.getElementById("location").value = "";
    document.getElementById("event").value = "";
    document.getElementById("dhol").value = "";
    document.getElementById("details").value = "";

    loadPrograms();

  } catch (e) {

    alert("❌ " + e.message);

  }

});

// Load Programs
async function loadPrograms() {

  const list = document.getElementById("programs");

  list.innerHTML = "";

  const snapshot = await getDocs(collection(db, "programs"));

  snapshot.forEach((item) => {

    const data = item.data();

    list.innerHTML += `
      <div style="border:1px solid #ccc;padding:15px;margin:10px;border-radius:10px">
        <h3>📅 ${data.date}</h3>

        <p>📍 ${data.location}</p>

        <p>🎉 ${data.event}</p>

        <p>🥁 ${data.dhol}</p>

        <p>${data.details}</p>

        <button onclick="editProgram('${item.id}',
'${data.date}',
'${data.location}',
'${data.event}',
'${data.dhol}',
'${data.details}')">
📝 Edit
</button>

<button onclick="deleteProgram('${item.id}')">
🗑 Delete
</button>

      </div>
    `;

  });

}

// Delete Program
window.deleteProgram = async function(id){

  if(confirm("क्या आप Delete करना चाहते हैं?")){

    await deleteDoc(doc(db,"programs",id));

    alert("✅ Deleted");

    loadPrograms();

  }

}

loadPrograms();
window.editProgram = function(id, date, location, event, dhol, details){

    editId = id;

    document.getElementById("date").value = date;
    document.getElementById("location").value = location;
    document.getElementById("event").value = event;
    document.getElementById("dhol").value = dhol;
    document.getElementById("details").value = details;

    document.getElementById("update").style.display = "block";
    document.getElementById("save").style.display = "none";
}
