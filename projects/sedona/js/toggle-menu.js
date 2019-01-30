var closeMenu = document.querySelector('.button-mobile__close');
var openMenu = document.querySelector('.toggle-mobile__link');
var menu = document.querySelector('.nav');

openMenu.addEventListener('click', function(evt) {
  evt.preventDefault();
  menu.classList.add('nav-show');
});

closeMenu.addEventListener('click', function(evt) {
  evt.preventDefault();
  menu.classList.remove('nav-show');
});
