    import $ from './jquery-3.3.1.slim.min.js';

    $(".market_leaders_carousel").owlCarousel({
        loop: true,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            }
        }
    });
    $(".testimonials_carousel").owlCarousel({
        loop: true,
        dots: true,
        responsive: {
            1000: {
                items: 1
            }
        }
    });
    $(".discover_carousel").owlCarousel({
        loop: true,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });
    $(".courses_carousel").owlCarousel({
        loop: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            }
        }
    });

