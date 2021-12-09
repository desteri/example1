'use strict';

function navDropAndUp() {
    let header = document.querySelector('header');
    let up = document.querySelector('.up');

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 300) {
            header.classList.add('fixed');
            up.style.display = 'block';
        } else {
            header.classList.remove('fixed');
            up.style.display = 'none';
        }
    });
}

navDropAndUp();

function getSearch() {
    let srcPanel = document.querySelector('header .form-control');
    let srcIcon = document.querySelectorAll('.search');

    srcIcon.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            srcPanel.classList.toggle('target');
        });
    });
}

getSearch();

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
                    arrows: false,
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
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    dots: true
                }
            }
        ]
    });
});

$('.photo__content').slick({
    infinite: true,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    responsive: [{
            breakpoint: 1300,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                dots: true
            }
        },
        {
            breakpoint: 1265,
            settings: {
                slidesToShow: 5,
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
                arrows: false,
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
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,
                dots: true
            }
        }
    ]
});

function getNewsItem() {
    let cards = document.querySelector('.news__content ul');
    const pages = [{
            "src": "./img/news/1.png",
            "title": "Кыргызпатент профинансирует патентные разработки",
            "text": "Nulla non proin non diam. Aliquam morbi vestibulum, praesent condimentum. Vitae elementum pellentesque feugiat odio ornare blandit..."
        },
        {
            "src": "./img/news/2.png",
            "title": "Кыргызпатент профинансирует патентные разработки",
            "text": "Nulla non proin non diam. Aliquam morbi vestibulum, praesent condimentum. Vitae elementum pellentesque feugiat odio ornare blandit..."
        },
        {
            "src": "./img/news/3.png",
            "title": "Кыргызпатент профинансирует патентные разработки",
            "text": "Nulla non proin non diam. Aliquam morbi vestibulum, praesent condimentum. Vitae elementum pellentesque feugiat odio ornare blandit..."
        },
        {
            "src": "./img/news/4.png",
            "title": "Кыргызпатент профинансирует патентные разработки",
            "text": "Nulla non proin non diam. Aliquam morbi vestibulum, praesent condimentum. Vitae elementum pellentesque feugiat odio ornare blandit..."
        },
        {
            "src": "./img/news/5.png",
            "title": "Кыргызпатент профинансирует патентные разработки",
            "text": "Nulla non proin non diam. Aliquam morbi vestibulum, praesent condimentum. Vitae elementum pellentesque feugiat odio ornare blandit..."
        },
        {
            "src": "./img/news/6.png",
            "title": "Кыргызпатент профинансирует патентные разработки",
            "text": "Nulla non proin non diam. Aliquam morbi vestibulum, praesent condimentum. Vitae elementum pellentesque feugiat odio ornare blandit..."
        },
        {
            "src": "./img/news/7.png",
            "title": "Кыргызпатент профинансирует патентные разработки",
            "text": "Nulla non proin non diam. Aliquam morbi vestibulum, praesent condimentum. Vitae elementum pellentesque feugiat odio ornare blandit..."
        },
        {
            "src": "./img/news/8.png",
            "title": "Кыргызпатент профинансирует патентные разработки",
            "text": "Nulla non proin non diam. Aliquam morbi vestibulum, praesent condimentum. Vitae elementum pellentesque feugiat odio ornare blandit..."
        },
        {
            "src": "./img/news/9.png",
            "title": "Кыргызпатент профинансирует патентные разработки",
            "text": "Nulla non proin non diam. Aliquam morbi vestibulum, praesent condimentum. Vitae elementum pellentesque feugiat odio ornare blandit..."
        },
        {
            "src": "./img/news/9.png",
            "title": "Кыргызпатент профинансирует патентные разработки",
            "text": "Nulla non proin non diam. Aliquam morbi vestibulum, praesent condimentum. Vitae elementum pellentesque feugiat odio ornare blandit..."
        },
        {
            "src": "./img/news/8.png",
            "title": "Кыргызпатент профинансирует патентные разработки",
            "text": "Nulla non proin non diam. Aliquam morbi vestibulum, praesent condimentum. Vitae elementum pellentesque feugiat odio ornare blandit..."
        },
        {
            "src": "./img/news/7.png",
            "title": "Кыргызпатент профинансирует патентные разработки",
            "text": "Nulla non proin non diam. Aliquam morbi vestibulum, praesent condimentum. Vitae elementum pellentesque feugiat odio ornare blandit..."
        },
        {
            "src": "./img/news/6.png",
            "title": "Кыргызпатент профинансирует патентные разработки",
            "text": "Nulla non proin non diam. Aliquam morbi vestibulum, praesent condimentum. Vitae elementum pellentesque feugiat odio ornare blandit..."
        },
        {
            "src": "./img/news/5.png",
            "title": "Кыргызпатент профинансирует патентные разработки",
            "text": "Nulla non proin non diam. Aliquam morbi vestibulum, praesent condimentum. Vitae elementum pellentesque feugiat odio ornare blandit..."
        },
        {
            "src": "./img/news/4.png",
            "title": "Кыргызпатент профинансирует патентные разработки",
            "text": "Nulla non proin non diam. Aliquam morbi vestibulum, praesent condimentum. Vitae elementum pellentesque feugiat odio ornare blandit..."
        },
        {
            "src": "./img/news/3.png",
            "title": "Кыргызпатент профинансирует патентные разработки",
            "text": "Nulla non proin non diam. Aliquam morbi vestibulum, praesent condimentum. Vitae elementum pellentesque feugiat odio ornare blandit..."
        },
        {
            "src": "./img/news/2.png",
            "title": "Кыргызпатент профинансирует патентные разработки",
            "text": "Nulla non proin non diam. Aliquam morbi vestibulum, praesent condimentum. Vitae elementum pellentesque feugiat odio ornare blandit..."
        },
        {
            "src": "./img/news/1.png",
            "title": "Кыргызпатент профинансирует патентные разработки",
            "text": "Nulla non proin non diam. Aliquam morbi vestibulum, praesent condimentum. Vitae elementum pellentesque feugiat odio ornare blandit..."
        },
        {
            "src": "./img/news/5.png",
            "title": "Кыргызпатент профинансирует патентные разработки",
            "text": "Nulla non proin non diam. Aliquam morbi vestibulum, praesent condimentum. Vitae elementum pellentesque feugiat odio ornare blandit..."
        },
        {
            "src": "./img/news/7.png",
            "title": "Кыргызпатент профинансирует патентные разработки",
            "text": "Nulla non proin non diam. Aliquam morbi vestibulum, praesent condimentum. Vitae elementum pellentesque feugiat odio ornare blandit..."
        },
        {
            "src": "./img/news/2.png",
            "title": "Кыргызпатент профинансирует патентные разработки",
            "text": "Nulla non proin non diam. Aliquam morbi vestibulum, praesent condimentum. Vitae elementum pellentesque feugiat odio ornare blandit..."
        },
        {
            "src": "./img/news/3.png",
            "title": "Кыргызпатент профинансирует патентные разработки",
            "text": "Nulla non proin non diam. Aliquam morbi vestibulum, praesent condimentum. Vitae elementum pellentesque feugiat odio ornare blandit..."
        },
        {
            "src": "./img/news/9.png",
            "title": "Кыргызпатент профинансирует патентные разработки",
            "text": "Nulla non proin non diam. Aliquam morbi vestibulum, praesent condimentum. Vitae elementum pellentesque feugiat odio ornare blandit..."
        },
        {
            "src": "./img/news/8.png",
            "title": "Кыргызпатент профинансирует патентные разработки",
            "text": "Nulla non proin non diam. Aliquam morbi vestibulum, praesent condimentum. Vitae elementum pellentesque feugiat odio ornare blandit..."
        },
        {
            "src": "./img/news/1.png",
            "title": "Кыргызпатент профинансирует патентные разработки",
            "text": "Nulla non proin non diam. Aliquam morbi vestibulum, praesent condimentum. Vitae elementum pellentesque feugiat odio ornare blandit..."
        },
        {
            "src": "./img/news/4.png",
            "title": "Кыргызпатент профинансирует патентные разработки",
            "text": "Nulla non proin non diam. Aliquam morbi vestibulum, praesent condimentum. Vitae elementum pellentesque feugiat odio ornare blandit..."
        },
        {
            "src": "./img/news/6.png",
            "title": "Кыргызпатент профинансирует патентные разработки",
            "text": "Nulla non proin non diam. Aliquam morbi vestibulum, praesent condimentum. Vitae elementum pellentesque feugiat odio ornare blandit..."
        },
    ];
    let item = '';

    for (const prop of pages) {
        item += `
            <li class="card mb-4 border-0 border-bottom pb-4" style="max-width: 100%;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <a href="./news-details.html">
                            <img src="${prop.src}" class="img-fluid" alt="...">
                        </a>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">
                                <a href="./news-details.html">${prop.title}</a>
                            </h5>
                            <p class="card-text">${prop.text}</p>
                        </div>
                        <div class="card-footer border-0 bg-transparent">
                            <a href="./news-details.html" class="btn btn-primary">Подробнее</a>
                            <p class="card-text time"><time>24.11.2021</time></p>
                        </div>
                    </div>
                </div>
            </li>
        `
    }

    cards.insertAdjacentHTML('afterbegin', item);
}

// getNewsItem();