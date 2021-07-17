$(document).ready(function () {

    $(".quick-right-box-wrap").hover(function () {
        $(".quick-left-box-wrap").css({
            "right": 50,
        });
    }, function () {
        $(".quick-left-box-wrap").css({
            "right": -100,
        });
    });

    $(".quick-right-box").hover(function () {
        var i = $(this).index();
        $(".quick-right-box:nth-child(" + (i + 1) + ")").css({
            "background-color": "#444",
        });
        $(".left-box:nth-child(" + (i + 1) + ")").css({
            "background-color": "#444",
        });
    }, function () {
        var i = $(this).index();
        $(".quick-right-box:nth-child(" + (i + 1) + ")").css({
            "background-color": "black",
        });
        $(".left-box:nth-child(" + (i + 1) + ")").css({
            "background-color": "black",
        });
    });


    $(".top-bor-wrap>.top-1400box>.menu-bor>ul>li").click(function () {

        var indexNum = $(this).index();

        if( $(".nav-2-depth-wrap > div").eq(indexNum).hasClass("active") ){
            
          $(".nav-2-depth-wrap > div").removeClass("active");
          
        } else {
            $(".nav-2-depth-wrap > div").removeClass("active");
            $(".nav-2-depth-wrap > div").eq(indexNum).addClass("active");
        }
    });
    

    $(".car-menu-box>.car-wrap>.car-right-box>.bottom-box>.bottom-right-box>.xbox").click(function () {
        $(".car-menu-box").removeClass("active");
    });

    $(".menu>.content-box-wrap:nth-child(4)>.bottom>.xbox").click(function () {
        $(".menu").removeClass("active");
    });


    // $(".top-bor-wrap>.top-1400box>.menu-bor>ul>li:first-child").click(function () {
    //     if ($(".menu").hasClass("active")) {
    //         $(".menu").removeClass("active");
    //     } else {
    //         $(".menu").addClass("active");
    //         $(".menu>.content-box-wrap:nth-child(4)>.bottom>.xbox").click(function () {
    //             $(".menu").removeClass("active");
    //         });
    //     }
    // });

    // $(".top-bor-wrap>.top-1400box>.menu-bor>ul>li:nth-child(2)").click(function () {
    //     if ($(".car-menu-box").hasClass("active")) {
    //         $(".car-menu-box").removeClass("active");
    //     } else {
    //         $(".car-menu-box").addClass("active");
    //         $(".car-menu-box>.car-wrap>.car-right-box>.bottom-box>.bottom-right-box>.xbox").click(function () {
    //             $(".car-menu-box").removeClass("active");
    //         });
    //     }
    // });



    $(".footer-wrap > .menu-wrap > .up-box").click(function () {
        $("html").animate({
            scrollTop: 0,
        }, 1000);
    });

    $(".search-new-vehicle-inventory-wrap>.box90>.model-box>.new-car-box").click(function () {
        $(".search-new-vehicle-inventory-wrap>.box90>.model-box>.car-select-list").toggleClass("active");
        $(".search-new-vehicle-inventory-wrap>.box90>.model-box>.new-car-box>.font-arrow").toggleClass("active");
    });





    $(".car_list_model").slick({
        slidesToShow: 8, // 한 화면에 보여질 컨텐츠 개수
        slidesToScroll: 8, //스크롤 한번에 움직일 컨텐츠 개수
        prevArrow: $(".model-search-wrap>.relative-box>.model-img-wrap>.left-arrow"),
        nextArrow: $(".model-search-wrap>.relative-box>.model-img-wrap>.right-arrow"),
        infinite: false,
        //     responsive: 
        // [
        //   {
        //     breakpoint: 1024,
        //     settings: {
        //       slidesToShow: 4,
        //       slidesToScroll: 4,
        //       infinite: true,
        //       dots: true
        //     }
        //   },
        //   {
        //     breakpoint: 600,
        //     settings: {
        //       slidesToShow: 3,
        //       slidesToScroll: 3
        //     }
        //   },
        //   {
        //     breakpoint: 480,
        //     settings: {
        //       slidesToShow: 1,
        //       slidesToScroll: 1
        //     }
        //   }
        // ]
    });





    $(".model-search-wrap>.relative-box>.model-img-wrap>.right-arrow").click(function () {
        $(".model-search-wrap>.relative-box>.model-img-wrap>.right-arrow").toggleClass("active");
        $(".model-search-wrap>.relative-box>.model-img-wrap>.left-arrow").toggleClass("active");
    });

    $(".model-search-wrap>.relative-box>.model-img-wrap>.left-arrow").click(function () {
        $(".model-search-wrap>.relative-box>.model-img-wrap>.right-arrow").toggleClass("active");
        $(".model-search-wrap>.relative-box>.model-img-wrap>.left-arrow").toggleClass("active");
    });

    $(".car_list_model2").slick({
        slidesToShow: 8, // 한 화면에 보여질 컨텐츠 개수
        slidesToScroll: 8, //스크롤 한번에 움직일 컨텐츠 개수
        prevArrow: $(".model-search-wrap>.relative-box>.model-img-wrap2>.left-arrow2"),
        nextArrow: $(".model-search-wrap>.relative-box>.model-img-wrap2>.right-arrow2"),
        infinite: false,
        //     responsive: 
        // [
        //   {
        //     breakpoint: 1024,
        //     settings: {
        //       slidesToShow: 4,
        //       slidesToScroll: 4,
        //       infinite: true,
        //       dots: true
        //     }
        //   },
        //   {
        //     breakpoint: 600,
        //     settings: {
        //       slidesToShow: 3,
        //       slidesToScroll: 3
        //     }
        //   },
        //   {
        //     breakpoint: 480,
        //     settings: {
        //       slidesToShow: 1,
        //       slidesToScroll: 1
        //     }
        //   }
        // ]
    });

    $(".model-search-wrap>.relative-box>.model-img-wrap2>.right-arrow2").click(function () {
        $(".model-search-wrap>.relative-box>.model-img-wrap2>.right-arrow2").toggleClass("active");
        $(".model-search-wrap>.relative-box>.model-img-wrap2>.left-arrow2").toggleClass("active");
    });

    $(".model-search-wrap>.relative-box>.model-img-wrap2>.left-arrow2").click(function () {
        $(".model-search-wrap>.relative-box>.model-img-wrap2>.right-arrow2").toggleClass("active");
        $(".model-search-wrap>.relative-box>.model-img-wrap2>.left-arrow2").toggleClass("active");
    });



    $(".model-search-wrap>.Choice-box>span:last-child").click(function () {
        $(".model-search-wrap>.Choice-box>span:first-child").removeClass("active");
        $(".model-search-wrap>.Choice-box>span:last-child").addClass("active");
        $(".model-search-wrap>.relative-box>.model-img-wrap").addClass("active");
        $(".model-search-wrap>.relative-box>.model-img-wrap2").addClass("active");
    });
    $(".model-search-wrap>.Choice-box>span:first-child").click(function () {
        $(".model-search-wrap>.Choice-box>span:last-child").removeClass("active");
        $(".model-search-wrap>.Choice-box>span:first-child").addClass("active");
        $(".model-search-wrap>.relative-box>.model-img-wrap").removeClass("active");
        $(".model-search-wrap>.relative-box>.model-img-wrap2").removeClass("active");
    });





});