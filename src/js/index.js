
$(document).ready(function() {
    var arrayCards = [
        {
            "id": "1",
            "id_group": "1",
            "name": "",
            "description": "",
            "img": "",
            "language": "",
            "tags": "",
            "tema": "Похудение&&Здоровье&&"
        },
        {
            "id": "2",
            "id_group": "1",
            "name": "Potato",
            "description": "Potatoes, or Tuberous nightshade (Latin Solánum tuberósum), is a species of perennial tuberous herbaceous plants from the genus Solanum family Potatoes, or Tuberous nightshade (Latin Solánum tuberósum), is a species of perennial tuberous herbaceous plants from the genus Solanum family Potatoes, or Tuberous nightshade (Latin Solánum tuberósum), is a species of perennial tuberous herbaceous plants from the genus Solanum family",
            "img": "../media/card1.jpg?, ../media/card2.jpg?, ../media/card3.jpg?,",
            "language": "",
            "tags": "Еда, Здоровье, Похудение, Еда, Здоровье, Похудение, Еда, Здоровье, Похудение, Еда, Здоровье, Похудение, Еда, Здоровье, Похудение, Еда, Здоровье, Похудение, Еда, Здоровье, Похудение, Еда, Здоровье, Похудение, Еда, Здоровье, Похудение, Еда, Здоровье, Похудение, Еда, Здоровье, Похудение, Еда, Здоровье, Похудение",
            "tema": "Похудение&&Здоровье&&"
        },
        {
            "id": "3",
            "id_group": "2",
            "name": "Помидор",
            "description": "Помидор, или Паслён клубнено́сный (лат. Solánum tuberósum), — вид многолетних клубненосных травянистых растений из рода Паслён (Solanum) семейства",
            "img": "../media/card1.jpg?, ../media/card2.jpg?, ../media/card3.jpg?,",
            "language": "Русский",
            "tags": "Еда, Похудение",
            "tema": "Похудение&&Здоровье&&"
        },
        {
            "id": "2",
            "id_group": "1",
            "name": "Potato",
            "description": "Potatoes, or Tuberous nightshade (Latin Solánum tuberósum), is a species of perennial tuberous herbaceous plants from the genus Solanum family Potatoes, or Tuberous nightshade (Latin Solánum tuberósum), is a species of perennial tuberous herbaceous plants from the genus Solanum family Potatoes, or Tuberous nightshade (Latin Solánum tuberósum), is a species of perennial tuberous herbaceous plants from the genus Solanum family",
            "img": "../media/card1.jpg?, ../media/card2.jpg?, ../media/card3.jpg?,",
            "language": "",
            "tags": "Еда, Здоровье, Похудение, Еда, Здоровье, Похудение, Еда, Здоровье, Похудение, Еда, Здоровье, Похудение, Еда, Здоровье, Похудение, Еда, Здоровье, Похудение, Еда, Здоровье, Похудение, Еда, Здоровье, Похудение, Еда, Здоровье, Похудение, Еда, Здоровье, Похудение, Еда, Здоровье, Похудение, Еда, Здоровье, Похудение",
            "tema": "Похудение&&Здоровье&&"
        },
        {
            "id": "3",
            "id_group": "2",
            "name": "Помидор",
            "description": "Помидор, или Паслён клубнено́сный (лат. Solánum tuberósum), — вид многолетних клубненосных травянистых растений из рода Паслён (Solanum) семейства",
            "img": "../media/card1.jpg?, ../media/card2.jpg?, ../media/card3.jpg?,",
            "language": "Русский",
            "tags": "Еда, Похудение",
            "tema": "Похудение&&Здоровье&&"
        },
        {
            "id": "2",
            "id_group": "1",
            "name": "Potato",
            "description": "Potatoes, or Tuberous nightshade (Latin Solánum tuberósum), is a species of perennial tuberous herbaceous plants from the genus Solanum family Potatoes, or Tuberous nightshade (Latin Solánum tuberósum), is a species of perennial tuberous herbaceous plants from the genus Solanum family Potatoes, or Tuberous nightshade (Latin Solánum tuberósum), is a species of perennial tuberous herbaceous plants from the genus Solanum family",
            "img": "../media/card1.jpg?, ../media/card2.jpg?, ../media/card3.jpg?,",
            "language": "",
            "tags": "Еда, Здоровье, Похудение, Еда, Здоровье, Похудение, Еда, Здоровье, Похудение, Еда, Здоровье, Похудение, Еда, Здоровье, Похудение, Еда, Здоровье, Похудение, Еда, Здоровье, Похудение, Еда, Здоровье, Похудение, Еда, Здоровье, Похудение, Еда, Здоровье, Похудение, Еда, Здоровье, Похудение, Еда, Здоровье, Похудение",
            "tema": "Похудение&&Здоровье&&"
        },
        {
            "id": "3",
            "id_group": "2",
            "name": "Помидор",
            "description": "Помидор, или Паслён клубнено́сный (лат. Solánum tuberósum), — вид многолетних клубненосных травянистых растений из рода Паслён (Solanum) семейства",
            "img": "../media/card1.jpg?, ../media/card2.jpg?, ../media/card3.jpg?,",
            "language": "Русский",
            "tags": "Еда, Похудение",
            "tema": "Похудение&&Здоровье&&"
        }
    ]

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
        // режим редактирования карточки путем добавления класса
        $('.ingredients').on('click', '.js-card__edit',function() {
            $(this).parents('.card').toggleClass('edit');
        })

        // копируем текст по нажатию
        $('.ingredients').on('click', '.card__description span, .card__name span', function() {
            copytext($(this).parent().children('p'));
        })

        // вешаем активность на языки
        $('.ingredients').on('click', '.card__language-body span', function() {
            let language = $(this).text(),
                id_group = $(this).parents('.card').attr('data-id_group'),
                name = '',
                description = '';

            $(this).parents('.card').find('.card__language-body span').removeClass('active');
            $(this).parents('.card').find('.card__language-body span').each(function() {
                if($(this).text() == language) {
                    $(this).addClass('active')
                }
            })
            
            $.each(arrayCards, function(i) {
                if(arrayCards[i]['id_group'] == id_group) {
                    if(arrayCards[i]['language'] == language) {
                        name = arrayCards[i]['name'];
                        description = arrayCards[i]['description'];
                        return
                    }
                }
            })

            $(this).parents('.card').find('.card__name p').text(name);
            $(this).parents('.card').find('.card__description p').text(description);
            $(this).parents('.card').find('.card__field input[name=card_name]').val(name);
            $(this).parents('.card').find('.card__field textarea[name=card_description]').text(description);
        })

        // проверяем метки на повторение и если нет добавляем
        $('.ingredients').on('click', '.card__field-add div', function() {
            let text = $(this).prev().val();
            let allElem = $(this).parents('.card__tags').find('.card__tags-item span');

            if(text) {
                for(let i = 0; i < allElem.length; i++) {
                    if(allElem[i].innerText == text) {
                        $(this).parent().addClass('error');
                        return
                    }
                }
                $(this).parents('.card__tags').find('.card__tags-item').prepend(`<span>${$(this).prev().val()} <mark></mark></span>`);
                $(this).parent().removeClass('error');
                $(this).prev().val("");
            }
        })

        // удаляем метку
        $('.ingredients').on('click', '.card__tags-item mark', function() {
            $(this).parent().remove();
        })
    }

    output();
    function output() {
        let card = "";
        
        $.each(arrayCards, function(i) {
            let id = arrayCards[i]['id'],
                id_group = arrayCards[i]['id_group'],
                name = arrayCards[i]['name'],
                description = arrayCards[i]['description'],
                languageActive = arrayCards[i]['language'],
                language = '',
                arrayImg = arrayCards[i]['img'].split('?, '),
                img = '',
                arrayTema = arrayCards[i]['tema'].split('&&'),
                tema = '',
                arrayTags = arrayCards[i]['tags'].split(' '),
                tags = '';

            $.each(arrayImg, function(i) {
                img += `<div class="card__media"><img src="${arrayImg[i]}" alt=""></div>`;
            })

            $.each(arrayCards, function(i) {
                if(arrayCards[i]['id_group'] == id_group) {
                    if(languageActive == arrayCards[i]['language']) {
                        language += `<span class="active">${arrayCards[i]['language']}</span> `;
                    } else {
                        language += `<span>${arrayCards[i]['language']}</span> `;
                    }
                }
            })

            $.each(arrayTags, function(i) {
                tags += `<span>${arrayTags[i].split(',').join('')}<mark></mark></span>`;
            })

            $.each(arrayTema, function(i) {
                tema += `<span>${arrayTema[i] + " "}<mark></mark></span>`;
            })

            card += `
                <div class="card" data-id="${id}" data-id_group="${id_group}">
                    <div class="card__wrap">
                        <div class="card__edit js-card__edit"></div>
                        <div class="card__media-remove"></div>
                        <label class="card__media-add">
                            <div></div>
                            <input type="card_file" name="file">
                        </label>
                        <div class="card__slider owl-carousel owl-theme">
                            ${img}
                        </div>
                        <div class="card__body card__body_face">
                            <div class="card__name"><p>${name}</p> <span></span></div>
                            <div class="card__description"><p>${description}</p> <span></span></div>
                            <div class="card__tema">
                                <div class="card__tema-body">
                                    ${tema}
                                </div>
                            </div>
                            <div class="card__language">
                                <div class="card__language-body">
                                    ${language}
                                </div>
                            </div>
                            <div class="card__tags">
                                <div class="card__tags-item">
                                    ${tags}
                                </div>
                            </div>
                        </div>
                        <div class="card__body card__body_edit">
                            <div class="card__form">
                                <div class="card__field">
                                    <p>Название</p>
                                    <input name="card_name" type="text" value="${name}">
                                </div>
                                <div class="card__field">
                                    <p>Описание</p>
                                    <textarea name="card_description">${description}</textarea>
                                </div>
                                <div class="card__tema">
                                    <div class="card__tema-add">
                                        <p>Такая тема уже существует</p>
                                        <input type="text" placeholder="Добавить тему">
                                        <div>Добавить</div>
                                    </div>
                                    <div class="card__tema-body">
                                        ${tema}
                                    </div>
                                </div>
                                <div class="card__language">
                                    <p>Изменяемый язык</p>
                                    <div class="card__language-body">
                                        ${language}
                                    </div>
                                </div>
                                <div class="card__tags">
                                    <div class="card__field-add">
                                        <p>Такая метка уже существует</p>
                                        <input type="text" placeholder="Добавить метку">
                                        <div>Добавить</div>
                                    </div>
                                    <div class="card__tags-item">
                                        ${tags}
                                    </div>
                                </div>
                                <div class="card__save">Сохранить</div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        });

        $('.ingredients').append(card);

        $('.owl-carousel').owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            navText: false
        })

        readyCards();
    }
});