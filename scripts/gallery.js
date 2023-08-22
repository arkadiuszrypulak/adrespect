//Gallery
const gallery = document.querySelector(".gallery");
const gridItems = document.querySelectorAll(".grid-item");
const expandButton = document.getElementById("expandButton");
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

const openLightbox = (imageSrc) => {
  const lightbox = document.createElement("div");
  lightbox.classList.add("lightbox");

  const image = document.createElement("img");
  image.src = imageSrc;

  const prevButton = document.createElement("div");
  prevButton.classList.add("lightbox-btn", "bottom-4", "left-5");
  prevButton.innerText = "<";
  prevButton.addEventListener("click", showPrevImage);

  const nextButton = document.createElement("div");
  nextButton.classList.add("lightbox-btn", "bottom-4", "right-5");
  nextButton.innerText = ">";
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
};

const showPrevImage = () => {
  currentImageIndex =
    (currentImageIndex - 1 + lightboxImages.length) % lightboxImages.length;
  const newImageSrc = lightboxImages[currentImageIndex];
  const lightboxImage = document.querySelector(".lightbox img");
  lightboxImage.src = newImageSrc;
};

const showNextImage = () => {
  currentImageIndex = (currentImageIndex + 1) % lightboxImages.length;
  const newImageSrc = lightboxImages[currentImageIndex];
  const lightboxImage = document.querySelector(".lightbox img");
  lightboxImage.src = newImageSrc;
};

expandButton.addEventListener("click", () => {
  const newImageSrcs = [
    "/images/Gallery/Photo-1.png",
    "/images/Gallery/Photo-4.png",
    "/images/Gallery/Photo-7.png",
    "/images/Gallery/Photo-2.png",
    "/images/Gallery/Photo-5.png",
    "/images/Gallery/Photo-9.png",
    "/images/Gallery/Photo-3.png",
    "/images/Gallery/Photo-6.png",
    "/images/Gallery/Photo-8.png",
  ];

  newImageSrcs.forEach((newImageSrc) => {
    const newGridItem = document.createElement("div");
    newGridItem.classList.add("grid-item");
    const newImage = document.createElement("img");
    newImage.src = newImageSrc;
    newImage.classList.add("mx-auto", "h-auto", "w-full");
    newGridItem.appendChild(newImage);
    gallery.appendChild(newGridItem);

    lightboxImages.push(newImageSrc);

    newGridItem.addEventListener("click", () => {
      openLightbox(newImageSrc);
      currentImageIndex = lightboxImages.indexOf(newImageSrc);
    });
  });
});
