$(document).ready(function(){

    $(".wrap > .leftbox > ul > li").hover(function(){
        $(this).children("ul").stop().slideDown();
    },function(){
        $(this).children("ul").stop().slideUp();
    });

    var num = 0;
    setInterval(function(){
        num++;
        if(num >= 3){
            num = 0;
        }
        $(".wrap > .lightbox > .slide > ul").css({
            "left": (-800 * num) + "px"
        });
    },3000);

});


