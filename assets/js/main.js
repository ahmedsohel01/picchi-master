// CopyRight Year
document.querySelector(".copy-right").innerHTML = new Date().getFullYear();
// Sticky Navigation
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 60) {
    $(".header-area").addClass("sticky");
  } else {
    $(".header-area").removeClass("sticky");
  }
});

//  Plugin Activation
jQuery(document).ready(function ($) {
  // One Page Nav
  $("#nav").onePageNav({
    currentClass: "active",
  });

  // Mean Menu
  $(".menu-part").slicknav({
    label: "",
  });
  $(".slicknav_nav nav ul li a").click(function () {
    $(".slicknav_nav").css("display", "none");
    $(".slicknav_nav").addClass("slicknav_hidden");
  });

  // Portfolio Images Popup
  $(".img-popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  // CTA Video Popup
  $(".video-popup").magnificPopup({
    type: "iframe",
  });

  // Counter Up
  $(".counter-inc").counterUp({
    delay: 10,
    time: 1000,
  });

  // Testimonial Slider
  $(".testimonials").slick({
    infinite: true,
    slidesToShow: 3,
    prevArrow: `<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>`,
    nextArrow: `<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>`,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  // Partners Slider
  $(".partners").slick({
    slidesToShow: 6,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  // ScrollUp
  $.scrollUp({
    scrollName: "scrollUp", // Element ID
    topDistance: "300", // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: "fade", // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: `<i class="fa-solid fa-angle-up"></i>`, // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });
});
