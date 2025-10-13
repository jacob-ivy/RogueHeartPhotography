function sendMail() {
    let parms = {
        fname : document.getElementById("fname").value,
        lname : document.getElementById("lname").value,
        phone : document.getElementById("phone").value,
        desc : document.getElementById("desc").value
    }

    emailjs.send("service_gwa68dc", "template_b5twp2v", parms).then(alert("Email Sent!"))
    document.getElementsByClassName("book-form").reset()
}
