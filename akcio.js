// proba

const promoMessages = [
    "🚀 Most akár -50% kedvezmény!",
    "🔥 Folyamatosan frissülő ajánlatok!",
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