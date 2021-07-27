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



});