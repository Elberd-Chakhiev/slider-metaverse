
const changeFreeModeOnPhone = () =>{
    if(window.screen.width > 1025){
        const freeOnPhone = false
        return freeOnPhone
    }else{
        const freeOnPhone = true
        return freeOnPhone
        
    }
}


const mainSliderScreens = new Swiper('.swiper', {
    freeMode: changeFreeModeOnPhone(),
    direction: 'vertical',
    speed: 800,
    autopplay: false,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    }, 
    mousewheel: {
        sensetivity: 1,
        eventsTarget: '.scroll_is_true',
    },
    navigation: {
        nextEl: '.swiper-button-next',
    }, 
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    }, 
    initialSlide: 4
})



if(window.screen.width > 1025){

    const sliderOnSecondSlide = new Swiper('.swiper_second_slide', {
        speed: 800,
        autopplay: false,
        autoHeight: true,
        slidesPerView: 3,
        spaceBetween: 20,
    
        
    })

}else{
    const sliderOnSecondSlide = new Swiper('.swiper_second_slide', {
        speed: 800,
        autopplay: false,
        autoHeight: true,
        slidesPerView: 1.3,
        spaceBetween: 30,
        centeredSlides: true,
    
        
    })
}
