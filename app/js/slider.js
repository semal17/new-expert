console.log(document.documentElement.scrollWidth);

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
    440: {
      slidesPerView: 2,
    },
    1130: {
      slidesPerView: 4,
    }
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


let priceList = document.querySelector('.price__list');

document.querySelector('.price__text').onclick = function (event) {
  priceList.classList.toggle('price__list--hight');
};


addClassSlider = (e) => {
  console.log(e.target.closest('li'));
}

document.querySelector(".slider__list-top").addEventListener('click', addClassSlider);