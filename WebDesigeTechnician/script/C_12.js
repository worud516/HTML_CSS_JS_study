$(document).ready(function(){

    $(".wrap > .lbox > ul > li").hover(function(){
        $(this).children("ul").stop().slideDown();
    },function(){
        $(this).children("ul").stop().slideUp();
    });



    var num = 0;

    $(".wrap > .rbox > ul.slide > li").eq(0).siblings().fadeOut(0);
    $(".wrap > .rbox > ul.slide > li").eq(0).fadeIn(0);

    setInterval(function(){
        num++;
        if( num >= 3){
            num = 0;
        }
        $(".wrap > .rbox > ul.slide > li").eq(num).siblings().fadeOut(1000);
        $(".wrap > .rbox > ul.slide > li").eq(num).fadeIn(1000);
    },3000);

});