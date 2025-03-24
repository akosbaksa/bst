function sendEmail() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const checkbtn = document.getElementById("adatkezeles");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    const isChecked = checkbtn.checked
    let szovegesValasz = ""

    if(isChecked){
        szovegesValasz = "Elfogadva"
    }

    if(name === "" ||  email === "" ||  message === ""){
        ertesites('hiba','Hiba - Minden mező kitöltése kötelező!')
    }else{
        if(validateEmailFormat(email)){
            if(isChecked){
                const parms = {
                    name : name,
                    email : email,
                    message : message,
                    adatkezeles: szovegesValasz
                }
        
                emailjs.send("service_7j4qc3n","template_xy9mpen",parms)
                .then(() => {
                    ertesites('sikeres','Siker - Az üzenetet sikeresen elküldted!');
                    nameInput.value = "";
                    emailInput.value = "";
                    messageInput.value = "";
                    checkbtn.checked = false;
                })
                .catch((error) => {
                    console.log("Hiba az üzenet elküldése közben!", error)
                    ertesites('hiba','Hiba - Az üzenetet nem sikerült elküldeni!')
                })
            }else{
                ertesites('warning', 'Fogadd el az adatkezelési tájékoztatót!')
            }
        }
        else{
            ertesites('warning','Az email címet helyes formátumban add meg! Pl.: gibszjakab@gmail.com!')
        }
    }
}

function validateEmailFormat(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function ertesites(allapot,uzenet) {
    const alertBox = document.getElementById(allapot);
    
    alertBox.classList.remove('hidden'); // Először megjelenítjük
    alertBox.querySelector('p').textContent = uzenet;
    
    alertBox.style.height = 'auto'; // Automatikus magasság kiszámításához
    const fullHeight = alertBox.scrollHeight + 'px'; // Előre kiszámoljuk a teljes magasságot
    
    alertBox.style.height = '0'; // Magasság nullára állítása, hogy az animáció látható legyen
    
    requestAnimationFrame(() => {
        alertBox.style.transition = 'height 0.5s ease'; // Biztosítjuk az animációt
        alertBox.style.height = fullHeight; // Magasság beállítása
    });

    
    setTimeout(() => {
        alertBox.style.height = '0'; // Visszaállítjuk a magasságot 0-ra
        alertBox.addEventListener('transitionend', () => {
            alertBox.classList.add('hidden'); // Eltüntetjük a dobozt, ha az animáció véget ért
                }, { once: true }); // Csak egyszeri eseménykezelő
            }, 4000); 
}