const jquery = require('jquery');

try {
    window.$ = window.jQuery = require('jquery');
} catch (e) {}

// slick js
require('slick-carousel/slick/slick');

jquery(document).ready(function () {
    jquery('.livestrem-slider').slick({
        dots: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    prevArrow:"<button type='button' class='slick-prev slick-arrow'><img src='images/athletes/prev.png' alt='arrow image' /></button>",
                    nextArrow:"<button type='button' class='slick-next slick-arrow'><img src='images/athletes/next.png' alt='arrow image' /></button>"
                }
            }
        ]
    });
    
    
    jquery('.fans-features-slider').slick({
        dots: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        responsive: [{
                breakpoint: 1800,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});