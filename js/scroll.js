//fade in effect when appearing in window
function fadeInLoad() {
  /* Check the location of each desired element */
  $(".fadethisdiv").each(function () {
    var top_of_object = $(this).position().top;
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    /* If the object is completely visible in the window, fade it in */
    if (bottom_of_window > top_of_object) {
      $(this).animate({ opacity: "1" }, 2000);
    }
  });
}

const speed = 1000;
// smoothing scroll to section given anchor link
function smoothScroll() {
  $('a[href*="#"]')
    .filter(
      (i, a) =>
        a.getAttribute("href").startsWith("#") ||
        a.href.startsWith(`${location.href}#`)
    )
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
}

function navActivatorBuilder(navClass, activeClass) {
  var lastId,
    // All list items
    navItems = $("." + navClass).find("a"),
    // Anchors corresponding to menu items
    scrollItems = navItems.map(function () {
      var item = $($(this).attr("href"));
      if (item.length) {
        return item;
      }
    });

  return function () {
    // Get container scroll position
    height = $(window).height();
    var fromTop = $(window).scrollTop();

    // Get id of current scroll item
    var cur = scrollItems.map(function () {
      var off = $(this).offset().top;
      if (off - fromTop <= height / 2.0) return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
      lastId = id;
      // Set/remove active class
      navItems
        .parent()
        .removeClass(activeClass)
        .end()
        .filter("[href='#" + id + "']")
        .parent()
        .addClass(activeClass);
    }
  };
}

// horizontal scroll
function horizontalScroll() {
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
}