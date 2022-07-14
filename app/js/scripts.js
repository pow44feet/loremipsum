const header = document.querySelector(".header");
const burger = document.querySelector(".burger");
const body = document.body;


$(window).scroll(function () {
  if ($(this).scrollTop() > 1) {
    $('header').addClass("header--compressed");
  }
  else {
    $('header').removeClass("header--compressed");
  }
});

burger.addEventListener("click", function () {
  if (burger.classList.contains("burger--active")) {
    burger.classList.remove("burger--active");
    header.classList.remove("menu--active");
    body.classList.remove("body--blocked");
  } else {
    burger.classList.add("burger--active");
    header.classList.add("menu--active");
    body.classList.add("body--blocked");
  }
});
