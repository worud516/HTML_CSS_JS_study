console.clear();
var x = 1;
var y = 1;

var dan = 2;
var z = 3;


console.log(dan + "단")
var i = 0;
for(i=1; i<10; i++){
    console.log(dan + " X " + i + " = " + dan * i)
}


document.write(dan + "단" + "<br>")
for(i=1; i<10; i++){
    document.write(dan + " X " + i + " = " + dan * i + "<br>")
}


var num = prompt("1부터 입력하신 숫자까지의 홀수의 합을 구합니다.");
var i = 0;
var j = 0;

for (i = 1; i<=num; i++) {
    if(i%2==1){
        j += i;
    }
}

alert("1부터 " + num + "까지의 홀수의 합은 " + j + "입니다.");