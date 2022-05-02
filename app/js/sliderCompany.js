let priceList = document.querySelector('.price__list');

document.querySelector('.price__text').onclick = function (event) {
  priceList.classList.toggle('price__list--hight');
};

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