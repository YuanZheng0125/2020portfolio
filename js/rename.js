$(document).ready(function () {
  fadeInLoad();
  document.body.style.opacity = "1";
  var navActivator = navActivatorBuilder("menu-nav", "active");
  $(window).scroll(function () {
    fadeInLoad();
    navActivator();
  });

  smoothScroll();

  var navItems = document.getElementsByClassName("nav-item");
  var itemLinks = document.getElementsByClassName("nav-link");

  // Loop through the links and add the active class to the current/clicked link
  for (var i = 0; i < itemLinks.length; i++) {
    itemLinks[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
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
