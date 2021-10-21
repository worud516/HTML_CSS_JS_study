var x = 1;
var y = 1;

while(x < 10){
  
    document.write(x + "단" + "</br>");  
  
  while(y < 10){
    
    document.write(x + " X " + y + " = " + x * y + "</br>");  
    
    y++;
  }
  
  y = 1;
  
  x++;
}