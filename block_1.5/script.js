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
    // breakpoints: {
    //     320: {
    //         slidesOffsetAfter: 64,
    //     },
    //     480: {
    //         slidesOffsetAfter: -48,
    //     },
    //     640: {
    //         slidesOffsetAfter: 128,
    //     },
    // },
    spaceBetween: 16,
    // autoHeight: false,
    // centeredSlides: false,
    slidesOffsetAfter: 64,
})