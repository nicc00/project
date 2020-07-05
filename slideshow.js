const currentSlide = document.getElementById("currentSlide");
let slide = 0;
let next = document.getElementById("next");
let previous = document.getElementById("previous");
let slideshow = document.getElementById("slideshow");
function doSlideshow(n, a) {
  slide += n;
  if (slide > slides.length - 1) {
    slide = 0;
  }
  if (slide < 0) {
    slide = slides.length - 1;
  }
  currentSlide.src = slides[slide];
  if (a === 1) {
      timer = setTimeout(function(){doSlideshow(1, 1);}, 3000)
  }
  else if (a === 2){
      clearTimeout(timer)
  }
}
next.onclick = function () {
  doSlideshow(1, 0);
};
previous.onclick = function () {
  doSlideshow(-1, 0);
};
currentSlide.onmouseover = function () {
    doSlideshow(1, 1);
};
currentSlide.onmouseout = function () {
    doSlideshow(0, 2);
};
function morePictures() {
  if (slideshow.style.display === "block") {
    slideshow.style.display = "none";
    document.getElementById("morePictures").innerHTML = "more pictures"

  } else {
    slideshow.style.display = "block";
    document.getElementById("morePictures").innerHTML = "hide pictures"
  }
}
document.getElementById("morePictures").onclick = morePictures;
