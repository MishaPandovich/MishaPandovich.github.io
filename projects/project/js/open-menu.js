var linkOpenMenu = document.querySelector('.menu-toggle'),
	menu = document.querySelector('.site-nav__list');

linkOpenMenu.addEventListener('click', function() {
	linkOpenMenu.classList.toggle('menu-toggle--show');
	menu.classList.toggle('site-nav__list--show');
});
