$(document).ready(function () {

    $('.slider-wrap').on('init', function (event, slick) {
        $(".slider-wrap .content").eq(1).addClass("active");
    });


    $(".slider-wrap").slick({});


    $(".dots").click(function () {

        var indexNum = $(this).index();
        console.log(indexNum);

        $(".slider-wrap").slick("slickGoTo", indexNum);

    });

    $('.slider-wrap').on('afterChange', function (event, slick, currentSlide) {
        $(".slider-wrap .content").removeClass("active");
        $(".slider-wrap .content").eq(currentSlide + 1).addClass("active");

        $(".current-num").text(currentSlide + 1);

    });



});