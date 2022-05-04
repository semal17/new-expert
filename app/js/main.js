// const shimGetOwnPropertyDescriptors = require("object.getownpropertydescriptors/shim");

let navMenu = document.querySelector('.header__wrapper');
let navOpen = document.querySelector('.header__btn');
let main = document.querySelector('.main');
let headerTopWrapper = document.querySelector('.header__top-wrapper');
let body = document.body;


navOpen.addEventListener('click', function () {
  if (navMenu.classList.contains('header__wrapper--closed')) {
    navMenu.classList.remove('header__wrapper--closed');
    navMenu.classList.add('header__wrapper--active');
    headerTopWrapper.classList.add('header__top-wrapper--active');
    main.classList.add('main--active');
    body.classList.add('body--hidden');
  } else {
    navMenu.classList.add('header__wrapper--closed');
    navMenu.classList.remove('header__wrapper--active');
    headerTopWrapper.classList.remove('header__top-wrapper--active');
    main.classList.remove('main--active');
    body.classList.remove('body--hidden');
  }
});

new Swiper('.slider__list--swiper', {

  slidesPerView: 1,
  centeredSlides: true,

  thumbs: {
    swiper: {
      el: '.slider__swiper-top',
      slidesPerView: 5,  
    }
    
  }
 

});

let sliderWrapper = document.querySelector('.slider__list--swiper');
let sliderItems = document.querySelectorAll('.slider__item');
let sliderList = document.querySelector('.slider__list');

if (document.body.clientWidth < 1130) {
  sliderWrapper.classList.remove('swiper');
  sliderList.classList.remove('swiper-wrapper');
  sliderItems.forEach(item => item.classList.remove('swiper-slide'));
}

window.addEventListener('resize', function () {
  if (document.body.clientWidth < 1130) {
    sliderWrapper.classList.remove('swiper');
    sliderList.classList.remove('swiper-wrapper');
    sliderItems.forEach(item => item.classList.remove('swiper-slide'));
  } else {
    sliderWrapper.classList.add('swiper');
    sliderList.classList.add('swiper-wrapper');
    sliderItems.forEach(item => item.classList.add('swiper-slide'));
  }
});


new Swiper('.advantegs__column', {

  slidesPerView: 6,

  spaceBetween: 0,

  direction: 'vertical',

  breakpoints: {
    1130: {
      slidesPerView: 3,

      spaceBetween: 30,

      direction: 'vertical',

      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        dragSize: 48,
      },
    }
  }
});

//main
new Swiper('.settings__social', {

  navigation: {
    nextEl: '.settings__btn--down',
    prevEl: '.settings__btn--up',
  },

  scrollbar: {
    el: '.settings__scrolling',
    draggable: true,
  },

  slidesPerView: 1,

  spaceBetween: 20,

  breakpoints: {
    200: {
      slidesPerView: 1,

      grid: {
        rows: 1,
      },

      spaceBetween: 40,

      direction: 'horizontal',

    },
    1130: {
      slidesPerView: 3,

      grid: {
        rows: 2,
      },

      spaceBetween: 40,

      direction: 'vertical',
    }
  }
});

//social
new Swiper('.social__slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },

  slidesPerView: 4,

  spaceBetween: 30,

  breakpoints: {
    320: {
      slidesPerView: 1.2,
    },
    500: {
      slidesPerView: 2,
    },
    1130: {
      slidesPerView: 4,
    }
  }
});


let priceWrapper = document.querySelector('.price__wrapper');
let priceItems = document.querySelectorAll('.price__item');
let priceList = document.querySelector('.price__list');

if (document.body.clientWidth > 1130) {
  priceWrapper.classList.remove('swiper');
  priceList.classList.remove('swiper-wrapper');
  priceItems.forEach(item => item.classList.remove('swiper-slide'));
}

window.addEventListener('resize', function () {
  if (document.body.clientWidth > 1130) {
    priceWrapper.classList.remove('swiper');
    priceList.classList.remove('swiper-wrapper');
    priceItems.forEach(item => item.classList.remove('swiper-slide'));
  } else {
    priceWrapper.classList.add('swiper');
    priceList.classList.add('swiper-wrapper');
    priceItems.forEach(item => item.classList.add('swiper-slide'));
  }
});


document.querySelector('.price__text').onclick = function () {
  priceList.classList.toggle('price__list--hight');
};


new Swiper('.price__wrapper', {

  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 10,

  pagination: {
    el: '.price-pagination',
  },

  navigation: {
    nextEl: '.price__nav-button--right',
    prevEl: '.price__nav-button--left',
  },

});






