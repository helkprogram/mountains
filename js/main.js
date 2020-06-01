$(function () {
    // Анимация кнопки меню
    $('.menu__btn').on('click', function (e) {
        e.preventDefault;
        $(this).toggleClass('menu__btn--active');
        $('.menu__list').slideToggle();
    });
    function checkWidth() {
        var windowWidth = $('body').innerWidth(),
            elemJournal = $('.journal__items'),
            elemTravel = $('.travel__list');
        if (windowWidth < 769) {
            elemTravel.addClass('travel__list');
            $('.travel__list').slick({
                arrows: false,
                slidesToShow: 3,
                responsive: [
                    {
                      breakpoint: 426,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                      }
                    },
                    {
                      breakpoint: 321,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    }
                  ]
            });
        }
        else {
            elemTravel.removeClass('travel__list--slider');
            $('.travel__list--slider').slick('unslick');
        }
        if (windowWidth < 551) {
            elemJournal.addClass('journal__items--slider');
            $('.journal__items--slider').slick({
                // arrows: false,
                dots: true,
                dotsClass: 'journal__dots'
            });
        }
        else {
            elemJournal.removeClass('journal__items--slider');
            $('.journal__items--slider').slick('unslick');
        }
    }
    checkWidth();
    $(window).resize(function () {
        checkWidth();
    });

});