$(document).ready(function () {

    $(".wrap").slick({
        prevArrow: $(".btn01"),
        nextArrow: $(".btn02"),
    });

    $(".btn03").click(function () {
        $(".wrap").slick('slickPrev');
    });

    $(".btn04").click(function () {
        $(".wrap").slick("slickNext");
    });

    $(".btn05 > .play").click(function () {
        $(".btn05 > .play").removeClass("active");
        $(".btn05 > .paused").addClass("active");
        $(".wrap").slick("slickPlay")
    });

    $(".btn05 > .paused").click(function () {
        $(".btn05 > .play").addClass("active");
        $(".btn05 > .paused").removeClass("active");
        $(".wrap").slick("slickPause")
    });

});