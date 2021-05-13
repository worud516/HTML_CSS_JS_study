$(document).ready(function () {

    var i = 0;

    setInterval(function () {

        if (i > 3) {
            i = 0;
        }

        $(".box-list").css({
            "left": (-900 * i) + "px",
        });

        i++;

    }, 1500);

});