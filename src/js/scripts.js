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


let select = function() {
  let select = document.querySelectorAll(".select");
  let selectHead = document.querySelectorAll(".select__head");
  let selectItem = document.querySelectorAll(".select__item");

  selectHead.forEach(item => {
    item.addEventListener("click", selectToggle);
  });

  selectItem.forEach(item => {
    item.addEventListener("click", selectChoose);
  });

  function selectToggle() {
    this.parentElement.classList.toggle("is-open");
  };

  function selectChoose() {
    let selectValue = this.dataset.value;
    let select = this.closest(".select");
    let currentValue = select.querySelector(".select__current");
    currentValue.innerText = selectValue;
    select.classList.remove("is-open");
  };

  /* Клик вне селекта закроет его */
  document.addEventListener("click", closeSelect);

  function closeSelect(event) {
    select.forEach(item => {
      if (!event.target.closest(".select")) {
        item.classList.remove("is-open");
      }
    });
  }
}

select();


let inputRange = function() {

  let input = document.querySelectorAll(".form__range");

  input.forEach(item => {
    item.addEventListener("input", function () {
      let value = item.value;
      let valueField = item.closest(".form__field").querySelector(".form__value");
      valueField.textContent = value;
    })
  })
}

inputRange();
