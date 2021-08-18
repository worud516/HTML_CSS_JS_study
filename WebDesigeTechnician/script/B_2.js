$(document).ready(function(){

    $("header nav>ul>li").hover(function(){
        $("header nav>ul>li>ul").stop().slideDown();
        $(".navbg").stop().slideDown(); 
    },function(){
        $("header nav>ul>li>ul").stop().slideUp();
        $(".navbg").stop().slideUp();
    })
    

});