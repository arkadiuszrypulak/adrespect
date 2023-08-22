const elements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  elements.forEach((element) => {
    const elementTop = element.offsetTop;
    const elementHeight = element.offsetHeight;
    const windowHeight = window.innerHeight;
    const windowScrollTop = window.scrollY;

    if (
      windowScrollTop + windowHeight >= elementTop &&
      windowScrollTop <= elementTop + elementHeight
    ) {
      element.classList.remove("animate__fadeOut", "animate__translateY");
      element.classList.add("animate__fadeInUp");
    } else {
      element.classList.remove("animate__fadeInUp");
      element.classList.add("animate__fadeOut", "animate__translateY");
    }
  });
});
