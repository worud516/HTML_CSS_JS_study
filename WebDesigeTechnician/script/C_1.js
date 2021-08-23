$(document).ready(function(){

        
    $("header>nav>ul>li").hover(function(){
        $(this).children("ul").stop().slideDown();
    },function(){
        $(this).children("ul").stop().slideUp();
    })
    


    var num = 0;

    $(".wrap-sub .slide>ul>li").eq(0).siblings().fadeOut();
    $(".wrap-sub .slide>ul>li").eq(0).fadeIn();

    setInterval(function(){
        num++;
        if( num >= 3){
            num = 0;
        }
        $(".wrap-sub .slide>ul>li").eq(num).siblings().fadeOut(1000);
        $(".wrap-sub .slide>ul>li").eq(num).fadeIn(1000);
    },3000);


    
    
    $(".contents .gon h2.hhh").click(function(){
        $(".contents .gal").addClass("on");
    });

    $(".contents .gon h2.hh").click(function(){
        $(".contents .gal").removeClass("on");
    });

    
    $(".contents .gon>ul>li").eq(0).click(function(){
        $(".modal").fadeIn();
    });

    $(".btn").click(function(){
        $(".modal").fadeOut();
    });

});