'use strict';

var link = document.querySelector(".gallery__img--show");
var popup = document.querySelector(".modal-gallery");
var popupImg = document.querySelector(".modal__img");
var close = popup.querySelector(".modal-close--gallery");
/*переменные необходимые для переключения */

var nextGallery = document.querySelector('.modal-gallery__bnt--next');
var prevGallery = document.querySelector('.modal-gallery__bnt--prev');
var imgGalleryCount;

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show--galery");

	popupImg.src = link.src;
	imgGalleryCount = imgCount;
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show--galery");
});


nextGallery.onclick = function() {
	if (imgGalleryCount ==imgCollection.length-1) {
		imgGalleryCount = 0;
		popupImg.src = imgCollection[0].getAttribute('src');

		return;
	}

	imgGalleryCount++;
	popupImg.src = imgCollection[imgGalleryCount].getAttribute('src');
}

prevGallery.onclick = function() {
	if (imgGalleryCount == 0) {
		imgGalleryCount = imgCollection.length-1;
		popupImg.src = imgCollection[imgCollection.length-1].getAttribute('src');

		return;
	}

	imgGalleryCount--;
	popupImg.src = imgCollection[imgGalleryCount].getAttribute('src');
}