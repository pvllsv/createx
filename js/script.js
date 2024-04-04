$(function(){
    var mixer = mixitup('.directions_list');
    $('.direction-filterbutton').on('click', function(){
        $('.direction-filterbutton').removeClass('direction-filterbutton--active')
        $(this).addClass('direction-filterbutton--active')
    })

    $('.team-slider').slick({
        arrows: false,
        slidesToShow: 4,
        draggable: false,
        appendArrows: $(".team-slider_arrows"),
        waitForAnimate: false,
        responsive:
            [
                {
                    breakpoint: 1100,
                    settings:{
                        slidesToShow:3,
                    },
                },
                {
                    breakpoint: 700,
                    settings:{
                        slidesToShow:2,
                        draggable: true
                    },
                },
                {
                    breakpoint: 350,
                    settings:{
                        slidesToShow:1,
                        draggable: true
                    },
                },
            ]
        
        
    })
    $('.team-slider_arrow-prev').on('click', function(e){
        e.preventDefault()
        $('.team-slider').slick('slickPrev')
    })
    $('.team-slider_arrow-next').on('click', function(e){
        e.preventDefault()
        $('.team-slider').slick('slickNext')
    })
    $('.testimonial-slider').slick({
        arrows: false,
        dots: true,
        appendDots: $('.testimonials_dots'),
        // [
        //     {
        //         breakpoint: 700,
        //         settings:{
        //             slidesToShow:2,
        //             draggable: true
        //         },
        //     },
           
        // ]
        
        
    })
    $('.testimaonials_prev').on('click', function(e){
        e.preventDefault()
        $('.testimonial-slider').slick('slickPrev')
    })
    $('.testimaonials_next').on('click', function(e){
        e.preventDefault()
        $('.testimonial-slider').slick('slickNext')
    })
    // $('.program_acc-linck').on('click', function(e){
    //     e.preventDefault()
    //     $(this).toggleClass('program_acc-linck--active')
    //     $(this).children('.program_acc-text').slideToggle()
    // })
    $('.program_acc-linck').on('click', function(e){
        e.preventDefault()
        
        if($(this).hasClass('program_acc-linck--active')){
            $(this).removeClass('program_acc-linck--active')
            $(this).children('.program_acc-text').slideUp()
            
        }
        else{
            $('.program_acc-linck').removeClass('program_acc-linck--active')
            $('.program_acc-text').slideUp()
            $(this).addClass('program_acc-linck--active')
            $(this).children('.program_acc-text').slideDown()
        }

    })

    $(".header-nav-list a").on("click", function (e) {
        //отменяем стандартную обработку нажатия по ссылке
        e.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 2500);
    });
    $(".footer_bottom-inner a").on("click", function (e) {
        //отменяем стандартную обработку нажатия по ссылке
        e.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 2500);
    });
    $(".header-buttons a").on("click", function (e) {
        //отменяем стандартную обработку нажатия по ссылке
        e.preventDefault();
        
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 2500);
    });
    $('.burger, .owerlay, .header-top-inner a').on('click', function(e){
        e.preventDefault();
        $('.header-top').toggleClass('header-top--open')
        $('.owerlay').toggleClass('owerlay--open')

    })
    setInterval(()=>{
        if($(window).scrollTop()>0 && $('.header-top').hasClass('header-top--open')==false){
            $('.burger').removeClass('burger-empty')
        }
        else{
            $('.burger').addClass('burger-empty')


        }
    })
    $('.footer_top-title').on('click', function(){
        $(this).next().slideToggle()
    })
})