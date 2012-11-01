$(document).ready(function () {

/*main sliders*/
$('.main-news').scrollable({
	prev: '.main-news__nav .arrs-nav__prev',
	next: '.main-news__nav .arrs-nav__next'
}).navigator();
$('.photo-report__slider').scrollable({
	prev: '.photo-report__nav .arrs-nav__prev',
	next: '.photo-report__nav .arrs-nav__next'
}).navigator();

/*result title*/
$('.result__title .open').each(function() {
  if ($(this).hasClass('plus')) {
    $(this).parent().next().hide();
  };
});
$('.result__title .open').click(function() {
	if ($(this).hasClass('minus')) {
		$(this).parent().next().slideUp();
		$(this).removeClass('minus').addClass('plus');
	}
	else {
		if ($(this).hasClass('plus')) {
			$(this).parent().next().slideDown();
			$(this).removeClass('plus').addClass('minus');
		}
	};
});
/*result group*/
$('.play-group .open').each(function() {
  if ($(this).hasClass('plus')) {
    $(this).parent().next().hide();
  };
});
$('.play-group .open').click(function() {
	if ($(this).hasClass('minus')) {
		$(this).parent().next().slideUp();
		$(this).removeClass('minus').addClass('plus');
	}
	else {
		if ($(this).hasClass('plus')) {
			$(this).parent().next().slideDown();
			$(this).removeClass('plus').addClass('minus');
		}
	};
});
/*result play*/
$('.play__open button').each(function() {
  if ($(this).hasClass('active')) {
    $(this).parent().parent().next().show();
		$(this).parent().parent().addClass('play-open');
  };
});
$('.play__open button').click(function() {	
	if ($(this).hasClass('active')) {	
		$(this).removeClass('active');
		$(this).parent().parent().next().slideUp();
		$(this).parent().parent().removeClass('play-open');		
	}
	else {
		$(this).addClass('active');
		$(this).parent().parent().next().slideDown();
		$(this).parent().parent().addClass('play-open');
	};
});





});