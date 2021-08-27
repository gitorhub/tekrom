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


/* home page slider */
(function ($) {

    var SliceSlider = {

        /**
         * Settings Object
         */
        settings: {
            delta: 0,
            currentSlideIndex: 0,
            scrollThreshold: 40,
            slides: $('.slide'),
            numSlides: $('.slide').length,
            navPrev: $('.js-prev'),
            navNext: $('.js-next'),
        },

        /**
         * Init
         */
        init: function () {
            s = this.settings;
            this.bindEvents();
        },

        /**
         * Bind our click, scroll, key events
         */
        bindEvents: function () {

            // On click prev
            s.navPrev.on({
                'click': SliceSlider.prevSlide
            });
            // On click next
            s.navNext.on({
                'click': SliceSlider.nextSlide
            });
            // On Arrow keys
            $(document).keyup(function (e) {
                // Left or back arrows
                if ((e.which === 37) || (e.which === 38)) {
                    SliceSlider.prevSlide();
                }
                // Down or right
                if ((e.which === 39) || (e.which === 40)) {
                    SliceSlider.nextSlide();
                }
            });
        },

        /**
         * Show Slide
         */
        showSlide: function () {
            // reset
            s.delta = 0;
            // Bail if we're already sliding
            if ($('body').hasClass('is-sliding')) {
                return;
            }
            // Loop through our slides
            s.slides.each(function (i, slide) {

                // Toggle the is-active class to show slide
                $(slide).toggleClass('is-active', (i === s.currentSlideIndex));
                $(slide).toggleClass('is-prev', (i === s.currentSlideIndex - 1));
                $(slide).toggleClass('is-next', (i === s.currentSlideIndex + 1));

                // Add and remove is-sliding class
                $('body').addClass('is-sliding');

                setTimeout(function () {
                    $('body').removeClass('is-sliding');
                }, 1000);
            });
        },

        /**
         * Previous Slide
         */
        prevSlide: function () {

            // If on first slide, loop to last
            if (s.currentSlideIndex <= 0) {
                s.currentSlideIndex = s.numSlides;
            }
            s.currentSlideIndex--;

            SliceSlider.showSlide();
        },

        /**
         * Next Slide
         */
        nextSlide: function () {

            s.currentSlideIndex++;

            // If on last slide, loop to first
            if (s.currentSlideIndex >= s.numSlides) {
                s.currentSlideIndex = 0;
            }

            SliceSlider.showSlide();
        },
    };
    SliceSlider.init();
})(jQuery);

/* tooltips everywhere */
let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
let tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

/*
document.addEventListener('DOMContentLoaded', function () {
    let seconds=new Date();
    let year=seconds.getFullYear()
    document.querySelector('.date-now').innerHTML=year;
});
*/

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
        delay: 2500,
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
        delay: 2500,
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


