$(document).ready(function () {

    var indexNum = 0;
    var box__length = $(".box-wrap > .box-list > .box").length;

    var box__width = $(".box-wrap > .box-list > .box").width();
    var box__height = $(".box-wrap > .box-list > .box").height();


    $(".box-wrap").css({
        "width": box__width + "px",
        "height": box__height + "px ",
    });
    // alert(box__height);
    $(".box-list").css({
        "width": box__width * box__length + "px",
    })

    for (var i = 0; i < box__length; i++) {

        $(".dots-wrap").append("<li class='dots'></li>");

    };


    setInterval(function () {

        if (indexNum > box__length - 1) {
            indexNum = 0;
        }

        $(".box-list").css({
            "left": -box__width * indexNum + "px",
        });

        $(".dots-wrap > .dots").removeClass("active");
        $(".dots-wrap > .dots").eq(indexNum).addClass("active");


        console.log(indexNum);

        indexNum++;

    }, 1000);

});