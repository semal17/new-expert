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


let priceWrapper = document.querySelector('.price__wrapper');
let priceItems = document.querySelectorAll('.price__item'); 
let priceList = document.querySelector('.price__list');



window.addEventListener('resize', function() {
  if(document.body.clientWidth > 1130) {
    priceWrapper.classList.remove('swiper');
    priceList.classList.remove('swiper-wrapper');
    priceItems.forEach(item => item.classList.remove('swiper-slide'));
  } else {
    priceWrapper.classList.add('swiper');
    priceList.classList.add('swiper-wrapper');
    priceItems.forEach(item => item.classList.add('swiper-slide'));
  }
});



document.querySelector('.price__text').onclick = function (event) {
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