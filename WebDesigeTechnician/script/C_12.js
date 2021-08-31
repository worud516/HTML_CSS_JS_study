$(document).ready(function(){

    $(".wrap > .lbox > ul > li").hover(function(){
        $(this).children("ul").stop().slideDown();
    },function(){
        $(this).children("ul").stop().slideUp();
    });

});