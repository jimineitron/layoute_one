// @@include("jquery.min.js");
// @@include("slick.min.js");
// @@include("inputMasked.js");

import * as fn from "./jquery.min.js";
import * as fn1 from "./slick.min.js";
import * as fn2 from "./inputMasked.js";

$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: true,

    responsive: [
      {
        breakpoint: 1175,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  });
});

document.querySelector(".menu__btn").addEventListener("click", function () {
  document.querySelector(".menu__list").classList.toggle("menu__list--active");
  document.querySelector(".menu__btn").classList.toggle("menu__btn--active");
});

document
  .querySelectorAll(".footer__menu-title")[0]
  .addEventListener("click", () => {
    document
      .querySelectorAll(".footer__list")[0]
      .classList.toggle("footer__menu-active");

    document
      .querySelectorAll(".footer__menu-title")[0]
      .classList.toggle("footer__title--active");
  });

document
  .querySelectorAll(".footer__menu-title")[1]
  .addEventListener("click", () => {
    document
      .querySelectorAll(".footer__list")[1]
      .classList.toggle("footer__menu-active");

    document
      .querySelectorAll(".footer__menu-title")[1]
      .classList.toggle("footer__title--active");
  });
