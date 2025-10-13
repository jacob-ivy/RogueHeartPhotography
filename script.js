function sendMail() {
    let parms = {
        fname : document.getElementById("fname").value,
        lname : document.getElementById("lname").value,
        phone : document.getElementById("phone").value,
        desc : document.getElementById("desc").value
    }

    emailjs.send("service_gwa68dc", "template_b5twp2v", parms).then(alert("Email Sent!"))
}

function clearValues () {
    document.getElementById("fname").value = ""
    document.getElementById("lname").value = ""
    document.getElementById("phone").value = ""
    document.getElementById("desc").value = ""
}
