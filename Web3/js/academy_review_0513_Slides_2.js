$(document).ready(function () {

    var i = 0;

    var box_length = $(".box-wrap > .box-list > .box").length;

    $(".box-list").css({
        "width": 900 * box_length + "px",
    })


    for (var i = 0; i < box_length; i++) {
        $(".dots-wrap").append("<li class='dots cell'></li>");
    };


    setInterval(function () {

        if (i > box_length - 1) {
            i = 0;
        }

        $(".box-list").css({
            "left": (-900 * i) + "px",
        });

        $(".dots-wrap > .dots").removeClass("active");
        $(".dots-wrap > .dots").eq(i).addClass("active");

        i++;

    }, 1000);

});