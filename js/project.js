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

// Add Back to Top Button
backbtn = document.getElementById("backtotop");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 800 ||
    document.documentElement.scrollTop > 800
  ) {
    backbtn.style.display = "block";
  } else {
    backbtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Collapsible Index
var coll = document.getElementsByClassName("btn-index");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// scroll 800px to show index

indexbtn = document.getElementById("index");

var IndexScrollFunc = function () {
  var y = window.scrollY;
  if (y >= 800) {
    indexbtn.className = "show";
  } else {
    indexbtn.className = "hide";
  }
};

window.addEventListener("scroll", IndexScrollFunc);
