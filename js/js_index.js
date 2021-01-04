// ---------- CWK Individual jQuary Ver. 20201230 ----------

$(document).ready(function() { // jQuery Load
    $('.main-slick').slick({
        lazyLoad: 'ondemand',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: false,
        dots: true,
        arrows: false,
        zIndex: 1
    }); // Main Slide - Slick

    $('.rev-slider').slick({
        lazyLoad: 'ondemand',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        centerMode: true,
        centerPadding: '0',
        variableWidth: true,
        variableHeight: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        cssEase: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
        fade: false,
        dots: false,
        arrows: true,
        zIndex: 1
    }); // Review Slide - Slick

    var newsticker = setInterval(function() {
        $('ul.listNotice > li:first-child').animate({'marginTop': '-1.75rem'}, function() {
            $(this).appendTo('ul.listNotice');
            $(this).css({'marginTop': '0'});
        });

        $('ul.listEvent > li:first-child').animate({'marginTop': '-1.75rem'}, function() {
            $(this).appendTo('ul.listEvent');
            $(this).css({'marginTop': '0'});
        });
    }, 5000); // Line Scrolling Function
}) // jQuery Closed