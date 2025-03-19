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