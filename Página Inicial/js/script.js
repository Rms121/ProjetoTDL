$(document).ready(function(){
    $('.sub-btn').click(function(){
    $(this).next('.sub-menu').slideToggle();
    $(this).find('.dropdown').toggleClass('rotate');
    });

    $('.imglogo').click(function(){
    $('.side-bar').addClass('active');
    side-bar.classList.remove('active');
    $('.imglogo').css("visibility", "hidden");
    });

    $('.close-btn').click(function(){
    $('.side-bar').removeClass('active');
    $('.imglogo').css("visibility", "visible");
    });

    });

    new Swiper('.card-wrapper', {
        loop: true,
        spaceBetween: 30,
        // Pagination bullets
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // Responsive breakpoints
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            }
        }
    });