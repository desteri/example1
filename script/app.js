function search() {
    let srcPanel = document.querySelector('header .form-control');
    let srcIcon = document.querySelector('.search');

    srcIcon.addEventListener('click', (e) => {
        e.preventDefault();

        srcPanel.classList.toggle('target');
    });
}

search();

// $(document).ready(function () {
//     $('.owl-carousel').owlCarousel({
//         items: 3,
//         loop: true,
//         margin: 10,
//         autoplay: true,
//         autoplayTimeout: 5000,
//         autoplayHoverPause: true,
//         lazyLoad: true,
//         responsiveClass: true,
//         responsive: {
//             0: {
//                 items: 1,
//                 nav: true
//             },
//             768: {
//                 items: 2,
//                 nav: true
//             },
//             1024: {
//                 items: 3,
//                 nav: true
//             }
//         }
//     })
// });

$(document).ready(function () {
    $('.news-carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        responsive: [{
                breakpoint: 1265,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    });
});