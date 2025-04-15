document.addEventListener("DOMContentLoaded", function() {
    const fullImgBox = document.getElementById("fullImgBox");
    const fullImg = document.getElementById("fullImg");
    const galleryImages = document.querySelectorAll(".img-gallery img");
    const closeBtn = document.querySelector(".full-img .close");
    const leftBtn = document.querySelector(".full-img .left");
    const rightBtn = document.querySelector(".full-img .right");
  
    let currentImgIndex = 0;
    let allImages = [];
  
    galleryImages.forEach((img, index) => {
      allImages.push(img.src);
      img.addEventListener("click", function () {
        currentImgIndex = index;
        openFullImg(allImages[currentImgIndex]);
      });
    });
  
    function openFullImg(src) {
      fullImgBox.style.display = "flex";
      fullImg.src = src;
    }
  
    function closeFullImg() {
      fullImgBox.style.display = "none";
    }
  
    function showPrevImg() {
      currentImgIndex = (currentImgIndex - 1 + allImages.length) % allImages.length;
      fullImg.src = allImages[currentImgIndex];
    }
  
    function showNextImg() {
      currentImgIndex = (currentImgIndex + 1) % allImages.length;
      fullImg.src = allImages[currentImgIndex];
    }
  
    leftBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      showPrevImg();
    });
  
    rightBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      showNextImg();
    });
  
    closeBtn.addEventListener("click", closeFullImg);
  
    fullImgBox.addEventListener("click", function(event) {
      const target = event.target;
      if (
        target !== fullImg &&
        !target.classList.contains("nav") &&
        !target.classList.contains("close")
      ) {
        closeFullImg();
      }
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('.zoomable');
    let isZoomed = false;

    img.addEventListener('click', () => {
      if (window.innerWidth < 768) return; // Csak gépen működjön

      isZoomed = !isZoomed;
      img.classList.toggle('zoomed');
    });

    // Töröljük az egérkövetést
    img.addEventListener('mousemove', (e) => {
      if (isZoomed) return; // Ne csináljon semmit nagyítva
      // Ha szükséges, ide jöhet mozgó zoom origin - most nem kell
    });
  });