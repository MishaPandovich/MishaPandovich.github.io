var modalBasketOpen = document.querySelectorAll('.goods__link--mark');
var modalBasketPopup = document.querySelector('.modal-basket');
var modalBasketClose = document.querySelector('.modal-close--basket');
var modalBasketNextBuy = document.querySelector('.modal-basket__link--next-buy');

function togglePopup(linkOpen, popup, close, addClose) {
  linkOpen.addEventListener('click', function(evt) {
    evt.preventDefault();
    popup.classList.add('modal--show');
  });

  close.addEventListener('click', function(evt) {
    evt.preventDefault();
    popup.classList.remove('modal--show');
  });

  addClose.addEventListener('click', function(evt) {
    evt.preventDefault();
    popup.classList.remove('modal--show');
  });

  document.addEventListener('keyup', function (evt) {
    if (evt.keyCode === 27) {
      popup.classList.remove('modal--show');
    }
  });
}

for (var i=0; i < modalBasketOpen.length; i++) {
  togglePopup(modalBasketOpen[i], modalBasketPopup, modalBasketClose, modalBasketNextBuy);
}
