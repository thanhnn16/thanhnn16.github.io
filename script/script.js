const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".slide-home");
const images = document.querySelectorAll(".slide-home img");
const buttons = document.querySelectorAll(".wrapper .button");

let imageIndex = 1;
let intervalId;

function calculateImageIndex(index) {
  if (index === images.length) {
    return 0;
  } else if (index < 0) {
    return images.length - 1;
  } else {
    return index;
  }
}

// A function that updates the carousel display to show the specified image
const slideImage = (index = ++imageIndex) => {
  // Calculate the updated image index
  // imageIndex =
  //   index === images.length ? 0 : index < 0 ? images.length - 1 : index;
  imageIndex = calculateImageIndex(index);
  // Update the carousel display to show the specified image
  carousel.style.transform = `translate(-${imageIndex * 100}%)`;
};

// Define function to start automatic image slider
const autoSlide = () => {
  // Start the slideshow by calling slideImage() every 2 seconds
  intervalId = setInterval(slideImage, 2000);
};

// Call autoSlide function on page load
autoSlide();

// A function that updates the carousel display to show the next or previous image
const updateClick = (e) => {
  // Stop the automatic slideshow
  clearInterval(intervalId);
  // Calculate the updated image index based on the button clicked
  const newImageIndex = imageIndex + (e.target.id === "next" ? 1 : -1);
  slideImage(newImageIndex);
  // Restart the automatic slideshow
  autoSlide();
};

// Add event listeners to the navigation buttons
buttons.forEach((button) => button.addEventListener("click", updateClick));

// Add mouseover event listener to wrapper element to stop auto sliding
wrapper.addEventListener("mouseover", () => clearInterval(intervalId));
// Add mouseleave event listener to wrapper element to start auto sliding again
wrapper.addEventListener("mouseleave", autoSlide);

// Get the button
let mybutton = document.getElementById("back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
