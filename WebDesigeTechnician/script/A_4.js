$(document).ready(function(){

    $("header .nav > ul.nav_all > li").hover(function(){
        $("header .nav > ul.nav_all > li > ul").stop().slideDown();
        $("header .nav .bnav").stop().slideDown();
    },function(){
        $("header .nav > ul.nav_all > li > ul").stop().slideUp();
        $("header .nav .bnav").stop().slideUp();
    })


    $("section.slide .slideall a").eq(0).siblings().hide();

    var slideI = 0;

    setInterval(function(){
        slideI++;
        if(slideI >= 3){
            slideI = 0;
        }
        $("section.slide .slideall a").eq(slideI).siblings().fadeOut(1000);
        $("section.slide .slideall a").eq(slideI).fadeIn(1000);

    }, 3000);
    
    $("footer .fs > ul > p").click(function(){
        $("footer .fs > ul > li").stop().slideToggle();
    });


    $("section.content section.notice ul>li:first-child").click(function(){
        $(".modal").fadeIn();
    });
    $("button").click(function(){
        $(".modal").fadeOut();
    });
});