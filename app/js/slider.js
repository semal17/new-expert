new Swiper('.social__slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      scrollbar: {
        el: '.swiper-scrollbar',
      },

      slidesPerView: 4,

      spaceBetween: 50,

      breakpoints: {
          320: {
              slidesPerView: 1,
          },
          500: {
            slidesPerView: 2,
        },
          1130: {
            slidesPerView: 3,
        }
      }
});