$(function(){
    $('.banner_slider').owlCarousel({
        loop:true,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayHoverPause: true,
        autoplayTimeout: 3000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:false,
                loop:true
            }
        }
    })
});