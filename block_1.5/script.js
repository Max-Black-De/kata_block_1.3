// init Swiper:
new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next', 
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: false,
    },
    slidesPerView: 'auto',
    spaceBetween: 16,
    slidesOffsetAfter: 64,
    breakpoints: {
        768: {
            spaceBetween: 0
        }
    }
})