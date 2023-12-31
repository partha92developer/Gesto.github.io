$(document).ready(function(){

    // Back to top
    $(window).scroll(function(){
        var x=$ (document).scrollTop();
        if(x>50){
            $(".scrolltop").fadeIn("slow");
        }
        else{
            $(".scrolltop").fadeOut("slow");
        }
    });
    $(".scrolltop").click(function(){
        $(window).scrollTop(0);
    });
    	// nav menu
        $(".mobile-menu ").click(function(){
            $(".menu-main").fadeIn();
            $("body").addClass("overflow-hidden")
            $(".ban-main-img").css("display", "none")
        });
        $(".close-menu i").click(function(){
            $(".menu-main").fadeOut();
            $("body").removeClass("overflow-hidden")
            $(".ban-main-img").css("display", "block")
        });

   
    $('.sec-x1-sld-item').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-arrow-left-long'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa-solid fa-arrow-right-long'></i></button>",
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
        ]
    });

    $('.counter').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
  
        
    $('.sec-x3-wrap-sld').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        // prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-arrow-left-long'></i></button>",
        // nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa-solid fa-arrow-right-long'></i></button>",
        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 567,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
        ]
    });

    $('.sec-x4-item-sld').slick({
        centerMode: true,
        centerPadding: '0',
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        arrows: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-arrow-left-long'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa-solid fa-arrow-right-long'></i></button>",
        responsive: [
            {
              breakpoint: 767,
              settings: {
                centerMode: false,
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
        ]
    });


    $(".price-wrap-1").fadeIn()
    $(".price-wrap-2").fadeOut()
    $('.marketing-wrap-x6 .butn-wrap span.m-btn i').addClass("j-btn")
    $('.marketing-wrap-x6 .butn-wrap span.btn-1 i').removeClass("j-btn")

    $(".btn-1").click(function(){
        $(".price-wrap-1").show()
        $(".price-wrap-2").hide()
        $("body").addClass("overflow-hidden")
        $('.marketing-wrap-x6 .butn-wrap span.btn-1 i').removeClass("j-btn")
        $('.marketing-wrap-x6 .butn-wrap span.btn-2 i').addClass("j-btn")
    });
    $(".btn-2").click(function(){
        $(".price-wrap-1").hide()
        $(".price-wrap-2").show()
        $("body").addClass("overflow-hidden")
        $('.marketing-wrap-x6 .butn-wrap span.btn-1 i').addClass("j-btn")
        $('.marketing-wrap-x6 .butn-wrap span.btn-2 i').removeClass("j-btn")
    });


    // acc btn sec-8
    $(".acc-div-x8:nth-child(1)").addClass("active").find(".acc-cont-x8").slideDown();

    $('.acc-title-x8').click(function(){
    $(this).closest(".acc-div-x8").toggleClass("active").find(".acc-cont-x8").slideToggle();
    $(this).closest(".acc-div-x8").siblings(".acc-div-x8").removeClass("active").find(".acc-cont-x8").slideUp();
    });

    // business-sld section-x9
    $('.business-sld').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        arrows: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-arrow-left-long'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa-solid fa-arrow-right-long'></i></button>",
        responsive: [
          {
            breakpoint: 767,
            settings: {
              centerMode: false,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
      ]
    });

    // swiper sld section-x10
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 1,
        freeMode: true,
        watchSlidesProgress: true,
        autoplay: {
      delay: 9000,
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
      });
      var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        thumbs: {
          swiper: swiper,
        },
        autoplay: {
      delay: 9000,
      },
    });

     // section-x11
    var swiper = new Swiper(".testimonial", {
      spaceBetween: 10,
      slidesPerView: 2,
      speed: 0,
      freeMode: true,
      watchSlidesProgress: true,
    //   autoplay: {
    // delay: 3000,
    // },
     });
    var swiper2 = new Swiper(".testimonial-2", {
      speed: 30,
      spaceBetween: 10,
      thumbs: {
        swiper: swiper,
      },
      autoplay: {
    delay: 9000,
    disableOnInteraction: false,
    },
    });



    // logo brand sec-x12
    $('.logo-brand-sld').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              centerMode: false,
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              centerMode: false,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
      ]
    });

    //Accrordion sec-14
    // $("acc-contener-x14 .acc-div-x14:nth-child(1)").addClass("active").find(".acc-cont-x14").slideDown();

    // $('.acc-title-x14').click(function(){
    // $(this).closest(".acc-div-x14").toggleClass("active").find(".acc-cont-x14").slideToggle();
    // $(this).closest(".acc-div-x14").siblings(".acc-div-x14").removeClass("active").find(".acc-cont-x14").slideUp();
    // });

    $(".acc-div-x14:nth-child(1)").addClass("active").find(".acc-cont-x14").slideDown();

    $('.acc-title-x14').click(function(){
    $(this).closest(".acc-div-x14").toggleClass("active").find(".acc-cont-x14").slideToggle();
    $(this).closest(".acc-div-x14").siblings(".acc-div-x14").removeClass("active").find(".acc-cont-x14").slideUp();
    });


   

// // animated
//     $(".footer-bg-img").waypoint(function(direction){
//         $(".footer-bg-img").addClass("animated fadeInLeft")
//     },{
//         ofset:"50%"
//     })

//     $(".ban-content").waypoint(function(direction){
//         $(".ban-content").addClass("animated animate__delay-8s fadeInLeft")
//     },{
//         ofset:"10%"
//     })

});


