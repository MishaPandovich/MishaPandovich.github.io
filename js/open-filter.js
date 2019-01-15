var $filterLink = $('.filter__toggle'),
	$filterForm = $('.filter-form'),
	$body = $('body');
var filterInput = document.querySelectorAll('.input-btn__label');

$filterLink.on('click', function() {
	$filterForm.addClass('filter-form--show');
	$filterForm.css('top', $('#some_point').offset().top);
	$('html,body').stop().animate({ scrollTop: $('#some_point').offset().top }, 1000);

	$body.addClass('overlay');
});

function closeFilter(elem) {
	elem.addEventListener('click', function() {
		$filterForm.removeClass('filter-form--show');
		$body.removeClass('overlay');
	});
}

for (var i=0; i < filterInput.length-1; i++) {
	closeFilter(filterInput[i]);
}
