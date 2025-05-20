
new WOW().init();
$(document).ready(function () {
  $('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });
});


$(document).ready(function () {
  $("#testimonial-list").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    // center: true,
    smartSpeed: 1000,
    lazyLoad: true,
    lazyFollow: true,
    loop: true,
    autoHeight: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    rewind: true,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 1
      },

      991: {
        items: 1
      },

      1024: {
        items: 1
      }
    }
  });
  
});


$(document).ready(function () {
  var scrollTop = $(".scrollTop");
  $(window).scroll(function () {
    var topPos = $(this).scrollTop();
    if (topPos > 200) {
      $(scrollTop).css("opacity", " 0.9");

    } else {
      $(scrollTop).css("opacity", "0");
    }

  });
  $(scrollTop).click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 100);
    return false;

  });
});

$(document).on('click', 'a[href^="#"]', function (e) {
  var id = $(this).attr('href');
  var $id = $(id);
  if ($id.length === 0) {
    return;
  }
  e.preventDefault();
  var pos = $id.offset().top;
  $('body, html').animate({ scrollTop: pos }, 500);
});




$(document).ready(function () {

  $.fn.jQuerySimpleCounter = function (options) {
    var settings = $.extend({
      start: 0,
      end: 2444000,
      easing: 'swing',
      duration: 30000,
      complete: ''
    }, options);

    var thisElement = $(this);

    $({
      count: settings.start
    }).animate({
      count: settings.end
    }, {
      duration: settings.duration,
      easing: settings.easing,
      step: function () {
        var mathCount = Math.ceil(this.count);
        thisElement.text(mathCount);
      },
      complete: settings.complete
    });
  };
  $('#number1').jQuerySimpleCounter({
    end: 450,
    duration: 6000
  });
  $('#number2').jQuerySimpleCounter({
    end: 500,
    duration: 6000
  });
  $('#number3').jQuerySimpleCounter({
    end: 80,
    duration: 6000
  });

  $('#number4').jQuerySimpleCounter({
    end: 17,
    duration: 6000
  });
});
// $("document").ready(function ($) {
//   var nav = $('.header_bg');

//   $(window).scroll(function () {
//     if ($(this).scrollTop() > 70) {
//       nav.addClass("f-nav");
//     } else {
//       nav.removeClass("f-nav");
//     }
//   });
// });



$(document).ready(function () {
  $("#choose-list-group").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    // center: true,
    smartSpeed: 1000,
    lazyLoad: true,
    lazyFollow: true,
    loop: true,
    autoHeight: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    rewind: true,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 1
      },

      991: {
        items: 2
      },

      1024: {
        items: 3
      }
    }
  });
  
});


$(document).ready(function () {
  $("#banner-slider").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    // center: true,
    smartSpeed: 1000,
    lazyLoad: true,
    lazyFollow: true,
    loop: true,
    autoplayTimeout: 3000,
      autoplayHoverPause: true,
    autoHeight: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    rewind: true,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 1
      },

      991: {
        items: 1
      },

      1024: {
        items: 1
      }
    }
  });
  
});




var sections = $('.content-section-item')
, nav = $('.image-area-item')
, nav_height = nav.outerHeight();

$(window).on('scroll', function () {
var cur_pos = $(this).scrollTop();

sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
    nav.find('a').removeClass('active');
    sections.removeClass('active');
    
    $(this).addClass('active');
    nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
});
});

$("#Possibilities-list").owlCarousel({
  loop: true,
  nav: true,
  dots: false,
  autoplay: true,
  // center: true,
  smartSpeed: 1000,
  lazyLoad: true,
  lazyFollow: true,
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  rewind: true,
  autoHeight: true,
  navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
  responsive: {
    0: {
      items: 1
    },
    767: {
      items: 1
    },

    991: {
      items: 2
    },

    1024: {
      items: 3
    }
  }
});