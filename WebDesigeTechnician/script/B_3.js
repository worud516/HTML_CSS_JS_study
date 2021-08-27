$(document).ready(function(){

    $(".wrap > header > ul > li").hover(function(){
        $(this).children("ul").stop().slideDown();
    },function(){
        $(this).children("ul").stop().slideUp();
    });


    var num = 0;
    setInterval(function(){
        num++;
        if( num >= 3){
            num = 0;
        }

        $(".wrap > .slide > ul").css({
            "top": (-300 * num) + "px"
        });

    },3000);


    $(".wrap > .contents > .gon > ul > li").eq(0).click(function(){
        $(".modal").fadeIn();
    });
    $(".btn").click(function(){
        $(".modal").fadeOut();
    });

});