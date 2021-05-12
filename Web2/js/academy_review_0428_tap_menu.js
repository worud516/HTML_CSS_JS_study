$(document).ready(function () {
    // 상황 qna 버튼을 누르면 기능이 작동한다.
    // 기능 1. 공지사항 버튼에 색이 없어진다. active 없어진다.
    // 기능 2. qna 버튼에 색이 나타난다. active 추가된다.
    // 기능 3. 공지사항 컨텐츠가 없어진다. active 없어진다.
    // 기능 4. qna 컨텐츠가 나타난다. active 추가된다.

    // $(".qna-btn").click(function () {
    //     $(".notice-btn").removeClass("active");
    //     $(".qna-btn").addClass("active");
    //     $(".notice-content").removeClass("active");
    //     $(".qna-content").addClass("active");
    // });

    // $(".notice-btn").click(function () {
    //     $(".notice-btn").addClass("active");
    //     $(".qna-btn").removeClass("active");
    //     $(".notice-content").addClass("active");
    //     $(".qna-content").removeClass("active");
    // });



    // 이렇게 할 경우 공지사항이나 Q & A나 추가해도 따로 수정 안해도 됨.
    $(".btn-box > div").click(function () {

        var indexNum = $(this).index();
        $(".btn-box > div").removeClass("active");
        $(".btn-box > div").eq(indexNum).addClass("active");

        // 기능 1. 내가 누른 친구의 인덱스번호와 같은 컨텐츠가 나타난다.
        // 기능 2. 내가 누르지 않은 친구들은 컨텐츠가 안보인다.
        $(".content-box > div").removeClass("active");
        $(".content-box > div").eq(indexNum).addClass("active");

    });


});