
$(document).ready(function() {
    window.sr = ScrollReveal();
    sr.reveal('.js-reveal', 200);
    sr.reveal('.js-reveal-news', 200);
    sr.reveal('.js-reveal-r', {
        duration   : 1000,
        distance   : '6rem',
        origin     : 'right',
        // scale      : 1,
    });
    sr.reveal('.js-reveal-l', {
        duration   : 1000,
        distance   : '6rem',
        origin     : 'left',
        // scale      : 1,
    });
    sr.reveal('.js-reveal-t', {
        duration   : 800,
        distance   : '3rem',
        easing     : 'ease-in-out',
        origin     : 'top',
        // scale      : 1,
    });
    sr.reveal('.js-reveal-b', {
        duration   : 700,
        distance   : '3rem',
        easing     : 'ease-in-out',
        origin     : 'bottom',
        // scale      : 1,
    });

    if ($('.carousel') && $('.carousel').length > 0) {
        $('.carousel').slick({
            arrows: true,
            dots: true,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesPerRow: 1,
            rows: 1,
            fade: true,
            cssEase: 'linear',
            mobileFirst: true

        });
    }
    if ($('.gallery-slide ul') && $('.gallery-slide ul').length > 0) {

        $('.gallery-slide ul').slick({
            arrows: true,
            dots: false,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesPerRow: 1,
            row: 1,
            fade: true,
            cssEase: 'linear',
            mobileFirst: true
        });

        $('.smallimage-flex img').on('click', function () {
            $('.gallery-slide ul').slick('slickGoTo', $(this).data('slide-id'), false);
        });
    }
    if ($('.hamburger_container') && $('.hamburger_container').length > 0) {

        $('.hamburger_container').click(function () {
            window.scrollTo(0, 0);
            $(this).toggleClass('active');
            $('.breadcrumbs').toggleClass('breadcrumbs-open');

            if($(this).hasClass("active")) {
                $('body').addClass('scroll-disabled');

            } else {
                $('body').removeClass('scroll-disabled');
            }
        });

        $('.left-menu-close').click(function() {
            $('.hamburger_container').trigger('click');
        })
    }


if($('.main-product-filter,.product-filter') && $('.main-product-filter,.product-filter').length>0) {
    $('.main-product-filter,.product-filter,.filter-popup-btn').click(function(event) {
        event.preventDefault();
        $('.product-filter-overlay').fadeIn(400,
            function(){
                $('body').addClass('scroll-disabled');
                $('.filter-form').removeClass('filter-form-close').toggleClass("filter-form-open");
            });
    });
    $('.filter-modal-close, .product-filter-overlay').click(function(){
        $('.filter-form').removeClass("filter-form-open").toggleClass('filter-form-close');
        $('body').removeClass('scroll-disabled');
        $('.product-filter-overlay').fadeOut();

    });

}

    if($('.basket_message') && $('.basket_message').length>0) {
        $('.features--button').click(function(event) {
            event.preventDefault();
            $('.product-filter-overlay').fadeIn(100,
                function(){
                    $('body').addClass('scroll-disabled');
                    $('button:not(.basket_continue)').attr("disabled",true);
                    $('.basket_message').removeClass('basket_message-close').toggleClass("basket_message-open");
                });
        });
        $('.basket_continue, .product-filter-overlay').click(function(){
            $('.basket_message').removeClass("basket_message-open").toggleClass('basket_message-close');
            $('body').removeClass('scroll-disabled');
            $('button').attr("disabled",false);
            $('.product-filter-overlay').fadeOut();

        });

    }

       if($("table.orderhistory-table") && $("table.orderhistory-table").length){

$("table.orderhistory-table").stupidtable();
    $('.orderhistory-table').cardtable();
}

    if($('.pagination') && $('.pagination').length) {
        $('.pagination').pagination({
            items: 100,
            edges: 2,
            displayedPages:3,
            itemsOnPage: 15,
            cssStyle: 'light-theme',
            onInit: function() {
                $('.prev').hide();
                $('.next').hide();
            },
            prevText: '&lt;',
            nextText: '&gt;'


        });
    }


    $('.city-picker').select2({width:'auto',language:'ru',minimumResultsForSearch: -1});
    $('.facet-picker').select2({width:'auto',language:'ru',minimumResultsForSearch: -1});
    $('.podves-picker').select2({width:'auto',language:'ru',minimumResultsForSearch: -1});
    $('.groupBy-select').select2({width:'auto',language:'ru',minimumResultsForSearch: -1});
    $('b[role="presentation"]').hide();
    $('.select2-selection__arrow').append('' +
        '<span class="select-arrow-box">\n' +
        '    <i class="fa fa-angle-down"></i>\n' +
        '  </span>');
    $('.btn_up').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    $(window).scroll(function() {

        if ($(this).scrollTop() > 600) {
            $('.btn_up').fadeIn();
        } else {
            $('.btn_up').fadeOut();
        }
    });




     $("#telefone").mask("+7 (999) 999-9999");




    function getVals(values,element){
        // Get slider values
        // Neither slider will clip the other, so make sure we determine which is larger
	fromValue = +values[0];
	toValue = +values[1];
        if( fromValue > toValue ){ var tmp = toValue; toValue = fromValue; fromValue = toValue; }
	        
	element.parent().find('.from-range-value').val(fromValue);
        element.parent().find('.to-range-value').val(toValue);
    }


        // Initialize Sliders
        if($(".range-slider")&&$(".range-slider").length ) {
        //var sliders = $(".range-slider input[type='range']");
        //sliders.each(function(index,element) {$(this).on("input",getVals);$(this).trigger('input')});
$('.noUi-handle').on('click', function() {
    $(this).width(50);
  });
  var rangeSliders = $('.range-slider-container');
   rangeSliders.each(function(index,element) {noUiSlider.create(element, {
    start: [500, 50000],
    step: 1,
    range: {
      'min': [500],
      'max': [50000]
    },
    connect: true
  });
  element.noUiSlider.on('update', function(values, handle) {
    getVals(values,$(element));
  });
});	
   
 }
        if($(".balka-type") && $('.balka-type').length>0) {
            $('.balka-type').select2({width:'auto',language:'ru',minimumResultsForSearch: -1});
        }
    if($(".balka-color") && $('.balka-color').length>0) {
        $('.balka-color').select2({width:'auto',language:'ru',minimumResultsForSearch: -1});
    }
    if($(".balka-manufacturer") && $('.balka-manufacturer').length>0) {
        $('.balka-manufacturer').select2({width:'auto',language:'ru',minimumResultsForSearch: -1});
    }

    if($(".decor-color") && $('.decor-color').length>0) {
        $('.decor-color').select2({width:'auto',language:'ru',minimumResultsForSearch: -1});
    }
    if($(".color-decor-type") && $('.color-decor-type').length>0) {
        $('.color-decor-type').select2({width:'auto',language:'ru',minimumResultsForSearch: -1});
    }

    if($(".dprofil-type") && $('.dprofil-type').length>0) {
        $('.dprofil-type').select2({width:'auto',language:'ru',minimumResultsForSearch: -1});
    }
    if($(".dprofil-color") && $('.dprofil-color').length>0) {
        $('.dprofil-color').select2({width:'auto',language:'ru',minimumResultsForSearch: -1});
    }
    if($(".dprofil-manufacturer") && $('.dprofil-manufacturer').length>0) {
        $('.dprofil-manufacturer').select2({width:'auto',language:'ru',minimumResultsForSearch: -1});
    }

    if($('.map-nav--item a') && $('.map-nav--item a').length>0){
        $('.map-nav--item a').each(function(index,element) {
            $(this).on('click',switchCityShops);
        });
        $('.map-nav--item a').first().addClass('selected');
    }

    function switchCityShops(event) {
        event.preventDefault();
        $(".city-shoplist").hide();
        $('.'+$(this).data('city')).removeClass('city-shoplist-active');
    $('.map-nav--item a').removeClass('selected');
        $('.'+$(this).data('city')).fadeToggle();
        $(this).addClass('selected');
        $('.'+$(this).data('city')).addClass('city-shoplist-active');
    }


    $('.js-agree').on('click', function(e){
        e.preventDefault();
       window.localStorage.setItem('personal-agreement', true);
        $('.page__message').fadeOut();
    });
    if (!window.localStorage.getItem('personal-agreement')) {
        $('.page__message').addClass('page__message--visible');
    }
});

