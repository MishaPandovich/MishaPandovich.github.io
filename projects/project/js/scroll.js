var left = 10;

document.querySelector('.filter-form__inner').onwheel = function(event) {
	var line = event.deltaY;
	console.log(line);
	
	left = left + 0.5 * line;

	if (left > 60) {
		left = 60;
	}

	if (left < -340) {
		left = -300;
	}
	
	document.querySelector('.filter__btns').style.left = left + 'px';
	
	return false;
}