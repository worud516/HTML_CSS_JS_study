$(document).ready(function(){


    $(".wrap > .leftbox > nav > ul > li").hover(function(){
        $(this).children("ul").stop().slideDown();
    },function(){
        $(this).children("ul").stop().slideUp();
    });

    var num = 0;

    $(".wrap > .rightbox > .slide > ul > li").eq(num).siblings().hide();

    setInterval(function(){
        num++;
        if( num >= 3){
            num = 0;
        }

        $(".wrap > .rightbox > .slide > ul > li").eq(num).siblings().fadeOut(1000);
        $(".wrap > .rightbox > .slide > ul > li").eq(num).fadeIn(1000);

    },3000);

});