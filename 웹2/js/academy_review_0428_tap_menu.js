$(document).ready(function () {
    // 상황 qna 버튼을 누르면 기능이 작동한다.
    // 기능 1. 공지사항 버튼에 색이 없어진다. active 없어진다.
    // 기능 2. qna 버튼에 색이 나타난다. active 추가된다.
    // 기능 3. 공지사항 컨텐츠가 없어진다. active 없어진다.
    // 기능 4. qna 컨텐츠가 나타난다. active 추가된다.

    $(".qna-btn").click(function () {
        $(".notice-btn").removeClass("active");
        $(".qna-btn").addClass("active");
        $(".notice-content").removeClass("active");
        $(".qna-content").addClass("active");
    });

    $(".notice-btn").click(function () {
        $(".notice-btn").addClass("active");
        $(".qna-btn").removeClass("active");
        $(".notice-content").addClass("active");
        $(".qna-content").removeClass("active");
    });


});