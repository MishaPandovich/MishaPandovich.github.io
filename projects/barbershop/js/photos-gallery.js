'use strict';

var bigImage = document.querySelector('.photos__img--big');
var containerPhotosSmall = document.querySelector('.container-photos-small');

containerPhotosSmall.onclick = function(event) {
	var target = event.target;

	while(target != containerPhotosSmall) {
		if (target.tagName == 'IMG') {
			bigImage.src = target.src;
		}

		target = target.parentNode;
	}
}