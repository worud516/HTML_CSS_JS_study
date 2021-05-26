$(document).ready(function () {

    $(".slider-wrap").slick({

        vertical: true,
        verticalSwiping: true,
        arrows: false,
        asNavFor: ".slider-wrap2",


    });
    $(".slider-wrap2").slick({

        fade: true,
        asNavFor: ".slider-wrap",

    });

});