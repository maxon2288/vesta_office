
$(document).ready(function () {
	editor();

	nav();

	popup ();

	forms();

	var swiper = new Swiper('.table-slider', {
		spaceBetween: 10,
		navigation: {
			nextEl: '.table-next',
			prevEl: '.table-prev',
		},
	});

	$(document).ready(function() {
		$('select').niceSelect();
	});

})