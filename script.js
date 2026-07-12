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
const menuBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if(menuBtn){
    menuBtn.addEventListener("click",()=>{
        nav.classList.toggle("active");
    });
}
