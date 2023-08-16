const hamburgerButton = document.getElementById("hamburger");
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");
const menu = document.getElementById("menu");
const servicesButton = document.getElementById("services-btn");
const servicesMenu = document.getElementById("services-menu");
let isMenuOpen = false;
let isServicesMenuOpen = false;

hamburgerButton.addEventListener("click", () => {
  if (isMenuOpen) {
    hamburgerIcon.classList.remove("hidden");
    hamburgerIcon.classList.add("block");
    closeIcon.classList.remove("block");
    closeIcon.classList.add("hidden");
    menu.classList.add("hidden");
  } else {
    hamburgerIcon.classList.remove("block");
    hamburgerIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
    closeIcon.classList.add("block");
    menu.classList.remove("hidden");
  }

  isMenuOpen = !isMenuOpen;
});

servicesButton.addEventListener("click", () => {
  if (isServicesMenuOpen) {
    servicesMenu.classList.add("hidden");
  } else {
    servicesMenu.classList.remove("hidden");
  }

  isServicesMenuOpen = !isServicesMenuOpen;
});
