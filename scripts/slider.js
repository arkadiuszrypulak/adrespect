// Slider
document.addEventListener("DOMContentLoaded", () => {
  const slideContent = document.querySelectorAll(".slide-content");
  const slideImg = document.querySelectorAll(".slide-img");
  const rightBtn = document.getElementById("right-btn");
  const leftBtn = document.getElementById("left-btn");

  console.log(slideContent, slideImg);
  let currentIndex = 0;

  rightBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slideContent.length;
    showSlide(currentIndex);
  });
  leftBtn.addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + slideContent.length) % slideContent.length;
    showSlide(currentIndex);
  });

  const showSlide = (currentIndex) => {
    slideContent.forEach((slide, i) => {
      if (i === currentIndex) {
        slide.classList.remove("hidden", "-translate-x-full");
        slide.classList.add("slide-in-left");
      } else {
        slide.classList.add("hidden", "slide-in-left");
      }
    });

    slideImg.forEach((slide, i) => {
      if (i === currentIndex) {
        slide.classList.remove("hidden", "translate-x-full", "opacity-0");
        slide.classList.add("slide-in");
      } else {
        slide.classList.add("hidden", "slide-in-right");
      }
    });
  };
  showSlide(currentIndex);
});
