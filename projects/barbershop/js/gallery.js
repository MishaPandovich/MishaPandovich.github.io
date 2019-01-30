'use strict';

var imgCollection = document.querySelectorAll('.gallery__img--display-none');
var imgShow = document.querySelector('.gallery__img--show');
var next = document.querySelector('.gallery__bnt--next');
var prev = document.querySelector('.gallery__bnt--prev');
var imgCount = 0;

/*необходима реакция на наведение, так как hover после нажатия на кнопки потом перестает работать*/
prev.onmouseover = function() { this.style.background = '#663d15';}
prev.onmouseout = function() { this.style.background = '#000000';}
next.onmouseover = function() { this.style.background = '#663d15';}
next.onmouseout = function() { this.style.background = '#000000';}

/*начальные стили для кнопки prev*/
if (imgCount == 0) {
	prev.onmouseover = function() { this.style.background = '#000000';}
}

/*стили для не активной кнопки*/
function buttonDefault(nameButton) {
	nameButton.style.background = 'black';
	nameButton.style.opacity = '0.5';
	nameButton.style.cursor = 'default';
}

/*стили для не активной кнопки*/
function buttonActive(nameButton) {
	nameButton.style.opacity = '1';
	nameButton.style.cursor = 'pointer';
	
}

next.onclick = function() {
	if (imgCount == imgCollection.length-1) { 
		buttonDefault(next);
	  	next.onmouseover = function() { this.style.background = '#000000';}

	  	return;
	}

	imgCount++;
	imgShow.src = imgCollection[imgCount].getAttribute('src');
	/*при нажатии стили кнопки prev возвращаются к исходному состоянию*/
	buttonActive(prev);
	prev.onmouseover = function() { this.style.background = '#663d15';}
}

prev.onclick = function() {
	if (imgCount == 1) {
		/*src задается потому, что в разметки две таких картинки (вторая используется в модальном слайдере), если оставить две то, они будут повторяться*/
		imgShow.src = 'img/gallery_1.jpg';
		buttonDefault(prev);
	 	prev.onmouseover = function() { this.style.background = '#000000';}

	 	return;
	}

	imgCount--;
	imgShow.src = imgCollection[imgCount].getAttribute('src');
	/*при нажатии стили кнопки next возвращаются к исходному состоянию*/
	buttonActive(next);
	next.onmouseover = function() { this.style.background = '#663d15';}
}
