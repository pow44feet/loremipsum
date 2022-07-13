const header = document.querySelector(".header");

$(window).scroll(function() {
  if ($(this).scrollTop() > 1){
      $('header').addClass("header--compressed");
    }
    else{
      $('header').removeClass("header--compressed");
    }
});


