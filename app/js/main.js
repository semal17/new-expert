var  navMenu = document.querySelector('.header__wrapper');
var  navOpen = document.querySelector('.header__btn');
var  main  = document.querySelector('.main');
var  headerTopWrapper = document.querySelector('.header__top-wrapper');
 

navOpen.addEventListener('click', function() {
    if (navMenu.classList.contains('header__wrapper--closed')) {
        navMenu.classList.remove('header__wrapper--closed');
        navMenu.classList.add('header__wrapper--active');        
        headerTopWrapper.classList.add('header__top-wrapper--active');
        main.classList.add('main--active');
    } else {
        navMenu.classList.add('header__wrapper--closed');
        navMenu.classList.remove('header__wrapper--active');        
        headerTopWrapper.classList.remove('header__top-wrapper--active');
        main.classList.remove('main--active');
    }
});