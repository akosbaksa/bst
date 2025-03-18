document.addEventListener("DOMContentLoaded", function() {
    const fullImgBox = document.getElementById("fullImgBox");
    const fullImg = document.getElementById("fullImg");
  
    function openFullImg(imgSrc) {
        fullImgBox.style.display = "flex";
        fullImg.src = imgSrc;
    }
  
    function closeFullImg() {
        fullImgBox.style.display = "none";
    }
  
    // Minden galéria képre kattintás esemény hozzáadása
    document.querySelectorAll(".img-gallery img").forEach(img => {
        img.addEventListener("click", function() {
            openFullImg(this.src);
        });
    });
  
    // Bezárás gomb
    document.querySelector(".full-img span").addEventListener("click", closeFullImg);
  
    fullImgBox.addEventListener("click", function(event) {
      if (event.target !== fullImg) {
          closeFullImg();
      }
    });
  
    
  });