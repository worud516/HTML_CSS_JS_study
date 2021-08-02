$(document).ready(function(){


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



});