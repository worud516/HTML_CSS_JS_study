$(document).ready(function () {

    //버튼을 누르면 기능이 작동한다.
    $(".toggle_menu > .btn").click(function () {

        //기능 메뉴가 들어갔다 나왔다 한다.
        //toggle_menu 에 active 가 붙었다 떨어졌다 한다.
        $(".toggle_menu").toggleClass("active");

    });

    //메뉴를 클릭하면 기능이 작동한다.
    //기능 2차 메뉴가 나타난다.
    //기능 내가 누른 1차메뉴에 해당하는 2차메뉴가 나타난다.
    $(".toggle_menu > ul > li").click(function () {

        //만약에 활성화 되어있는 메뉴를 클릭하면 다시 닫힌다.
        //만약에 내가 누른 1차메뉴에 active 라는 클래스가 있으면 그 메뉴 닫는다.
        //안 붙어 있으면 일반 기능은로 한다.

        if ($(this).hasClass("active")) {
            $(this).removeClass("active")
        } else {
            $(".toggle_menu > ul > li").removeClass("active");
            $(this).toggleClass("active");
        };

    });

});