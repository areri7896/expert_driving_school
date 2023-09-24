// const slides = document.querySelectorAll(".slide");
// let counter = 0;

// slides.forEach((slide, index) => {
//   slide.style.left = `${index * 100}%`;
// });

// const goNext = () => {
//   counter++;
//   if (counter >= slides.length) {
//     counter = 0;
//   }
//   slideImage();
// };

// const goPrev = () => {
//   counter--;
//   if (counter < 0) {
//     counter = slides.length - 1;
//   }
//   slideImage();
// };

// const slideImage = () => {
//   slides.forEach((slide) => {
//     slide.style.transform = `translateX(-${counter * 100}%)`;
//   });
// };
const slides = document.querySelectorAll(".slide");
let counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const slideInterval = 5000; // Change this to the desired interval in milliseconds (e.g., 5000 for 5 seconds)
let autoSlideTimer;

const goNext = () => {
  counter++;
  if (counter >= slides.length) {
    counter = 0;
  }
  slideImage();
};

const goPrev = () => {
  counter--;
  if (counter < 0) {
    counter = slides.length - 1;
  }
  slideImage();
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

// Function to start automatic sliding
function startAutoSlide() {
  autoSlideTimer = setInterval(goNext, slideInterval);
}

// Function to stop automatic sliding
function stopAutoSlide() {
  clearInterval(autoSlideTimer);
}

// Start automatic sliding when the page loads
startAutoSlide();

// Stop automatic sliding when the user interacts with the slider (e.g., clicks the Prev/Next buttons)
slides.forEach((slide) => {
  slide.addEventListener("mouseenter", stopAutoSlide);
  slide.addEventListener("mouseleave", startAutoSlide);
});
