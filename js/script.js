const burgerBtn = document.querySelector('.header-price__burger');
const rightMenu = document.querySelector('.burger-menu');
const rigtnMenuList = document.querySelectorAll('.burger-menu__item')
const backgroundPage = document.querySelector('.background-page');
const tabsBtn = document.querySelectorAll('.tab');
const leftBtn = document.querySelectorAll('.price-content__left-li');
const tableItems = document.querySelectorAll('.price-content__table-content');
const select = document.querySelector('select');
let time = document.querySelector('.time_value');
let phone = document.querySelector('.phone_value');
let city = document.querySelector('.city_value');

const selectTime = {
  'surganova': 'ПН-ПТ: 9:00-18:00<br>суббота: 9:00–16:00 (работают дежурные менеджеры)',
  'starinovskaya': 'ПН-ПТ: 9:00-18:00<br>суббота: 9:00–16:00 (работают дежурные менеджеры)',
  'gomel': 'ПН-ПТ: 9:00-18:00<br>суббота: 9:00–16:00 (работают дежурные менеджеры)',
  'brest': 'ПН-ПТ: 9:00-18:00<br>суббота: 9:00–16:00 (работают дежурные менеджеры)',
  'grodno': 'ПН-ПТ: 9:00-18:00<br>суббота: 9:00–16:00 (работают дежурные менеджеры)',
  'bobruisk': 'ПН-ПТ: 9:00-18:00<br>суббота: 9:00–16:00 (работают дежурные менеджеры)'
}
const selectPhone = {
  'surganova': '<a href="+375293444453">+375 (29) 344-44-53 (A1)</a><br><a href="+375333334453">+375 (33) 333-44-53 (МТС)</a>',
  'starinovskaya': '<a href="+375293444453">+375 (29) 344-44-53 (A1)</a><br><a href="+375333334453">+375 (33) 333-44-53 (МТС)</a>',
  'gomel': '<a href="tel:+375293443030">+375 29 344-30-30 (A1)</a><br><a href="tel:+375297006614">+375 29 700-66-14  (A1)</a>',
  'brest': '<a href="tel:+375293441108">+375 29 344-11-08 (A1)</a>',
  'grodno': '<a href="tel:+375296974278">+375 29 697-42-78 (A1)</a>',
  'bobruisk': '<a href="tel:+375296974273">+375 29 697-42-73 (A1)</a>'
}
const selectCity = {
  'surganova': 'Минске',
  'starinovskaya': 'Минске',
  'gomel': 'Гомеле',
  'brest': 'Бресте',
  'grodno': 'Гродно',
  'bobruisk': 'Бобруйске'
}



select.addEventListener('change', () => {
  let a = select.value;
  time.innerHTML = selectTime[a];
  phone.innerHTML = selectPhone[a];
  city.innerHTML = selectCity[a];
});




burgerBtn.onclick = function() {
    burgerBtn.classList.toggle("header-price__burger_active");
    rightMenu.classList.toggle("burger-menu_active");
    backgroundPage.classList.toggle("background-page_active");

  };



 

  tabsBtn.forEach(function(item, index) {
    item.addEventListener("click", function() {
      tabsBtn.forEach(function(item) {
        item.classList.remove('tab_active');
      });
      item.classList.add('tab_active');


      tableItems.forEach(function(item) {
        item.classList.remove('price-content__table-content_active');
      })
      tableItems[index].classList.add('price-content__table-content_active');

    })
  })


leftBtn.forEach(function(item, index) {
  item.addEventListener("click", function() {
    let itemIndex = tabsBtn[index];

    tabsBtn.forEach(function(item) {
      item.classList.remove('tab_active');
    });
    itemIndex.classList.add('tab_active');

    tableItems.forEach(function(item) {
      item.classList.remove('price-content__table-content_active');
    })
    tableItems[index].classList.add('price-content__table-content_active');

  })
})


rigtnMenuList.forEach(function(item, index) {
  item.addEventListener("click", function() {
    burgerBtn.classList.toggle("header-price__burger_active");
    rightMenu.classList.toggle("burger-menu_active");
    backgroundPage.classList.toggle("background-page_active");

    let itemIndex = tabsBtn[index];

    tabsBtn.forEach(function(item) {
      item.classList.remove('tab_active');
    });
    itemIndex.classList.add('tab_active');

    tableItems.forEach(function(item) {
      item.classList.remove('price-content__table-content_active');
    })
    tableItems[index].classList.add('price-content__table-content_active');

  })
})






// Слайдер

$(document).ready(function(){
  $('.tabs').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev left-btn"><img src="left.png"></button>',
    nextArrow: '<button type="button" class="slick-prev right-btn"><img src="right.png"></button>'
  });
});














































  