console.log(typeof ScrollReveal);

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOptions = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOptions,
});

ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOptions,
  delay: 500,
});

// service container
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOptions,
  interval: 500,
});

// price container
ScrollReveal().reveal(".price__card", {
  ...scrollRevealOptions,
  interval: 300,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
},
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
console.log('ScrollReveal:', typeof ScrollReveal);


console.log("A main.js betöltődött!");


document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const logos = Array.from(slider.children);

  // Logók duplikálása folyamatos görgetéshez
  logos.forEach((logo) => {
    let clone = logo.cloneNode(true);
    slider.appendChild(clone);
  });

  let speed = 1; // Sebesség (minél nagyobb, annál gyorsabb)
  let pos = 0;

  function animate() {
    pos -= speed;
    if (pos <= -slider.scrollWidth / 2) {
      pos = 0;
    }
    slider.style.transform = `translateX(${pos}px)`;
    requestAnimationFrame(animate);
  }

  animate();
});


// COOKIES

// Ellenőrizze, hogy a süti már el lett-e fogadva az aktuális session-ban
if (!sessionStorage.getItem("cookieAccepted")) {
  // Ha még nem lett elfogadva, jelenítse meg a figyelmeztető ablakot
  setTimeout(function() {
      document.getElementById("cookie-popup").style.display = "block";
  }, 500); // 0.5 másodperccel a betöltés után jelenik meg
}

// "Elfogadás" gomb
document.getElementById("accept-btn").addEventListener("click", function() {
  // Süti elfogadása
  sessionStorage.setItem("cookieAccepted", "true");
  // Figyelmeztető ablak eltűnik
  document.getElementById("cookie-popup").style.display = "none";
});

// "Elutasítás" gomb
document.getElementById("decline-btn").addEventListener("click", function() {
  // Süti elutasítása
  sessionStorage.setItem("cookieAccepted", "false");
  // Figyelmeztető ablak eltűnik
  document.getElementById("cookie-popup").style.display = "none";
});