// function gugu(z){
//   document.write(z + "단" + "</br>");
//   document.write(z + " X " + 1 + " = " + z * 1 + "</br>");
//   document.write(z + " X " + 2 + " = " + z * 2 + "</br>");
//   document.write(z + " X " + 3 + " = " + z * 3 + "</br>");
//   document.write(z + " X " + 4 + " = " + z * 4 + "</br>");
//   document.write(z + " X " + 5 + " = " + z * 5 + "</br>");
//   document.write(z + " X " + 6 + " = " + z * 6 + "</br>");
//   document.write(z + " X " + 7 + " = " + z * 7 + "</br>");
//   document.write(z + " X " + 8 + " = " + z * 8 + "</br>");
//   document.write(z + " X " + 9 + " = " + z * 9 + "</br>");  
// }

// gugu(2);
// gugu(3);
// gugu(4);
// gugu(5);
// gugu(6);
// gugu(7);
// gugu(8);
// gugu(9);

document.write("<br><br>반복문으로 출력<br><br>");

console.clear;

for(var i = 2; i < 10; i++){
  document.write(i + "단<br>");
  for(var j = 1; j < 10; j++){
    document.write(i + " X " + j + " = " + i * j + "</br>");
  };
};