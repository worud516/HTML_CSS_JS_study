$(document).ready(function () {
    $(".slider-wrap").slick({
        autoplay: true,
        autoplaySpeed: 1700,
        dots: true,
        //fade: true,   페이드인 페이드 아웃
        //slidesToShow: 1, 한번에 나오는 개수
        //slidesToScroll: 1, 몇개씩 넘어갈거냐
        vertical: true, // 아래에서 위로
        verticalSwiping: true, //아래에서 위로 드래그시 슬라이드 될수있게 하는거
    });

    $(".slider-wrap2").slick({
        autoplay: true,
        autoplaySpeed: 1700,
        dots: true,
    });


});