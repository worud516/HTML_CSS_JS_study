// 예시
// 함수 정의하기
function hi(){  
    document.write("안녕하세요" + "</br>");
  };
  
  // 함수 실행하기
  hi();
  
  function plus(){
    var x = 10;
    var y = 15;
    document.write(x + y + "</br>");
  };
  plus();
  
  //매개변수를 이용한 함수
  
  function plus2(x,y){
    document.write(x + y + "</br>");
  };
  
  plus2(10,6);
  
  var z = 2;
  
  function gugu(){
    document.write(z + "단" + "</br>");
    document.write(z + " X " + 1 + " = " + z * 1 + "</br>");
    document.write(z + " X " + 2 + " = " + z * 2 + "</br>");
    document.write(z + " X " + 3 + " = " + z * 3 + "</br>");
    document.write(z + " X " + 4 + " = " + z * 4 + "</br>");
    document.write(z + " X " + 5 + " = " + z * 5 + "</br>");
    document.write(z + " X " + 6 + " = " + z * 6 + "</br>");
    document.write(z + " X " + 7 + " = " + z * 7 + "</br>");
    document.write(z + " X " + 8 + " = " + z * 8 + "</br>");
    document.write(z + " X " + 9 + " = " + z * 9 + "</br>");
  }
  
  gugu();
  
  z = 3;
  
  gugu();
  
  
  function gugu2(c){
    document.write(c + "단" + "</br>");
    document.write(c + " X " + 1 + " = " + c * 1 + "</br>");
    document.write(c + " X " + 2 + " = " + c * 2 + "</br>");
    document.write(c + " X " + 3 + " = " + c * 3 + "</br>");
    document.write(c + " X " + 4 + " = " + c * 4 + "</br>");
    document.write(c + " X " + 5 + " = " + c * 5 + "</br>");
    document.write(c + " X " + 6 + " = " + c * 6 + "</br>");
    document.write(c + " X " + 7 + " = " + c * 7 + "</br>");
    document.write(c + " X " + 8 + " = " + c * 8 + "</br>");
    document.write(c + " X " + 9 + " = " + c * 9 + "</br>");
  }
  
  gugu2(2);
  gugu2(3);
  gugu2(4);
  gugu2(5);
  gugu2(6);
  