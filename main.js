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


// proba

const promoMessages = [
  "🚗 AKCIÓ! Most akár -30% kedvezmény!",
  "🔧 Ingyenes átvizsgálás minden javítás mellé!",
  "🔥 Olajcsere és szűrők cseréje most 20% kedvezménnyel!",
  "🚙 Téligumi csere AKCIÓS áron!"
];

let index = 0;
const promoText = document.getElementById("promo-text2");

function updatePromoText() {
  promoText.textContent = promoMessages[index];
  index = (index + 1) % promoMessages.length;
}

updatePromoText();
setInterval(updatePromoText, 3000); // 3 másodpercenként váltja a szöveget