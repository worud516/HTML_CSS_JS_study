$(document).ready(function(){

    $(".content .notice ul li").eq(0).click(function(){
        $(".modal").fadeIn();
    });

    $(".btn").eq(0).click(function(){
        $(".modal").fadeOut();
    });
    

    $("header nav ul.gnb>li").hover(function(){
        $("header nav .nav_bg").stop().slideDown();
        $("header nav ul.gnb>li>ul.sub").stop().slideDown();
    },function(){
        $("header nav .nav_bg").stop().slideUp();
        $("header nav ul.gnb>li>ul.sub").stop().slideUp();
    });
 
    var slideNum = 0;

    setInterval(function(){
        slideNum ++;
        if(slideNum >= 3){
            slideNum = 0;
        }
        $(".slide .slide_all").css({
            "left": (-1200 * slideNum) + "px"
        });
    },3000);


    $("footer .fam p").click(function(){
        $(this).toggleClass("on");
        $("footer .fam ul").stop().slideToggle();
    });


});