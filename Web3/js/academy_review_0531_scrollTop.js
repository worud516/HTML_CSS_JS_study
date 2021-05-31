$(document).ready(function () {

    $(".up-btn").click(function () {
        $("html").animate({
            scrollTop: 0,
        }, 2000);
    });

});


$(window).scroll(function () {

    var test = $(this).scrollTop();

    console.log(test);

    if (test >= 1700) {
        $(".up-btn").addClass("active");
    } else if (test <= 300) {
        $(".up-btn").removeClass("active");
    }

});