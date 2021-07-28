$(document).ready(function(){

    $("header nav ul.gnb>li").hover(function(){
        $("header nav ul.gnb>li>ul.sub").stop().slideDown();
    },function(){
        $("header nav ul.gnb>li>ul.sub").stop().slideUp();
    });


    var num = 0;

    setInterval(function(){
        num++
        if(num >= 3){
            num = 0;
        }
        $(".slide ul.slide_all li").css({
            "top": + (num * -300) + "px"
        });
    },3000);

    $(".contents .notice_gal h3.header1").click(function(){
        $(".contents .notice_gal h3.l100").removeClass("on");
        $(".contents .notice_gal ul.gal").removeClass("on");
        $(".contents .notice_gal h3.header1").addClass("on");
        $(".contents .notice_gal ul.notice").addClass("on");

    });

    $(".contents .notice_gal h3.l100").click(function(){
        $(".contents .notice_gal h3.header1").removeClass("on");
        $(".contents .notice_gal ul.notice").removeClass("on");
        $(".contents .notice_gal h3.l100").addClass("on");
        $(".contents .notice_gal ul.gal").addClass("on");
    });

    $("ul.notice li").eq(0).click(function(){
        $(".modal").fadeIn();
    });

    $("button").click(function(){
        $(".modal").fadeOut();
    });



});