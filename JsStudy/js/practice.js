console.clear();
var x = 1;
var y = 1;

var dan = 2;
var z = 3;

console.log(dan + "단")
console.log(dan + " X " + 1 + " = " + dan * 1)
console.log(dan + " X " + 2 + " = " + dan * 2)
console.log(dan + " X " + 3 + " = " + dan * 3)
console.log(dan + " X " + 4 + " = " + dan * 4)
console.log(dan + " X " + 5 + " = " + dan * 5)
console.log(dan + " X " + 6 + " = " + dan * 6)
console.log(dan + " X " + 7 + " = " + dan * 7)
console.log(dan + " X " + 8 + " = " + dan * 8)
console.log(dan + " X " + 9 + " = " + dan * 9)


document.write(dan + "단" + "<br>")
document.write(dan + " X " + 1 + " = " + dan * 1 + "<br>")
document.write(dan + " X " + 2 + " = " + dan * 2 + "<br>")
document.write(dan + " X " + 3 + " = " + dan * 3 + "<br>")
document.write(dan + " X " + 4 + " = " + dan * 4 + "<br>")
document.write(dan + " X " + 5 + " = " + dan * 5 + "<br>")
document.write(dan + " X " + 6 + " = " + dan * 6 + "<br>")
document.write(dan + " X " + 7 + " = " + dan * 7 + "<br>")
document.write(dan + " X " + 8 + " = " + dan * 8 + "<br>")
document.write(dan + " X " + 9 + " = " + dan * 9 + "<br>")


var num = prompt("1부터 입력하신 숫자까지의 홀수의 합을 구합니다.");
var i = 0;
var j = 0;

for (i = 1; i<=num; i++) {
    if(i%2==1){
        j += i;
    }
}

alert("1부터 " + num + "까지의 홀수의 합은 " + j + "입니다.");