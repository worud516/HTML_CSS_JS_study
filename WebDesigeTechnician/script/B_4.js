$(document).ready(function(){

    $(".wrap > header > ul > li").hover(function(){
        $(".navbg").stop().slideDown();
        $(".wrap > header > ul > li > ul").stop().slideDown();
    },function(){
        $(".navbg").stop().slideUp();
        $(".wrap > header > ul > li > ul").stop().slideUp();
    });


    var num = 0;

    setInterval(function(){
        num++;
        if( num >= 3){
            num = 0;
        }

        $(".wrap > .slide > ul").css({
            "left": (-1200 * num) + "px"
        });


    },3000);


    $(".wrap > .content > .gon > ul > li").eq(0).click(function(){
        $(".modal").fadeIn();
    });
    $(".btn").eq(0).click(function(){
        $(".modal").fadeOut();
    });


});