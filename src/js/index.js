
$(document).ready(function() {
    // запускаем слайдер
    $('.owl-carousel').owlCarousel({
        items: 1,
        dots: false,
        nav: true
    });

    // поворот карточки
    $('.ingredients__btn_rotate').click(function() {
        $(this).parents('.ingredients__info').toggleClass('active');
    });

    // подсвечиваем метки с языками
    $('.ingredients__metka span').click(function() {
        $('.ingredients__metka span').not($(this).addClass('active')).removeClass('active');
    });

    // скролл для имени и для описания
    $('.ingredients__back .ingredients__description, .ingredients__back .ingredients__name').mCustomScrollbar({
        axis: 'y',
        theme: 'rounded-dots-dark'
    });

    // скролл для метки с языкаи
    $('.ingredients__metka').mCustomScrollbar({
        axis: 'x',
        theme: 'dark-thin',
        advanced: { autoExpandHorizontalScroll: true }
    });

    // функция обрезания текста
    function cutLongText(text, textSize, finalLength) {
        $(text).each(function() {
            if ($(this).text().length > textSize) {
                $(this).html($(this).text().slice(0, finalLength) + '...');
            }
        });
    }
    cutLongText('.ingredients__front .ingredients__description p', 90, 90);
    cutLongText('.ingredients__front .ingredients__name', 36, 36);

    // стилизуем инпуты
    $('input, select').styler();

    // открываем и скрываем сайдбар
    $('.sidebar__open').click(function() {
        $('.ingredients__sidebar').toggleClass('active');
    });
});