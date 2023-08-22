//dropdown dla ofert desktopu
const offerBtn = document.getElementById("offer-btn");
const hiddenList = document.getElementById("hidden-list");
const chevron = document.getElementById("chevron");
//elementy wyszukiwarki - desktop
const searchContainer = document.getElementById("searchContainer");
const searchInput = document.getElementById("searchInput");
const searchIcon = document.getElementById("searchIcon");

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

//Animacja strzałki w oferty - desktop
offerBtn.addEventListener("click", () => {
  hiddenList.classList.toggle("opacity-100");
  hiddenList.classList.toggle("transform");
  hiddenList.classList.toggle("hidden");

  hiddenList.classList.toggle("block");
  hiddenList.classList.toggle("-translate-y-2");
  chevron.classList.toggle("rotate-180");
});
