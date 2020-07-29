var curIframeIndex = 0;
var bsideslideIndex = 1;

// fade in when scroll into viewport
$(document).ready(function () {
  document.body.style.opacity = "1";
  var navActivator = navActivatorBuilder("menu-nav", "active");
  $(window).scroll(function () {
    fadeInLoad();
    navActivator();
  });

  smoothScroll();
  // Get all links with class="nav-link" inside the container
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

  //-------------------------------configuration for projects and iframe-------------------------------------------

  // Boxlayout Starts for iframe and project previews
  var Boxlayout = (function () {
    var $el = $(".bl-main"),
      $menu = $(".menu-nav"),
      $quotes = $(".quote"),
      $page = $(".onepage-pagination");
    ($sections = $el.children(".project")),
      (transEndEventNames = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd",
        msTransition: "MSTransitionEnd",
        transition: "transitionend",
      }),
      // transition end event name
      (transEndEventName =
        transEndEventNames[Modernizr.prefixed("transition")]),
      // support css transitions
      (supportTransitions = Modernizr.csstransitions);

    function init() {
      initEvents();
    }

    function initEvents() {
      $sections.each(function (index) {
        var $section = $(this);
        // expand the clicked section and scale down the others
        $section
          .on("click", function () {
            curIframeIndex = index;
            // setTimeout(function () {
            //   $section.children().last().removeClass("noDisplay");
            // }, 200);
            $section.find(".bl-content").css({ width: "100%", height: "100%" });

            $section.addClass("bl-expand bl-expand-top");
            $el.addClass("bl-expand-item");
            // hide the menu, pagination and quotes
            $menu.addClass("noDisplay");
            $quotes.addClass("bl-expand-item");
            $page.addClass("noDisplay");
          })

          .find("span.bl-icon-close")
          .on("click", function () {
            // close the expanded section and scale up the others

            $section
              .removeClass("bl-expand")
              .on(transEndEventName, function (event) {
                // show the menu, pagination and quotes
                $menu.removeClass("noDisplay");
                $quotes.removeClass("bl-expand");
                $page.removeClass("noDisplay");
                $section.find(".bl-content").css({ width: "0", height: "0" });

                if (!$(event.target).is(".project")) return false;
                $(this).off(transEndEventName).removeClass("bl-expand-top");
              });

            if (!supportTransitions) {
              $section.removeClass("bl-expand-top");
            }

            $el.removeClass("bl-expand-item");
            document.querySelectorAll("iframe")[curIframeIndex].src += "";
            return false;
          });
      });
    }

    return { init: init };
  })();
  Boxlayout.init();

  // --------------Configuration of Motion-------------------------------------------
  // Pop up bside function

  $(".bsideImage").map(function () {
    $(this).click(function () {
      $(this).next("#popup-content").toggleClass("show");
    });
  });

  $(".btn-popup-close").map(function () {
    $(this).click(function () {
      $(this).parent("#popup-content").toggleClass("show");
      $(this)
        .next("iframe")
        .attr("src", function (i, val) {
          return val;
        });
    });
  });

  showbsideSlides(bsideslideIndex);

  //-------------------Configuration for horizontal scrolling of B-side pics-----------------
  // mousewheel horizontal scrolling
  (function () {
    function scrollHorizontally(e) {
      e.preventDefault();
      e = window.event || e;
      var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
      document.getElementById("horizontal-scroll-wrapper").scrollLeft -=
        delta * 40; // Multiplied by 40
    }
    if (document.getElementById("horizontal-scroll-wrapper").addEventListener) {
      // IE9, Chrome, Safari, Opera
      document
        .getElementById("horizontal-scroll-wrapper")
        .addEventListener("mousewheel", scrollHorizontally, false);
      // Firefox
      document
        .getElementById("horizontal-scroll-wrapper")
        .addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } else {
      // IE 6/7/8
      document
        .getElementById("horizontal-scroll-wrapper")
        .attachEvent("onmousewheel", scrollHorizontally);
    }
  })();

  //---------------------Configuration for Modal-----------------------------------------
  // Model Popup
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the image and insert it inside the modal
  var images = document.querySelectorAll(".galleryImage");
  var modalImg = document.getElementById("modalImage");
  for (let i = 0; i < images.length; i++) {
    images[i].onclick = function () {
      modal.style.display = "block";
      modalImg.src = this.src;
    };
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // Modal Video
  var modalvideocontainer = document.getElementById("myModal-video");
  // Show model when click video
  var videos = document.getElementById("video01");
  var modalvideo = document.getElementById("modalVideo");
  videos.onclick = function () {
    modalvideocontainer.style.display = "block";
  };

  // Get the <span> element that closes the modalvideo
  var videoclose = document.getElementsByClassName("close-video")[0];

  // When the user clicks on <span> (x), close the modalvideo
  videoclose.onclick = function () {
    modalvideocontainer.style.display = "none";
  };

  // ---------------------Hide scrollbar when open children frames---------------------
  $(".openFrame").map(function () {
    $(this).click(() => $("body").addClass("noScrollbar"));
  });

  $(".closeFrame").map(function () {
    $(this).click(() => $("body").removeClass("noScrollbar"));
  });
});

//---------------------helper functions for slide show------------------------
function plusbsideSlides(n) {
  showbsideSlides((bsideslideIndex += n));
}

function currentbsideSlide(n) {
  showbsideSlides((bsideslideIndex = n));
}

function showbsideSlides(n) {
  var i;
  var bsideslides = document.getElementsByClassName("bsideslide");
  var bsidedots = document.getElementsByClassName("bside-dot");

  if (n > bsideslides.length) {
    bsideslideIndex = 1;
  }
  if (n < 1) {
    bsideslideIndex = bsideslides.length;
  }
  for (i = 0; i < bsideslides.length; i++) {
    bsideslides[i].style.display = "none";
  }
  for (i = 0; i < bsidedots.length; i++) {
    bsidedots[i].className = bsidedots[i].className.replace(" dot-active", "");
  }
  bsideslides[bsideslideIndex - 1].style.display = "block";
  bsidedots[bsideslideIndex - 1].className += " dot-active";
}
