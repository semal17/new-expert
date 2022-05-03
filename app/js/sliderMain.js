// new Swiper('.slider__list--swiper', {

//   slidesPerView: 1,
//   centeredSlides: true,

//   thumbs: {
//     swiper: {
//       el: '.slider__swiper-top',
//       slidesPerView: 5,  
//     }
    
//   }
 

// });

// let sliderWrapper = document.querySelector('.slider__list--swiper');
// let sliderItems = document.querySelectorAll('.slider__item');
// let sliderList = document.querySelector('.slider__list');

// if (document.body.clientWidth < 1130) {
//   sliderWrapper.classList.remove('swiper');
//   sliderList.classList.remove('swiper-wrapper');
//   sliderItems.forEach(item => item.classList.remove('swiper-slide'));
// }

// window.addEventListener('resize', function () {
//   if (document.body.clientWidth < 1130) {
//     sliderWrapper.classList.remove('swiper');
//     sliderList.classList.remove('swiper-wrapper');
//     sliderItems.forEach(item => item.classList.remove('swiper-slide'));
//   } else {
//     sliderWrapper.classList.add('swiper');
//     sliderList.classList.add('swiper-wrapper');
//     sliderItems.forEach(item => item.classList.add('swiper-slide'));
//   }
// });