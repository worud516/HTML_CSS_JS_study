$(document).ready(function(){

        
    $("header>nav>ul>li").hover(function(){
        $(this).children("ul").stop().slideDown();
    },function(){
        $(this).children("ul").stop().slideUp();
    })
    


});