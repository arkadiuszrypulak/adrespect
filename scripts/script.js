//menu mobile
const menuMobile = document.getElementById("menu-mobile");
const overlay = document.getElementById("overlay");
//dropdown dla ofert mobile
const offerBtnMobile = document.getElementById("offer-btn-mobile");
const hiddenListMobile = document.getElementById("hidden-list-mobile");
const chevronMobile = document.getElementById("chevronMobile");
//dropdown dla ofert desktopu
const offerBtn = document.getElementById("offer-btn");
const hiddenList = document.getElementById("hidden-list");
const chevron = document.getElementById("chevron");
//elementy wyszukiwarki - desktop
const searchContainer = document.getElementById("searchContainer");
const searchInput = document.getElementById("searchInput");
const searchIcon = document.getElementById("searchIcon");
//elementy wyszukiwarki - mobile
const searchContainerMobile = document.getElementById("searchContainer-mobile");
const searchInputMobile = document.getElementById("searchInput-mobile");
const searchIconMobile = document.getElementById("searchIcon-mobile");
//hamburger elementy
const hamburger = document.getElementById("hamburger");
const lineFirst = document.getElementById("first-line");
const lineSecond = document.getElementById("second-line");
const lineThird = document.getElementById("third-line");

//Wyszukiwarka mobile
searchContainerMobile.addEventListener("click", () => {
  searchInputMobile.classList.remove("hidden");
  searchIconMobile.classList.add("absolute");
  searchIconMobile.classList.add("right-8");
  searchIconMobile.style.transform = "translateX(100%)";
  searchIconMobile.style.animation = "none";
  searchInputMobile.focus();
});
searchInputMobile.addEventListener("blur", () => {
  if (searchInput.value === "") {
    searchInputMobile.classList.add("hidden");
    searchIconMobile.classList.remove("absolute");
    searchIconMobile.classList.remove("top-0");
    searchIconMobile.style.animation = "";
    searchIconMobile.style.transform = "";
    searchIconMobile.classList.remove("right-8");
  }
});
//Wyszukiwarka desktop
searchContainer.addEventListener("click", () => {
  searchInput.classList.remove("hidden");
  searchIcon.classList.add("absolute");
  searchIcon.classList.add("right-8");
  searchIcon.style.transform = "translateX(100%)";
  searchIcon.style.animation = "none";
  searchInput.focus();
});
searchInput.addEventListener("blur", () => {
  if (searchInput.value === "") {
    searchInput.classList.add("hidden");
    searchIcon.classList.remove("absolute");
    searchIcon.classList.remove("top-0");
    searchIcon.style.animation = "";
    searchIcon.style.transform = "";
    searchIcon.classList.remove("right-8");
  }
});
//Animacja strzałki w oferty - mobile
offerBtnMobile.addEventListener("click", () => {
  hiddenListMobile.classList.toggle("opacity-100");
  hiddenListMobile.classList.toggle("transform");
  hiddenListMobile.classList.toggle("hidden");
  chevronMobile.classList.toggle("rotate-180");
});
//Animacja strzałki w oferty - desktop
offerBtn.addEventListener("click", () => {
  hiddenList.classList.toggle("opacity-100");
  hiddenList.classList.toggle("transform");
  hiddenList.classList.toggle("hidden");
  chevron.classList.toggle("rotate-180");
});

//hamburger animacja oraz pojawianie sie menu
hamburger.addEventListener("click", () => {
  if (!hamburger.classList.contains("open")) {
    hamburger.classList.add("open");
    lineFirst.style.transform = "rotate(405deg) translate(2px, 2px)";
    lineFirst.style.width = "30px";
    lineSecond.style.display = "none";
    lineSecond.style.opactiy = 0;
    lineThird.style.transform = "rotate(-405deg) translate(2px, -2px)";
    lineThird.style.width = "30px";

    menuMobile.classList.add("opacity-100");
    menuMobile.classList.remove("hidden");
    overlay.classList.remove("pointer-events-none");
    overlay.classList.remove("hidden");
    overlay.classList.add("fixed");
  } else {
    hamburger.classList.remove("open");
    lineFirst.style.transform = "";
    lineFirst.style.width = "20px";
    lineThird.style.transform = "";
    lineSecond.style.display = "inline-block";
    lineSecond.style.backgroundColor = "white";
    lineThird.style.width = "20px";
    menuMobile.classList.remove("opacity-100");

    overlay.classList.add("pointer-events-none");
    overlay.classList.remove("fixed");
    overlay.classList.add("hidden");

    setTimeout(() => {
      lineSecond.style.backgroundColor = "black";
      menuMobile.classList.add("hidden");
    }, 200);
  }
});
// Slider
const rightBtn = document.getElementById("right-btn");
const leftBtn = document.getElementById("left-btn");

