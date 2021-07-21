$(document).ready(function(){

    $("header nav ul.gnb>li").hover(function(){
        $("header nav ul.gnb>li>ul.sub").stop().slideDown();
    },function(){
        $("header nav ul.gnb>li>ul.sub").stop().slideUp();
    });


    var slideI = 0;

    setInterval(function(){
        if(slideI >= 3){
            slideI = 0;
        }
        $(".slide ul.slide_all>li").css({
            "top": (-300 * slideI) + "px",
          });
          
          slideI++;
    },3000);

});