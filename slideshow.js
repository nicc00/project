const currentSlide = document.getElementById("currentSlide");
let slide = 0;
let next = document.getElementById("next");
let previous = document.getElementById("previous");
let slideshow = document.getElementById("slideshow");
function doSlideshow(n) {
  slide += n;
  if (slide > slides.length - 1) {
    slide = 0;
  }
  if (slide < 0) {
    slide = slides.length - 1;
  }
  currentSlide.src = slides[slide];
}
next.onclick = function () {
  doSlideshow(1);
};
previous.onclick = function () {
  doSlideshow(-1);
};
function morePictures() {
  if (slideshow.style.display === "block") {
    slideshow.style.display = "none";
  } else {
    slideshow.style.display = "block";
  }
}
document.getElementById("morePictures").onclick = morePictures;
