$(document).ready(function () {
  // fade in when first load
  document.body.style.opacity = "1";

  var navActivator = navActivatorBuilder("index-menu", "menuActive");

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {
    fadeInLoad();
    navActivator();
  });
  smoothScroll();

  $(".index-menu").children("li").eq(0).addClass("menuActive");

  horizontalScroll();
});

// slide show
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// 2nd-slide show
var slideTwoIndex = 1;
showSlidesTwo(slideTwoIndex);

function plusSlidesTwo(n) {
  showSlidesTwo((slideTwoIndex += n));
}

function currentSlideTwo(n) {
  showSlidesTwo((slideTwoIndex = n));
}

function showSlidesTwo(n) {
  var j;
  var slidestwo = document.getElementsByClassName("mySlidesTwo");
  var dotstwo = document.getElementsByClassName("dotTwo");

  if (n > slidestwo.length) {
    slideTwoIndex = 1;
  }
  if (n < 1) {
    slideTwoIndex = slidestwo.length;
  }
  for (j = 0; j < slidestwo.length; j++) {
    slidestwo[j].style.display = "none";
  }
  for (j = 0; j < dotstwo.length; j++) {
    dotstwo[j].className = dotstwo[j].className.replace(" active", "");
  }
  slidestwo[slideTwoIndex - 1].style.display = "block";
  dotstwo[slideTwoIndex - 1].className += " active";
}
