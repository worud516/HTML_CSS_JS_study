$(document).ready(function(){

    $("header nav ul.gnb>li").hover(function(){
        $("header nav ul.gnb>li>ul.sub").stop().slideDown();
    },function(){
        $("header nav ul.gnb>li>ul.sub").stop().slideUp();
    });


    var slideI = 0;

    setInterval(function(){
        slideI++;
        if(slideI >= 3){
            slideI = 0;
        }
        $(".slide ul.slide_all>li").css({
            "top": (-300 * slideI) + "px",
          });
    },3000);


    $(".contents .notice_gal h3").click(function(){
        $(".contents .notice_gal h3, .contents .notice_gal ul").removeClass("on");
        $(this).addClass("on");
        $(this).next("ul").addClass("on");
    });

    $("ul.notice li").eq(0).click(function(){
        $(".modal").fadeIn();
    });

    $("button").click(function(){
        $(".modal").fadeOut();
    });

});