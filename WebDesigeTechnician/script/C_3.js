$(document).ready(function(){


    $(".wrap > header > nav > ul > li").hover(function(){
        $(this).children("ul").stop().slideDown();
    },function(){
        $(this).children("ul").stop().slideUp();
    });


    var num = 0;

    setInterval(function(){
        num++
        if( num >= 3){
            num = 0;
        }
        $(".wrap > .rightbox > .slideall > ul").css({
            "left": (-800 * num) + "px"
        });


    },3000);



    $(".wrap > .rightbox > .contents > .gongi > ul > li").eq(0).click(function(){
        $(".modal").fadeIn();
    })
    $(".btn").click(function(){
        $(".modal").fadeOut();
    })

});