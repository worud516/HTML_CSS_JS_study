$(document).ready(function () {

    var indexNum = 0;

    setInterval(function () {

        if (indexNum > 3) {
            indexNum = 0;
        }

        console.log(indexNum);

        $(".box-list").css({
            "top": (-360 * indexNum) + "px",
        });

        indexNum++;

    }, 1500);

});