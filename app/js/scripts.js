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
/*
const defaultElements2 = () => {
  const selects = document.querySelectorAll('.select');
  const select = selects.forEach(item => {
      const choices = new Choices(item, {
          searchEnabled: false,
        shouldSort: false,
        itemSelectText: '',
        placeholder: false,
        placeholderValue: 'Выберите тип системы',

      });
  });
}
defaultElements2();
*/

// const simplebar = () => {
//   const lists = document.querySelectorAll('.choices__list--dropdown');
//   const list = lists.forEach(item => {
//       const bars = new SimpleBar(item);
//   });
// }
// simplebar();



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
