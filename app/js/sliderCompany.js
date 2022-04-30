let priceList = document.querySelector('.price__list');

 document.querySelector('.price__text').onclick = function(event) { 
   priceList.classList.toggle('price__list--hight');
  };