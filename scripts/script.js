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
  searchIconMobile.classList.add("absolute", "right-8");
  searchIconMobile.style.transform = "translateX(100%)";
  searchIconMobile.style.animation = "none";
  searchInputMobile.focus();
});
searchInputMobile.addEventListener("blur", () => {
  if (searchInput.value === "") {
    searchInputMobile.classList.add("hidden");
    searchIconMobile.classList.remove("absolute", "top-0", "right-8");
    searchIconMobile.style.animation = "";
    searchIconMobile.style.transform = "";
  }
});
//Wyszukiwarka desktop
searchContainer.addEventListener("click", () => {
  searchInput.classList.remove("hidden");
  searchIcon.classList.add("absolute", "right-8");
  searchIcon.style.transform = "translateX(100%)";
  searchIcon.style.animation = "none";
  searchInput.focus();
});
searchInput.addEventListener("blur", () => {
  if (searchInput.value === "") {
    searchInput.classList.add("hidden");
    searchIcon.classList.remove("absolute", "top-0", "right-8");
    searchIcon.style.animation = "";
    searchIcon.style.transform = "";
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

  hiddenList.classList.toggle("block");
  hiddenList.classList.toggle("-translate-y-2");
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
    overlay.classList.remove("pointer-events-none", "hidden");
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
    menuMobile.classList.add("hidden");

    overlay.classList.add("pointer-events-none", "hidden");
    overlay.classList.remove("fixed");

    setTimeout(() => {
      lineSecond.style.backgroundColor = "black";
      menuMobile.classList.add("hidden");
    }, 200);
  }
});

// document.addEventListener("DOMContentLoaded", () => {
const mobileMenuLinks = document.querySelectorAll("#menu-mobile a.menu");

mobileMenuLinks.forEach((link) => {
  const targetSection = document.querySelector(link.getAttribute("href"));
  if (targetSection) {
    targetSection.scrollIntoView({
      behavior: "smooth",
    });
  }
});
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const mobileMenu = document.getElementById("menu-mobile");
    mobileMenu.classList.remove("flex");
    mobileMenu.classList.add("hidden");
    overlay.classList.remove("fixed");
    hamburger.classList.remove("open");
    lineFirst.style.transform = "";
    lineFirst.style.width = "20px";
    lineThird.style.transform = "";
    lineSecond.style.display = "inline-block";
    lineSecond.style.backgroundColor = "white";
    lineThird.style.width = "20px";

    setTimeout(() => {
      lineSecond.style.backgroundColor = "black";
      menuMobile.classList.add("hidden");
    }, 200);

    // const targetSection = document.querySelector(link.getAttribute("href"));
    // if (targetSection) {
    //   targetSection.scrollIntoView({
    //     behavior: "smooth",
    //   });
    // }
  });
});
// });

const fadeInElements = document.querySelectorAll(".animate-fadeIn");

const fadeInObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.getAttribute("data-fade-in") === "false") {
        entry.target.setAttribute("data-fade-in", "true");
        entry.target.classList.add("opacity-100");
        entry.target.classList.remove("opacity-0");
        observer.unobserve(entry.target);
      }
    }
  });
});

fadeInElements.forEach((element) => {
  fadeInObserver.observe(element);
});
