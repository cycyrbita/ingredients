
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        navText: false
    })

    readyCards();

    // копирование текста
    function copytext(elem) {
        let $field = $('<textarea>');
        $('body').append($field);
        $field.val($(elem).text()).select();
        document.execCommand('copy');
        $field.remove();
    }

    // функции карточки
    function readyCards() {
        $('.ingredients').on('click', '.js-card__edit',function() {
            $(this).parents('.card').toggleClass('edit');
        })

        $('.ingredients').on('click', '.card__description span, .card__name span', function() {
            copytext($(this).parent().children('p'));
        })

        $('.ingredients').on('click', '.card__language-body span', function() {
            $(this).parent('.card__language-body').find('span').removeClass('active');
            $(this).addClass('active');
        })

        $('.ingredients').on('click', '.card__field-add div', function() {
            let text = $(this).prev().val();
            let allElem = $(this).parents('.card__tags').find('.card__tags-tags span');

            if(text) {

                for(let i = 0; i < allElem.length; i++) {
                    if(allElem[i].innerText != text) {
                        $(this).parents('.card__tags').find('.card__tags-tags').append(`<span>${$(this).prev().val()} <mark></mark></span>`);
                        return
                    } else {
                        return
                    }
                }
            }
        })
    }
});