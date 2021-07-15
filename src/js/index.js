
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        items: 1,
        dots: false,
        nav: true
    });

    $('.ingredients__btn_rotate').click(function() {
        $(this).parents('.ingredients__info').toggleClass('active');
    });

    $('.ingredients__metka span')
    
    $('.ingredients__metka span').click(function() {
        $('.ingredients__metka span').not($(this).addClass('active')).removeClass('active');
    });

    $('.ingredients__back .ingredients__description, .ingredients__back .ingredients__name').mCustomScrollbar({
        axis: 'y',
        theme: 'rounded-dots-dark'
    });

    $('.ingredients__metka').mCustomScrollbar({
        axis: 'x',
        theme: 'dark-thin',
        advanced: { autoExpandHorizontalScroll: true }
    });

    function cutLongText(text, textSize, finalLength) {
        $(text).each(function() {
            if ($(this).text().length > textSize) {
                $(this).html($(this).text().slice(0, finalLength) + '...');
            }
        });
    }

    cutLongText('.ingredients__front .ingredients__description p', 90, 90);
    cutLongText('.ingredients__front .ingredients__name', 36, 36);
});