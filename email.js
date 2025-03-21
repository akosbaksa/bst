function sendEmail() {
    const name = document.getElementById("name").value.trim()
    const email = document.getElementById("email").value.trim()
    const message = document.getElementById("message").value.trim()
    
    if(name === "" ||  email === "" ||  message === ""){
        alert("Minden mező kitöltése kötelező!")
    }else{
        if(validateEmailFormat(email)){
            const parms = {
                name : name,
                email : email,
                message : message
            }
    
            emailjs.send("service_7j4qc3n","template_xy9mpen",parms)
            .then(() => {
                alert("Üzenet elküldve!")
            })
            .catch((error) => {
                console.log("Hiba az üzenet elküldése közben!", error)
                alert("Az üzenetet nem sikerült elküldeni!")
            })
        }
        else{
            alert("Az email címet helyes formatumban add meg! Pl.: gibszjakab@gmail.com")
        }
    }
}

function validateEmailFormat(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}