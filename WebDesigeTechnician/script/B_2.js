$(document).ready(function(){

    $("header nav>ul>li").hover(function(){
        $("header nav>ul>li>ul").stop().slideDown();
        $(".navbg").stop().slideDown(); 
    },function(){
        $("header nav>ul>li>ul").stop().slideUp();
        $(".navbg").stop().slideUp();
    })
    


    var slidenum = 0;
    setInterval(function(){
        slidenum++;
        if(slidenum >= 3){
            slidenum = 0;
        }
        $(".slide ul").css({
            "top": (-300 * slidenum) + "px"
        });

    },3000);
   
    $(".content .gongi > ul > li").eq(0).click(function(){
        $(".modal").fadeIn();
    });

    $("button").click(function(){
        $(".modal").fadeOut();
    });

});