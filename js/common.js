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
  return false;
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
    js_gallery();	
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
$('.select').hover(	
  function () {
  	$(this).addClass('active').children('ul').show();  	
  },
  function () {
  	$(this).removeClass('active').children('ul').hide();  	
  }
);
$('.select ul li').click(function() {
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

//sliders
//sldier live
if ($('.js-sl-live').length > 0) {
  $('.js-sl-live').cycle({
    fx: 'fade', 
    speed: 'slow', 
    timeout: 0, 
    wrap: false,
    next: '.js-sl-live-next', 
    prev: '.js-sl-live-prev'
  });
};
//general slider
if ($('.js-sl').length > 0) {
  $('.js-sl').each(function() {
    var slider_prev = $(this).next().children('.js-sl-prev');
    var slider_next = $(this).next().children('.js-sl-next');
    var slider_navi = $(this).next().next();
    $(this).cycle({ 
      fx: 'scrollHorz', 
      speed: 'fast', 
      timeout: 0, 
      wrap: false,
      next:   slider_next, 
      prev:   slider_prev,
      pager: slider_navi,
      pagerAnchorBuilder: function(index, el) {
        return '<button></button>'; 
      }
    });
  });
};
//gallery
function js_gallery() { 
  sl = $('.js-sl-clubs'); 
  sl_img = $('.js-sl-clubs img');
  sl_list = $('.js-sl-clubs ul');
  sl_item = $('.js-sl-clubs li'); 
  sl_item.first().addClass('js-sl-clubs-scrto');  
  sl_prev = $('.js-sl-clubs-prev');
  sl_prev.addClass('disabled');
  sl_next = $('.js-sl-clubs-next');
  sl_width = 0;
  sl_img_value = sl_item.length;
  //sl_img.each(function() {
    // sl_img_count = 0;
    // $(this).load(function() {
    //   sl_img_count++;
    //   if (sl_img_value == sl_img_count) {
        sl_item.each(function(i) {
          sl_width += $(this).width();
          $(this).attr('id', 'js-sl-clubs-id' + i);
          return(sl_width);
        });
        sl_list.width(sl_width);
    //   };
    // });
  //});
  sl_next.click(function() {
    if (!$(this).hasClass('disabled')) {
      sl_prev.removeClass('disabled');
      sl_act = $('.js-sl-clubs-scrto');
      sl_act_next = sl_act.next().attr('id');
      sl_act.removeClass('js-sl-clubs-scrto').next().addClass('js-sl-clubs-scrto');
      sl.scrollTo($('#' + sl_act_next), 1000, {
        onAfter: function() { 
          var sl_left = sl_list.position().left;
          var sl_list_width = sl_list.width();
          var sl_wrap_width = sl.width();
          var sl_result = sl_wrap_width - sl_list_width;
          if (sl_left == sl_result) {
            sl_next.addClass('disabled');
          }
          else {
            sl_next.removeClass('disabled');
          };
        }
      });
    };
  });
  sl_prev.click(function() {
    if (!$(this).hasClass('disabled')) {
      sl_next.removeClass('disabled');
      sl_act = $('.js-sl-clubs-scrto');
      sl_act_prev = sl_act.prev().attr('id');
      sl_act.removeClass('js-sl-clubs-scrto').prev().addClass('js-sl-clubs-scrto');
      sl.scrollTo($('#' + sl_act_prev), 100, {
        onAfter: function() {
          var sl_left = sl_list.position().left;
          if (sl_left == 0) {
            sl_prev.addClass('disabled');
          }
          else {
            sl_prev.removeClass('disabled');
          };
        }
      });
    };
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

//content pictures
$('.content img').load(function() {
  $('.content img').each(function() {
    if($(this).width() >= 300) {
      $(this).parent().addClass('content__pic');
    };
  }); 
})


});

$(window).scroll(function() {
  if ($(window).scrollTop() > 800) {
    $('.go-top').fadeIn(300);
  }
  else {
    $('.go-top').fadeOut(300);
  }
});