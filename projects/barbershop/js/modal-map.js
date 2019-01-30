'use strict';

var button = document.querySelector(".contacts__bnt--map");
var modal = document.querySelector(".modal-map");
var exit = modal.querySelector(".modal-close--map");

button.addEventListener("click", function (evt) {
	evt.preventDefault();
	modal.classList.add("modal-show-map");
});

exit.addEventListener("click", function (evt) {
	evt.preventDefault();
	modal.classList.remove("modal-show-map");
});	