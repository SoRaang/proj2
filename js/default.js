// ---------- CWK Default jQuary Ver. 202101 ----------

$(document).ready(function() { // jQuery Load
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 50) {
            $('header#headIndex').addClass('scrolled');
            $('aside#copyright_info').addClass('aside_scrolled');
        } else {
            $('header#headIndex').removeClass('scrolled');
            $('aside#copyright_info').removeClass('aside_scrolled');
        }
    }); // Header Scroll

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 100) {
            $('aside#mnuQuick').fadeIn(300);
        } else {
            $('aside#mnuQuick').fadeOut(100);
        }
    }); // Quick Menu Scroll

    var q_condition = 1;

    $('.btnOpen').click(function() {
        if (q_condition == 1) {
            $('.btn3').stop().animate({'bottom': '3.5rem'}, 200);
            $('.btn2').stop().animate({'bottom': '7rem'}, 200);
            $('.btn1').stop().animate({'bottom': '10.5rem'}, 200);
            $(this).siblings('div').addClass('quickOn');
            $(this).addClass('openOn');
            $(this).find('span').addClass('spinOn');
            q_condition = 2;
        } else {
            $(this).siblings('div').stop().animate({'bottom': '0'}, 300);
            $(this).siblings('div').removeClass('quickOn');
            $(this).removeClass('openOn');
            $(this).find('span').removeClass('spinOn');
            q_condition = 1;
        }
    }); // Quick Menu Function

    $('ul#mnuDepth1 > li').each(function() {
        var opensub = $(this).find('div.int_wrap');

        $(this).hover(function() {
            $(this).find($('div.mnuDepth2_bg')).stop().slideDown(400);
            $('div.mnuDepth2_banner').appendTo(opensub);
            $('div.mnuDepth2_banner').css({'display': 'flex'});
        }, function() {
            $(this).find($('div.mnuDepth2_bg')).stop().slideUp(200);
            $('div.mnuDepth2_banner').css({'display': 'none'});
        });
    }); // Submenu Banner Attach

    $('div#navIcon > span').each(function() {
        $(this).click(function() {
            $(this).children('div').fadeToggle(250);
            $(this).siblings().children('div').fadeOut(100);
        });
    }); // Nav Icons Sub Window Function

    $('ul.dropdown_pane').appendTo('p.dropdown'); // Dropdown Menu Attach

    var d_condition = 1;

    $('p.dropdown').click(function() {
        if (d_condition == 1) {
            $('p.dropdown').addClass('drop');
            $('ul.dropdown_pane').slideDown(300);
            d_condition = 2;
        } else {
            $('p.dropdown').removeClass('drop');
            $('ul.dropdown_pane').slideUp(300);
            d_condition = 1;
        }
    }); // Dropdown Menu Opening Function

    $('ul.dropdown_pane').mouseleave(function() {
        $('p.dropdown').removeClass('drop');
        $(this).slideUp(300);
        d_condition = 1;
    }); // Dropdown Menu Closing Function
}) // jQuery Closed