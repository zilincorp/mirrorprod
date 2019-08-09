
$('#form').submit(function(e){
  e.preventDefault();
  $.ajax({
    url: "php/form-first.php",
    type: "POST",
    data: $('#form').serialize(),
    success: function(response) {
      //обработка успешной отправки
      $.fancybox.open('<div class="message"><h2>Ваше сообщение успешно отправлено</h2></div>');
      $('[name="lastname"]').val('');
      $('[name="phone"]').val('');
      $('[name="email"]').val('');

    },
    error: function(response) {
      //обработка ошибок при отправке
    }
  });
});

  $(document).on('ready', function () {
    $('.fade1').slick({
      dots: true,
      infinite: true,
      speed: 1000,
      fade: true,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: 'linear'
    });
    $(".regular").slick({
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true
    });

  });

$(document).ready(function () {
  $('.venobox').venobox();
});

window.sr = ScrollReveal();
sr.reveal('.js-reveal', 500);
sr.reveal('.js-reveal-news', 700);
sr.reveal('.js-reveal-r', {
  duration: 700,
  distance: '3rem',
  origin: 'right',
  // scale      : 1,
});
sr.reveal('.js-reveal-l', {
  duration: 700,
  distance: '3rem',
  origin: 'left',
  // scale      : 1,
});
sr.reveal('.js-reveal-t', {
  duration: 700,
  distance: '3rem',
  easing: 'ease-in-out',
  origin: 'top',
  // scale      : 1,
});
sr.reveal('.js-reveal-b', {
  duration: 700,
  distance: '3rem',
  easing: 'ease-in-out',
  origin: 'bottom',
  // scale      : 1,
});
sr.reveal('.js-reveal-b800', {
  duration: 800,
  distance: '3rem',
  easing: 'ease-in-out',
  origin: 'bottom',
  // scale      : 1,
});

sr.reveal('.js-reveal-b900', {
  duration: 1000,
  distance: '3rem',
  easing: 'ease-in-out',
  origin: 'bottom',
  // scale      : 1,
});

sr.reveal('.js-reveal-b1000', {
  duration: 1000,
  distance: '3rem',
  easing: 'ease-in-out',
  origin: 'bottom',
  // scale      : 1,
});




  let i = 3;
jQuery(function () {
  jQuery('.show-hide-btn').click(function () {

    i = i + 3;

    jQuery('.container5 ul li:nth-child(-n+' + i + ')').show('');

  });

});

$(document).ready(function () {


  $("a.topLink1").click(function () {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
      duration: 1000,
      easing: "swing"
    });
    return false;
  });

  $("a.topLink2").click(function () {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
      duration: 1000,
      easing: "swing"
    });
    return false;
  });

  $("a.topLink3").click(function () {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
      duration: 1000,
      easing: "swing"
    });
    return false;
  });

  $("a.topLink4").click(function () {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
      duration: 1000,
      easing: "swing"
    });
    return false;
  });


});



// Cache selectors
var lastId,
  topMenu = $("#top-menu"),
  topMenuHeight = topMenu.outerHeight() + 15,
  // All list items
  menuItems = topMenu.find("a"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function () {
    var item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });

// // Bind click handler to menu items
// // so we can get a fancy scroll animation
// menuItems.click(function(e){
//   var href = $(this).attr("href"),
//     offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
//   $('html, body').stop().animate({
//     scrollTop: offsetTop
//   }, 300);
//   e.preventDefault();
// });

// Bind to scroll
$(window).scroll(function () {
  // Get container scroll position
  var fromTop = $(this).scrollTop() + topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function () {
    if ($(this).offset().top < fromTop)
      return this;
  });
  // Get the id of the current element
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;
    // Set/remove active class
    menuItems
      .parent().removeClass("active")
      .end().filter("[href='#" + id + "']").parent().addClass("active");
  }
});
