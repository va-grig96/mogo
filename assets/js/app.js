$(function() {
	var header = $('#header'),
		introH = $('#intro').innerHeight(),
		scrollOffset = $(window).scrollTop();

	// Фиксированная шапка
	checkScroll(scrollOffset);

	$(window).on('scroll', function() {
		scrollOffset = $(this).scrollTop();
		checkScroll(scrollOffset);
	});

	function checkScroll(scrollOffset) {
		if (scrollOffset >= introH) {
			header.addClass('fixed');
		} else {
			header.removeClass('fixed');
		}
	}

	// Планый скролл к разделу
	$('[data-scroll]').on('click', function(event) {
		event.preventDefault();//Отключить переход по ссылке

		var $this = $(this),
			blockId = $(this).data('scroll'),
			blockOffset = $(blockId).offset().top;

		$('#nav a').removeClass('active');
		$this.addClass('active');

		$('html, body').animate({
			scrollTop: blockOffset
		}, 500);
	});

	// Мобильное меню
	$('#nav_toggle').on('click', function() {
		event.preventDefault();

		$(this).toggleClass('active');
		$('#nav').toggleClass('active');
	});

	// Раскрывающий блок
	$('[data-collapse]').on('click', function() {
		event.preventDefault();

		var $this = $(this),
			blockId = $(this).data('collapse');
		$(this).parent('.accordion__item').toggleClass('active')
	});

	// Слайдер отзывов
	$('[data-slider]').slick({
		infinite: true,
		fade: false,
		slidesToShow: 1,
		slidesToscroll: 1
	})
});