$(document).ready(function () {

    var i = 0;

    setInterval(function () {

        if (i > 3) {
            i = 0;
        }

        $(".box-list").css({
            "left": (-900 * i) + "px",
        });

        $(".dots-wrap > .dots").removeClass("active");
        $(".dots-wrap > .dots").eq(i).addClass("active");

        i++;

    }, 1500);

});