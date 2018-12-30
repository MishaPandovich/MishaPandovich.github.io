function togglePopup(linkOpen, popup, close) {
  linkOpen.addEventListener('click', function(evt) {
    evt.preventDefault();
    popup.classList.add('modal--show');
  });

  close.addEventListener('click', function(evt) {
    evt.preventDefault();
    popup.classList.remove('modal--show');
  });

  document.addEventListener('keyup', function (evt) {
    if (evt.keyCode === 27) {
      popup.classList.remove('modal--show');
    }
  });
}

var mapOpen = document.querySelector('.map__link');
var mapPopup = document.querySelector('.modal-map');
var mapClose = document.querySelector('.modal-close--map');
/*открытие карты*/
togglePopup(mapOpen, mapPopup, mapClose);

var feedbackOpen = document.querySelector('.contacts-info__link');
var feedbackPopup = document.querySelector('.modal-feedback');
var feedbackClose = document.querySelector('.modal-close--feedback');

/*открытие формы обратной связи*/
togglePopup(feedbackOpen, feedbackPopup, feedbackClose);

