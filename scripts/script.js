// const hamburgerButton = document.getElementById("hamburger");
// const hamburgerIcon = document.getElementById("hamburger-icon");
// const closeIcon = document.getElementById("close-icon");
// const menu = document.getElementById("menu");
// const servicesButton = document.getElementById("services-btn");
// const servicesMenu = document.getElementById("services-menu");
// let isMenuOpen = false;
// let isServicesMenuOpen = false;

// hamburgerButton.addEventListener("click", () => {
//   if (isMenuOpen) {
//     hamburgerIcon.classList.remove("hidden");
//     hamburgerIcon.classList.add("block");
//     closeIcon.classList.remove("block");
//     closeIcon.classList.add("hidden");
//     menu.classList.add("hidden");
//   } else {
//     hamburgerIcon.classList.remove("block");
//     hamburgerIcon.classList.add("hidden");
//     closeIcon.classList.remove("hidden");
//     closeIcon.classList.add("block");
//     menu.classList.remove("hidden");
//   }

//   isMenuOpen = !isMenuOpen;
// });

// servicesButton.addEventListener("click", () => {
//   if (isServicesMenuOpen) {
//     servicesMenu.classList.add("hidden");
//   } else {
//     servicesMenu.classList.remove("hidden");
//   }

//   isServicesMenuOpen = !isServicesMenuOpen;
// });

//menu mobile
const menuMobile = document.getElementById("menu-mobile");
//dropdown dla ofert
const offerBtn = document.getElementById("offer-btn");
const hiddenListMobile = document.getElementById("hidden-list-mobile");
const chevronMobile = document.getElementById("chevronMobile");
//elementy wyszukiwarki
const searchContainer = document.getElementById("searchContainer");
const searchInput = document.getElementById("searchInput");
const searchIcon = document.getElementById("searchIcon");
//hamburger elementy
const hamburger = document.getElementById("hamburger");
const lineFirst = document.getElementById("first-line");
const lineSecond = document.getElementById("second-line");
const lineThird = document.getElementById("third-line");

searchContainer.addEventListener("click", () => {
  searchInput.classList.remove("hidden");
  searchIcon.classList.add("absolute");
  searchIcon.classList.add("top-0");
  searchIcon.classList.add("right-8");
  searchIcon.style.transform = "translateX(100%)";
  searchIcon.style.animation = "none";
  searchInput.focus();
});

searchInput.addEventListener("blur", () => {
  if (searchInput.value === "") {
    searchInput.classList.add("hidden");
    searchIcon.style.transform = "";
    searchIcon.style.animation = "";
    searchIcon.classList.remove("right-8");
  }
});

offerBtn.addEventListener("click", () => {
  hiddenListMobile.classList.toggle("opacity-100");
  hiddenListMobile.classList.toggle("transform");
  hiddenListMobile.classList.toggle("hidden");
  chevronMobile.classList.toggle("rotate-180");
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
  } else {
    hamburger.classList.remove("open");
    lineFirst.style.transform = "";
    lineFirst.style.width = "20px";
    lineThird.style.transform = "";
    lineSecond.style.display = "inline-block";
    lineSecond.style.backgroundColor = "white";
    lineThird.style.width = "20px";
    menuMobile.classList.remove("opacity-100");

    setTimeout(() => {
      lineSecond.style.backgroundColor = "black";
    }, 200);
  }
});
