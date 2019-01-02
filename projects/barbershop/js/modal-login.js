'use strict';

var linkLogin = document.querySelector(".user-block__login");
var popupLogin = document.querySelector(".modal-login");
var closeLogin = popupLogin.querySelector(".modal-close");

linkLogin.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupLogin.classList.add("modal-show");
});

closeLogin.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupLogin.classList.remove("modal-show");
});

