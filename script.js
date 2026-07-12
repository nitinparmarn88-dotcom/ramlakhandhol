const form = document.querySelector("#booking form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value;
    const phone = form.querySelector('input[type="tel"]').value;
    const date = form.querySelector('input[type="date"]').value;
    const address = form.querySelectorAll('input[type="text"]')[1].value;
    const service = form.querySelector("select").value;
    const message = form.querySelector("textarea").value;

    const text =
`*नई बुकिंग*

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
