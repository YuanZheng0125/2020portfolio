// fade in onload
$(document).ready(function () {
  document.body.style.opacity = "1";
});

// fade in when scroll into viewport
$(function () {
  // $(document).ready shorthand
  $("body").fadeIn("slow");
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

// smoothing scroll

const speed = 1000;

$('a[href*="#"]')
  .filter(
    (i, a) =>
      a.getAttribute("href").startsWith("#") ||
      a.href.startsWith(`${location.href}#`)
  )
  .unbind("click.smoothScroll")
  .bind("click.smoothScroll", (event) => {
    const targetId = event.currentTarget.getAttribute("href").split("#")[1];
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      event.preventDefault();
      $("html, body").animate(
        { scrollTop: $(targetElement).offset().top },
        speed
      );
    }
  });

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

// Active nav items when scroll to
// Cache selectors
var lastId,
  navMenu = $(".menu-nav"),
  // All list items
  navItems = navMenu.find("a"),
  // Anchors corresponding to menu items
  scrollItems = navItems.map(function () {
    var item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });

// Bind to scroll
$(window).scroll(function () {
  // Get container scroll position
  var fromTop = $(this).scrollTop();

  // Get id of current scroll item
  var cur = scrollItems.map(function () {
    if ($(this).offset().top <= fromTop) return this;
  });
  // Get the id of the current element
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;
    // Set/remove active class
    navItems
      .parent()
      .removeClass("active")
      .end()
      .filter("[href='#" + id + "']")
      .parent()
      .addClass("active");
  }
});

// Boxlayout Starts

var Boxlayout = (function () {
  var $el = $(".bl-main"),
    $menu = $(".menu-nav"),
    $page = $(".onepage-pagination");
  // $scroll = $(".bl-content");
  ($sections = $el.children(".project")),
    (transEndEventNames = {
      WebkitTransition: "webkitTransitionEnd",
      MozTransition: "transitionend",
      OTransition: "oTransitionEnd",
      msTransition: "MSTransitionEnd",
      transition: "transitionend",
    }),
    // transition end event name
    (transEndEventName = transEndEventNames[Modernizr.prefixed("transition")]),
    // support css transitions
    (supportTransitions = Modernizr.csstransitions);

  function init() {
    initEvents();
  }

  function initEvents() {
    $sections.each(function () {
      var $section = $(this);
      // expand the clicked section and scale down the others
      $section
        .on("click", function () {
          if (!$section.data("open")) {
            $section.data("open", true).addClass("bl-expand bl-expand-top");
            $el.addClass("bl-expand-item");
            // hide the menu, pagination and stop body scrolling
            $menu.addClass("noDisplay");
            $page.addClass("noDisplay");
          }
        })

        .find("span.bl-icon-close")
        .on("click", function () {
          // close the expanded section and scale up the others
          $section
            .data("open", false)
            .removeClass("bl-expand")
            .on(transEndEventName, function (event) {
              // show the menu, pagination and enable body scrolling
              $menu.removeClass("noDisplay");
              $page.removeClass("noDisplay");

              if (!$(event.target).is(".project")) return false;
              $(this).off(transEndEventName).removeClass("bl-expand-top");
            });

          if (!supportTransitions) {
            $section.removeClass("bl-expand-top");
          }

          $el.removeClass("bl-expand-item");

          return false;
        });
    });
  }

  return { init: init };
})();

// Call full page transition function

$(function () {
  Boxlayout.init();
});

// Bside slide show
var bsideslideIndex = 1;
showbsideSlides(bsideslideIndex);

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

// mousewheel horizontal scrolling
(function () {
  function scrollHorizontally(e) {
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
    document.getElementById("horizontal-scroll-wrapper").scrollLeft -=
      delta * 40; // Multiplied by 40
    e.preventDefault();
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

// Pop up bside function

$(".bsideImage").map(function () {
  $(this).click(function () {
    $(this).next("#popup-content").toggleClass("show");
  });
});

$(".btn-popup-close").map(function () {
  $(this).click(function () {
    $(this).parent("#popup-content").toggleClass("show");
  });
});
