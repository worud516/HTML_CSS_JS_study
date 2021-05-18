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

    /*
        infinite: true, // 무한반복
        centerMode: false,
        slidesToShow: 1, // 보여지는 슬라이드 개수
        slidesToScroll: 1, // 넘어가는 슬라이드 개수
        dots: true, // 점 네비게이션 표시
        arrows: true, // 화살표 표시
        fade: false, // 페이드 효과
        vertical: false, // 상하 슬라이드
        autoplay: false, //자동스크롤
        autoplaySpeed: 1000, //자동스크롤 속도
        pauseOnHover: true, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
    */

});