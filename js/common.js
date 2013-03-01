$(document).ready(function () {

//local storage
if('undefined' != typeof window['localStorage'] && localStorage['active-btns']) {
  //function for save id active buttons
  function save_active_btns() {
    var btns_id = "";
    $('.result button.active').each(function() {
      btns_id =  btns_id + $(this).attr('id') + ' ';      
    });
    localStorage['active-btns'] = btns_id;
  };
  var btns_id = localStorage['active-btns'];
  var new_btns_id = btns_id.split(' ');
  for (var i = 0; i < new_btns_id.length; i++) {
    $('#'+new_btns_id[i]).addClass('active');
  };
};

//result title
$('.result__title .open').each(function() {
  if ($(this).hasClass('active')) {}
  else {
    $(this).parent().next().hide();
  }
});
$('.result__title .open').click(function() {
	if ($(this).hasClass('active')) {
    $(this).removeClass('active');
		$(this).parent().next().slideUp(200);		
	}
	else {
    $(this).addClass('active');
		$(this).parent().next().slideDown(200);		
	};
  save_active_btns();
});

//result group
$('.play-group .open').each(function() {
  if ($(this).hasClass('active')) {}
  else {
    $(this).parent().next().hide();
  }
});
$('.play-group .open').click(function() {
	if ($(this).hasClass('active')) {		
		$(this).removeClass('active').parent().next().slideUp(200);
	}
	else {		
		$(this).addClass('active').parent().next().slideDown(200);
	};
  save_active_btns();
});

//result play
$('.play__open button').each(function() {
  if ($(this).hasClass('active')) {
    $(this).parent().parent().next().show();
		$(this).parent().parent().addClass('play-open');
  };
});
$('.play__open button').click(function() {	
	if ($(this).hasClass('active')) {	
		$(this).removeClass('active');
		$(this).parent().parent().next().slideUp(100);
		$(this).parent().parent().removeClass('play-open');		
	}
	else {
		$(this).addClass('active');
		$(this).parent().parent().next().slideDown(100);
		$(this).parent().parent().addClass('play-open');
	};
  save_active_btns();
});

//popup open
$('.search-open').click(function() {
	$('.search, .hide-popup-opacity').fadeIn(200);
});
$('.enter__open').click(function() {
	$('.popup-enter, .hide-popup-dark').fadeIn(200);
});
$('.hide-popup-opacity').click(function() {
	$('.hide-popup-opacity, .search').fadeOut(200);
});
$('.close, .hide-popup-dark').click(function() {
	$('.popup-enter, .hide-popup-dark').fadeOut(200);
});

// go top
$('.go-top').click(function() {	
	$('body').scrollTo(0, 600);
});

//sub nav
$('.nav-list li').hover(	
  function () {  	
  	$(this).children('.nav-sub').show();	
  },
  function () {
    $(this).children('.nav-sub').hide(); 
  }
);
//menu hover trigger
function menu_hover() {
  $('.nav-list__item').each(function() {
    if ($(this).hasClass('active')) {
      $(this).children('.nav-sub').show();
    };
  });
}
$('.menu li:last').hover(function() {
  menu_hover();
});

//all news filter
$('.all-news__filter').hover(	
  function () {  	
  	$(this).addClass('active').children('ul').show();  	
  },
  function () {
  	$(this).removeClass('active').children('ul').hide();  	
  }
);
$('.all-news__filter ul li').click(function() {
	filter_val = $(this).text();
	$(this).parent().prev().html(filter_val+'<i></i>').parent().removeClass('active').children('ul').fadeOut(300);
});

//datepicker
$('.datepicker-out').hover( 
  function () {   
    $(this).children('.datepicker-date').addClass('datepicker-date_active'); 
    $(this).children('.datepicker').show();   
    $('.datepicker').datepicker({
      inline: true,
      monthNames: ['январь','февраль','март','апрель','май','июнь',
      'июль','август','сентябрь','октябрь','ноябрь','декабрь'],
      monthNamesShort: ['января','февраля','марта','апреля','мая','июня',
      'июля','августа','сентября','октября','ноября','декабря'],
      dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
      dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
      dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
      weekHeader: 'Не',
      dateFormat: 'd M, yy',
      firstDay: 1,
      onSelect: function(){ 
        $('.datepicker-date span').html($(this).val());
        $('.datepicker').hide().prev().removeClass('datepicker-date_active');
      }
  });
  },
  function () {
    $(this).children('.datepicker-date').removeClass('datepicker-date_active'); 
    $(this).children('.datepicker').hide(); 
  }
);

//author
$('.author').hover( 
  function () { 
    $(this).addClass('hover');
    $(this).children('ul').show();
  },
  function () { 
    $(this).removeClass('hover');
    $(this).children('ul').hide();
  }
);

//main news
if ($('.main-news').length > 0) {
  $('.main-news ul').carouFredSel({
    items: 1,
    circular: false,
    infinite: false,
    auto: false,
    prev: {
      button: '.main-news .arrs-nav__prev',
      key: 'left'
    },
    next: {
      button: '.main-news .arrs-nav__next',
      key: 'right'
    },
    pagination: '.main-news .navi'
  });
};

//photo report slider
if ($('.photo-report__slider').length>0) {
  $('.photo-report__slider').carouFredSel({
    items: 1,
    circular: false,
    infinite: false,
    auto: false,
    prev: {
      button: '.photo-report .arrs-nav__prev',
      key: 'left'
    },
    next: {
      button: '.photo-report .arrs-nav__next',
      key: 'right'
    },
    pagination: '.photo-report .navi'
  });
};

//live skider
if ($('.live__slider').length>0) {
  $('.live__slider').carouFredSel({
    items: 1,
    circular: false,
    infinite: false,
    auto: false,
    prev: {
      button: '.live__prev',
      key: 'left'
    },
    next: {
      button: '.live__next',
      key: 'right'
    }
  });
};

//athlete slider
if ($('.athlete__slider').length>0) {
  $('.athlete__slider').carouFredSel({
    items: 1,
    circular: false,
    infinite: false,
    auto: false,
    prev: {
      button: '.athlete .arrs-nav__prev',
      key: 'left'
    },
    next: {
      button: '.athlete .arrs-nav__next',
      key: 'right'
    }
  });
};

//sport-news tabs
$('.sport-news__top button').click(function() {
  $('.sport-news__top button').removeClass('active');
  $('.sport-news__list').hide();
  $(this).addClass('active');
  sport_val = $(this).attr('data-tab');
  $('.'+sport_val).show();
});

});

$(window).scroll(function() {
  if ($(window).scrollTop() > 800) {
    $('.go-top').fadeIn(300);
  }
  else {
    $('.go-top').fadeOut(300);
  }
});