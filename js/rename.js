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
