$(document).ready(function () {

	$('.menu-btn').on('click', function () {
		$(this).toggleClass('menu-btn_active');
		$('.nav').toggleClass('nav_active');
		$('.navbar').toggleClass('navbar_active');
	});

	$("#slider-news").owlCarousel({
		center: true,
		items: 4,
		nav: true,
		dots: false,
		loop: true,
		margin: 36,
		navText: ['<i class="far fa-arrow-alt-circle-left"></i>', '<i class="far fa-arrow-alt-circle-right"></i>']
	});

	$("#slider-info").owlCarousel({
		items: 1,
		dots: true,
		loop: true,
		autoplay: true,
		autoplayTimeout: 8000,
		smartSpeed: 2000,
		animateOut: 'fadeOut'
	});

	$('.arrow-up-icon').click(function () {
		$('html, body').stop().animate({
			scrollTop: 0
		}, 'slow', 'swing');
	});

});

$(window).on('load', function () {
	$('.preloader').delay(1000).fadeOut('slow');
});