$(document).ready(function () {

    var indexNum = 0;

    setInterval(function () {

        if (indexNum > 3) {
            indexNum = 0;
        }

        $(".box").removeClass("active");
        $(".box").eq(indexNum).addClass("active");


        console.log(indexNum);

        indexNum++;

    }, 1500);

});