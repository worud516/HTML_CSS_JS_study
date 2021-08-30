$(document).ready(function(){

    $(".wrap > header > ul > li").hover(function(){
        $(".navbg").stop().slideDown();
        $(".wrap > header > ul > li > ul").stop().slideDown();
    },function(){
        $(".navbg").stop().slideUp();
        $(".wrap > header > ul > li > ul").stop().slideUp();
    });


});