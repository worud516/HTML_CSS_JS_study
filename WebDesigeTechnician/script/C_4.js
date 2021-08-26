$(document).ready(function(){

    $(".wrap > .leftbox > ul > li").hover(function(){
        $(this).children("ul").stop().slideDown();
    },function(){
        $(this).children("ul").stop().slideUp();
    });


    

});


