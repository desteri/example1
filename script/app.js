'use strict';

function navDrop() {
    let header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 300) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    });
}

navDrop();

function search() {
    let srcPanel = document.querySelector('header .form-control');
    let srcIcon = document.querySelector('.search');

    srcIcon.addEventListener('click', (e) => {
        e.preventDefault();

        srcPanel.classList.toggle('target');
    });
}

search();

function getAchieve() {
    document.querySelectorAll('.achieve span').forEach(item => {
        let numberTop = item.getBoundingClientRect().top;
        let start = +item.innerHTML;
        let end = +item.dataset.max;

        window.addEventListener('scroll', function onScroll() {
            if (window.scrollY > numberTop - window.innerHeight) {
                this.removeEventListener('scroll', onScroll);
                let interval = setInterval(function () {
                    item.innerHTML = ++start;
                    if (start == end) {
                        clearInterval(interval);
                    }
                }, 20);
            }
        });
    });
}

getAchieve();

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
                    autoplay: true,
                    autoplaySpeed: 3000,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    dots: true
                }
            }
        ]
    });
});