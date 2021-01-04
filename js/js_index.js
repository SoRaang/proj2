// ---------- CWK Individual jQuary Ver. 20201230 ----------

$(document).ready(function() { // jQuery Load
    $('.main-slick').slick({
        lazyLoad: 'ondemand',
        infinite: true,
        autoplay: true,
        fade: false,
        dots: true,
        arrows: false,
        zIndex: 1
    }); // Main Slide - Slick

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