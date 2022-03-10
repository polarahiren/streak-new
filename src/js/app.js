const jquery = require('jquery');

try {
    window.$ = window.jQuery = require('jquery');
} catch (e) {}

// slick js
require('slick-carousel/slick/slick');

jquery(document).ready(function () {
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