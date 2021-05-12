$(document).ready(function () {

    // click(함수) - 클릭 했을때 발생하는 이벤트
    // mouseover(함수) - 마우스를 올렸을때 발생하는 이벤트
    // mouseleave(함수) - 마우스가 나갓을때 발생하는 이벤트

    // 클릭이벤트
    $(".box").click(function(){
      $(this).toggleClass("active");
    });

    // 마우스오버
      $(".box").mouseover(function(){
        $(this).addClass("active");
      });

    // 마우스리브
    $(".box").mouseleave(function(){
      $(this).removeClass("active");
    });

    // hover
    $(".box").hover(function(){
      $(this).addClass("active");
    } , function(){
      $(this).removeClass("active");    
    });





});