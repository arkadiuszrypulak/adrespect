// Slider
document.addEventListener("DOMContentLoaded", () => {
  const slideContent = document.querySelectorAll(".slide-content");
  const slideImg = document.querySelectorAll(".slide-img");
  const rightBtn = document.getElementById("right-btn");
  const leftBtn = document.getElementById("left-btn");

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
        slide.classList.remove("hidden", "-translate-x-full", "opacity-0");
        slide.classList.add("animate__fadeInLeft");
      } else {
        slide.classList.add("hidden", "animate__fadeOut");
      }
    });

    slideImg.forEach((slide, i) => {
      if (i === currentIndex) {
        slide.classList.remove("hidden", "translate-x-full", "opacity-0");
        slide.classList.add("animate__fadeInRight");
      } else {
        slide.classList.add("hidden", "animate__fadeInRight");
      }
    });
  };
  showSlide(currentIndex);
});
