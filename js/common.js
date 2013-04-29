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

//menu hover trigger
// function menu_hover() {
//   $('.nav-list__item').each(function() {
//     if ($(this).hasClass('active')) {
//       $(this).children('.nav-sub').css('visibility', 'visible');
//     };
//   });
// }
// $('.menu li:last').hover(function() {
//   menu_hover();
// });

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
(function($) {

  $.fn.putoSlider = function(options) {
    // merge default and user parameters
    options = jQuery.extend({
      prefix: 'puto'
    }, options);
    // traverse all nodes
    this.each(function() {
      // express a single node as a jQuery object
      var $t = $(this);
      var list = $t.children('ul');   
      var width = 0;
      var height = 0;
      //width
      list.children().each(function(i) {
        width += $(this).width();
        $(this).attr('id', options.prefix + '-id' + i);
        return(width);
      });
      list.width(width);
      //btns
      var prev = $t.parent().find('.js-sl-clubs-prev');
      var next = $t.parent().find('.js-sl-clubs-next');
      prev.addClass('disabled');
      //active element
      list.children('li').first().addClass('current');
      //prev
      next.click(function() {
        if (!$(this).hasClass('disabled')) {       
          prev.removeClass('disabled');
          var active = list.children('.current');        
          var active_val = active.next().attr('id');
          active.removeClass('current').next().addClass('current');  
          $t.scrollTo($('#' + active_val), 200, {
            onAfter: function() { 
              var pos_left = list.position().left;
              var width_list = list.width();
              var width_wrap = $t.width();
              var result = width_wrap - width_list;
              if (pos_left == result) {
                next.addClass('disabled');
              };
            }
          });
        };
       return false;
      });
      prev.click(function() {
        if (!$(this).hasClass('disabled')) {
          next.removeClass('disabled');
          var active = list.children('.current');
          var active_val = active.prev().attr('id');
          active.removeClass('current').prev().addClass('current');  
          $t.scrollTo($('#' + active_val), 200, {
            onAfter: function() {
             var pos_left = list.position().left;
              if (pos_left == 0) {
                prev.addClass('disabled');
              }
              else {
                prev.removeClass('disabled');
              };
            }
          });
        };
        return false;
      });
    });
  };
})(jQuery);

//init
$('#putoSlider-1').putoSlider({prefix: "sl1"});
$('#putoSlider-2').putoSlider({prefix: "sl2"});

//sport-news tabs
$('.js-tabs-sm button').click(function() {
  $(this).parent().children('button').removeClass('active');
  $(this).parent().parent().children('.js-tabs-sm-item').hide();
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

//clubs tabs
$('.js-clubs-nav button').click(function() {
  var js_tab = $(this).attr('data-item');
  if (!$(this).hasClass('active')) {
    $('.js-clubs-nav button').removeClass('active');
    $(this).addClass('active');
    $('.js-clubs-tab').hide();
    $('.' + js_tab).show();
  };
});

//players move
$('.js-players-move-btn').click(function() {
  $('.js-players-move').slideDown();
  $(this).parent().slideUp();
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