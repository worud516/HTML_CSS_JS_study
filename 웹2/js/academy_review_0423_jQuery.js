// 문법은 주어.동사(목적어)
// 주어 자리에는 $("css언어")
// 동사 자리에는 매서드(함수)
// $("css언어").addClass("active")

$(document).ready(function(){
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
    
    $(".box1").click(function(){
      if( $(".box1").hasClass("active") == false ){
        $(".box1").addClass("active");
      }else if($(".box1").hasClass("active") == true){
        $(".box1").removeClass("active");
      };
    });
    
    // $(".box1").click(function(){
    //   $(".box1").toggleClass("active");
    // });
    
    
    $(".box2").click(function(){
      if($(".box2").hasClass("active") == false ){
        $(".box2").addClass("active");
      } else if ($(".box2").hasClass("active") == true ){
        $(".box2").removeClass("active");
      };
    });
    
    // $(".box2").click(function(){
    //   $(".box2").toggleClass("active");
    // });
    
  });
  