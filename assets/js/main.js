/* home page slider */
const swiper4 = new Swiper('.main-slider', {
    lazy: true,
    preloadImages: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


/* tooltips everywhere */
let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
let tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

document.addEventListener('DOMContentLoaded', function () {
    let seconds=new Date();
    let year=seconds.getFullYear()
    document.querySelector('.date-now').innerHTML=year;
});

/* swiper slider - home page */
const swiper1 = new Swiper('.slider--life-in-maras', {
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
    preloadImages: false,
    lazy: true,
});

/* swiper slider - home page tekrom-facilities */
const swiper2 = new Swiper('.slider--tekrom-facilities', {
    slidesPerView: 1,
    spaceBetween: 30,
    preloadImages: false,
    lazy: true,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});
$(".slider--tekrom-facilities").hover(function() {
    (this).swiper.autoplay.stop();
}, function() {
    (this).swiper.autoplay.start();
});

/* swiper slider - home page tekrom-life */
const swiper3 = new Swiper('.slider--tekrom-life', {
    slidesPerView: 1,
    spaceBetween:0,
    loop:true,
    preloadImages: false,
    lazy: true,
    pagination: {
        el: ".swiper-pagination",
    },
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
});

/* page up arrow */
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#backToTop').fadeIn();
    } else {
        $('#backToTop').fadeOut();
    }
});