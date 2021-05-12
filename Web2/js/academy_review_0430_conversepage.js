$(document).ready(function () {

    // 신발 메뉴가 클릭되면 기능이 작동한다.
    // 1번 기능. 까만 배경이 나타난다.
    // 2번 기능. 내가 누른 메뉴의 2차메뉴가 나타난다.
    // 3번 기능. 내가 이미 나타나있는 2차메뉴의 1차 메뉴를 누르면 메뉴가 없어진다.
    // 만약에 내가 누른 2차메뉴에 active라는 클래스가 있으면 메뉴가 없어진다. 없으면 1번 2번 기능이 작동한다.


    $(".top-bar-wrap > .top-bar > .nav-wrap > ul > li").click(function () {

        var indexNum = $(this).index();

        if ($(".nav-2-content").eq(indexNum).hasClass("active")) {
            $(".nav-2-depth-wrap").removeClass("active");
            $(".nav-2-content").removeClass("active");
        } else {

            $(".nav-2-depth-wrap").addClass("active");
            $(".nav-2-depth-wrap > .nav-2-depth-box > .nav-2-depth-left > .nav-2-content").removeClass("active");
            $(".nav-2-depth-wrap > .nav-2-depth-box > .nav-2-depth-left > .nav-2-content").eq(indexNum).addClass("active");
        }
    });


    $(".nav-2-depth-wrap > .nav-2-depth-box > .nav-2-depth-right").click(function () {
        $(".nav-2-depth-wrap").removeClass("active");
        $(".nav-2-content").removeClass("active");
    });


});