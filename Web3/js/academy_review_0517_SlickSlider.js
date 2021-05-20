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
        nextArrow: "<div class='btn-right'><img src='https://lh3.googleusercontent.com/proxy/Vp6JB7DeZbZYP_x4jcf-l2oO1ZkCTzq40Y01Knw5J_gEuKzjo4Wsdv_YiYublsstNr-WsCoRzzu_JKd98yjULaaE3zfQzo0-S2lsr0YcFV4_efeKN1oq5IO8Ssmal9uyp3fwQ9hqnILmEUwOzKfNHN5pcFe0y9UF21gt4cH-foWru-Mz9TAw84qSiWTUx7vV1aeiK5CEUYC3fVswcz0woCdA5uFiir-qWJycQ3rHBVRvtbq9lLmQYpdTsYRp4Jgq-RlOoaa5rZN2CTRn5zE-_xcPpFGgIgQr4gofqEpl06eoisTQK6Q14LF_CAiZ1YiweEWR' alt=''></div>",
        prevArrow: "<<div class='btn-left'><i class='fas fa-arrow-circle-left'></i></div>",
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