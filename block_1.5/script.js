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
    autoHeight: false,
    slidesPerView: 1.25,
    centeredSlides: false,
    slidesOffsetAfter: 64,
})