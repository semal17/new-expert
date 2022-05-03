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