function getNewsItem() {
    const news = document.querySelector('.news-carousel');
    const renderNews = async () => {
        const result = await fetch('http://localhost:3000/news');
        const newsPost = await result.json();
        let newsTemplate = '';

        for (const prop of newsPost) {
            newsTemplate += `
                <div class="item">
                    <div class="card">
                        <img src="${prop.src}" class="card-img-top" loading="lazy" alt="...">

                        <div class="card-body">
                            <h5 class="card-title">${prop.title}</h5>
                            <p class="card-text">${prop.text.slice(0, 100)}...</p>
                            <div class="d-flex">
                                <a href="./news-details.html?id=${prop.id}" class="btn btn-primary">Подробнее</a>
                                <p class="card-text"><time>24.11.2021</time></p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }

        news.insertAdjacentHTML('afterbegin', newsTemplate);

        $(document).ready(function () {
            $('.news-carousel').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                dots: false,
                responsive: [{
                        breakpoint: 1265,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            autoplay: true,
                            autoplaySpeed: 3000,
                            dots: false
                        }
                    },
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            autoplay: true,
                            autoplaySpeed: 3000,
                            dots: false
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
    }
    
    window.addEventListener('DOMContentLoaded', () => renderNews());
}

getNewsItem();