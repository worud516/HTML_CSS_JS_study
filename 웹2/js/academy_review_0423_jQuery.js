// 문법은 주어.동사(목적어)
// 주어 자리에는 $("css언어")
// 동사 자리에는 매서드(함수)
// $("css언어").addClass("active")

$(document).ready(function () {
  // 상황 1번 박스를 클릭하면, 기능이 작동된다.
  // 그 기능은 콘솔창에 1이라고 써라.
  //   $(".box1").click(function(){
  //     console.log(1);
  //   });

  //   $(".box2").click(function(){
  //     console.log(2);
  //   });

  //   // 상황 1번 박스가 클릭되면 기능이 작동된다.
  //   $(".box1").click(function(){
  //     // 그 기능은 1번 박스의 색상이 분홍색이 된다.
  //     // 1번 박스에 active 라는 클래스를 추가해라.
  //     $(".box1").addClass("active");
  //   });

  //   // 상황 1번 박스가 클릭되면 기능이 작동된다.
  //   $(".box1").click(function(){
  //     // 그 기능은 1번 박스의 색상이 본래색이 된다.
  //     // 1번 박스에 active 라는 클래스를 제거해라.
  //     $(".box1").removeClass("active");
  //   });

  // 상황 1번 박스가 클릭되면, 기능이 작동된다.
  // 기능 박스의 색상이 누를때마다 변경된다.

  $(".box1").click(function () {
    if ($(".box1").hasClass("active") == false) {
      $(".box1").addClass("active");
    } else if ($(".box1").hasClass("active") == true) {
      $(".box1").removeClass("active");
    };
  });

  // $(".box1").click(function(){
  //   $(".box1").toggleClass("active");
  // });


  $(".box2").click(function () {
    if ($(".box2").hasClass("active") == false) {
      $(".box2").addClass("active");
    } else if ($(".box2").hasClass("active") == true) {
      $(".box2").removeClass("active");
    };
  });

  // $(".box2").click(function(){
  //   $(".box2").toggleClass("active");
  // });



  // 상황 박스 3번을 클릭하면 기능이 발생한다.

  $(".box3").click(function () {
    // 기능은 3번과 4번박스가 빨강색으로 변한다.
    // 박스 3번의 css중 background-color를 red로 바꾼다.
    // 박스 4번의 css중 background-color를 red로 바꾼다.

    // $(".box3").css({
    //   "background-color" : "red",
    // });
    // $(".box4").css({
    //   "background-color" : "red",
    // });


    // css 변경시에 .css 매서드 사용법
    // $(".box3").css({"변경하고하 하는 css이름" : "변경되어야 하는 값",});
    // css 확인시에 .css 매서드 사용법
    // $(".box3").css();

    var bColor = $(".box3").css("background-color");
    // console.log(bColor);

    // 만약에 박스 3번의 색상이 토마토 색상일때는 빨강색으로 변한다.
    // 만약에 박스 3번의 색상이 빨강색 일때는 토마토 색상으로 변한다.

    if (bColor == "rgb(255, 99, 71)") {
      $(".box3").css({
        "background-color": "red",
      });
      $(".box4").css({
        "background-color": "red",
      });
    } else if (bColor == "rgb(255, 0, 0)") {
      $(".box3").css({
        "background-color": "tomato",
      });
      $(".box4").css({
        "background-color": "tomato",
      });
    };
  });


  //상왕 박스 5번을 클릭하면 기능이 발생한다.
  // 그 기능은. 박스컨테이너의 색이 검정색이 된다.
  // 박스 컨테이너에 active 라는 클래스가 붙었다 떨어졌다 한다.
  $(".box-container").click(function () {
    $(".box-container").toggleClass("active");
  });

  // $(document).ready(function(){
  //   $(".box").click(function(){
  //     $(this).toggleClass("active");
  //   });
  // });


});