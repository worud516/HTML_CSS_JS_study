$(document).ready(function () {
    // 상황 닫기 버튼을 누르면 기능이 작동한다.
    // 기능은 팝업 창이 없어진다.
    // 팝업창에 active라는 클래스를 추가한다.

    $(".clo-btn").click(function () {
        $(".pop-up-wrap").addClass("active");
    });

    $(".reset").click(function () {
        $(".pop-up-wrap").removeClass("active");
    });


});