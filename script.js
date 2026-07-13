// ==========================
// Firebase
// ==========================
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBu191EYsFJSg2yiKA2xTjGIycAMuKRxZo",
  authDomain: "ram-lakhan-dhol-tasha.firebaseapp.com",
  projectId: "ram-lakhan-dhol-tasha",
  storageBucket: "ram-lakhan-dhol-tasha.firebasestorage.app",
  messagingSenderId: "1066383225372",
  appId: "1:1066383225372:web:970d66160e8cc9c58265d9",
  measurementId: "G-T2NTQSX6NJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("Firebase Connected");

// ==========================
// Image Slider
// ==========================
const slides = document.querySelectorAll(".slide");
let index = 0;

if (slides.length > 0) {
  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 3000);
}
// ==========================
// Booking Form
// ==========================
const form = document.querySelector("#booking form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelectorAll("input[type='text']")[0].value;
    const phone = form.querySelector("input[type='tel']").value;
    const date = form.querySelector("input[type='date']").value;
    const address = form.querySelectorAll("input[type='text']")[1].value;
    const service = form.querySelector("select").value;
    const message = form.querySelector("textarea").value;

    const text = `*नई बुकिंग*

👤 नाम: ${name}
📞 मोबाइल: ${phone}
📅 तारीख: ${date}
📍 पता: ${address}
🎉 कार्यक्रम: ${service}
📝 संदेश: ${message}`;

    window.open(
      `https://wa.me/918827907601?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  });
}

// ==========================
// Gallery Lightbox
// ==========================
const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

if (galleryImages.length > 0 && lightbox && lightboxImg && closeBtn) {
  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
}

// ==========================
// Mobile Menu
// ==========================
const menuBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}
// ==========================
// Load Daily Programs
// ==========================
async function loadPrograms() {

  const list = document.getElementById("program-list");

  if (!list) return;

  list.innerHTML = "Loading...";

  try {

    const snapshot = await getDocs(collection(db, "programs"));
console.log("Documents:", snapshot.docs.map(doc => ({
  id: doc.id,
  data: doc.data()
})));
    if (snapshot.empty) {
      list.innerHTML = "अभी कोई प्रोग्राम नहीं है";
      return;
    }

    list.innerHTML = "";

    snapshot.forEach((doc) => {

      const data = doc.data();

      list.innerHTML += `
        <div class="review-box">
          <h3>📅 ${data.date || ""}</h3>
          <p><b>📍 जगह:</b> ${data.location || ""}</p>
          <p><b>🎉 कार्यक्रम:</b> ${data.event || ""}</p>
          <p><b>🥁 ढोल:</b> ${data.dhol || ""}</p>
          <p><b>📝 विवरण:</b> ${data.details || ""}</p>
        </div>
      `;

    });

  } catch (error) {

    console.error(error);
    list.innerHTML = "डेटा लोड नहीं हो पाया";

  }

}

loadPrograms();
