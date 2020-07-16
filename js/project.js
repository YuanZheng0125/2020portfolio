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

// fade in when scroll into viewport
$(function () {
  // $(document).ready shorthand
  $(".brief").fadeIn("slow");
});

$(document).ready(function () {
  /* Every time the window is scrolled ... */
  $(window).scroll(function () {
    /* Check the location of each desired element */
    $(".fadethisdiv").each(function (i) {
      var top_of_object = $(this).position().top;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > top_of_object) {
        $(this).animate({ opacity: "1" }, 2000);
      }
    });
  });
});