rightBtn.addEventListener("click", () => {
  alert("klik");
});

//gallery
// script.js

const gallery = document.querySelector(".gallery");
const gridItems = document.querySelectorAll(".grid-item");
const lightboxImages = [];
let currentImageIndex = 0;

gridItems.forEach((item) => {
  const imgSrc = item.querySelector("img").src;
  lightboxImages.push(imgSrc);

  item.addEventListener("click", () => {
    openLightbox(imgSrc);
    currentImageIndex = lightboxImages.indexOf(imgSrc);
  });
});

function openLightbox(imageSrc) {
  const lightbox = document.createElement("div");
  lightbox.classList.add("lightbox");

  const image = document.createElement("img");
  image.src = imageSrc;

  const prevButton = document.createElement("button");
  prevButton.innerText = "Poprzednie";
  prevButton.addEventListener("click", showPrevImage);

  const nextButton = document.createElement("button");
  nextButton.innerText = "Następne";
  nextButton.addEventListener("click", showNextImage);

  lightbox.appendChild(image);
  lightbox.appendChild(prevButton);
  lightbox.appendChild(nextButton);
  document.body.appendChild(lightbox);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      document.body.removeChild(lightbox);
    }
  });
}

// Poprawiona obsługa przycisków "Poprzednie" i "Następne"
function showPrevImage() {
  currentImageIndex =
    (currentImageIndex - 1 + lightboxImages.length) % lightboxImages.length;
  const newImageSrc = lightboxImages[currentImageIndex];
  const lightboxImage = document.querySelector(".lightbox img");
  lightboxImage.src = newImageSrc;
}

function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % lightboxImages.length;
  const newImageSrc = lightboxImages[currentImageIndex];
  const lightboxImage = document.querySelector(".lightbox img");
  lightboxImage.src = newImageSrc;
}
const expandButton = document.getElementById("expandButton");

expandButton.addEventListener("click", () => {
  const newImageSrcs = [
    "/images/Gallery/Photo-1.png",
    "/images/Gallery/Photo-2.png",
    "/images/Gallery/Photo-3.png",
    "/images/Gallery/Photo-4.png",
    "/images/Gallery/Photo-5.png",
    "/images/Gallery/Photo-6.png",
    "/images/Gallery/Photo-7.png",
    "/images/Gallery/Photo-8.png",
    "/images/Gallery/Photo-9.png",
    // Dodaj więcej ścieżek do nowych obrazków
  ];

  newImageSrcs.forEach((newImageSrc) => {
    const newGridItem = document.createElement("div");
    newGridItem.classList.add("grid-item");
    const newImage = document.createElement("img");
    newImage.src = newImageSrc;
    newImage.classList.add("mx-auto", "h-auto");
    newGridItem.appendChild(newImage);
    gallery.appendChild(newGridItem);

    lightboxImages.push(newImageSrc);

    newGridItem.addEventListener("click", () => {
      openLightbox(newImageSrc);
      currentImageIndex = lightboxImages.indexOf(newImageSrc);
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sliderContent = document.querySelector(".slider-content");
  const sliderImage = document.querySelector(".slider-image");
  const rightBtn = document.getElementById("right-btn");
  const leftBtn = document.getElementById("left-btn");
  let currentSlide = 0;

  rightBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % 3;
    changeSlide(currentSlide);
  });

  leftBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + 3) % 3;
    changeSlide(currentSlide);
  });

  function changeSlide(slideIndex) {
    sliderContent.classList.remove("active");
    sliderImage.classList.remove("active");

    setTimeout(() => {
      sliderContent.classList.add("active");
      sliderImage.classList.add("active");
    }, 10);
  }
});
