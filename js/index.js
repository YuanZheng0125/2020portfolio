var curIframeIndex = 0;
var bsideslideIndex = 1;
var projectLinks = [
  "UnbuiltLabs.html",
  "FMS.html",
  "HealthFusion.html",
  "Petography.html",
];

// fade in when scroll into viewport
$(document).ready(function () {
  fadeInLoad();
  document.body.style.opacity = "1";


  var navActivator = navActivatorBuilder("menu-nav", "active");
  $(window).scroll(function () {
    fadeInLoad();
    navActivator();
  });

  smoothScroll();

  
  // Customize cursor
  const cursor = document.querySelector('.cursor')

   document.addEventListener("mouseout", e => {
    if ($(window).height() < e.pageY || e.pageY < 10 || e.pageX < 10 || $(window).width() < e.pageX) {
      cursor.setAttribute("style", " display: none;")
    } 

    document.addEventListener("mousemove", e => {
    cursor.setAttribute("style", " top: "+(e.pageY-40)+"px; left: "+(e.pageX-40)+"px;")
  })

  document.addEventListener("click", () => {
    cursor.classList.add("click");

    setTimeout(() => {
      cursor.classList.remove("click");
    }, 500)
  })


   var links = document.querySelectorAll(".hoverLinks")

   links.forEach (link => {
     link.addEventListener ("mouseleave", () => {
      cursor.classList.remove("cursorHover");
    })

    link.addEventListener ("mouseover", () => {
      cursor.classList.add("cursorHover");
    })
    })

     var images = document.querySelectorAll(".hoverImg")

   images.forEach (image => {
     image.addEventListener ("mouseleave", () => {
      cursor.classList.remove("imageHover");
    })

    image.addEventListener ("mouseover", () => {
      cursor.classList.add("imageHover");
    })
  })

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

  // //-------------------Configuration for horizontal scrolling of B-side pics-----------------
  // // call mousewheel horizontal scrolling
  // horizontalScroll();

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
  var videos = document.querySelectorAll(".galleryVideo");
  var modalvideo = document.getElementById("modalVideo");
  for (let j = 0; j < videos.length; j++) {
    videos[j].onclick = function () {
      modalvideocontainer.style.display = "block";
      $(modalvideo).attr('src', $(this).find('Source:first').attr('src'));
    };
  }

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
    $(this).click(() => {
      $("body").removeClass("noScrollbar");
    });
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
  