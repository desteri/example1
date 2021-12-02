function search() {
    let srcPanel = document.querySelector('header .form-control');
    let srcIcon = document.querySelector('.search');

    srcIcon.addEventListener('click', (e) => {
        e.preventDefault();

        srcPanel.classList.toggle('target');
    });
}

search();

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        lazyLoad: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            768: {
                items: 2,
                nav: true
            },
            1024: {
                items: 3,
                nav: true
            }
        }
    })
});