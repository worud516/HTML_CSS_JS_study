console.clear();

var i = 2;
var j = 0;

for(i=2; i<10; i++){
    console.log(i + "단")
    for(j=1; j<10; j++){
        console.log(i + " X " + j + " = " + i * j)
    }
}

for(i=2; i<10; i++){
    document.write(i + "단" + "<br>")
    for(j=1; j<10; j++){
        document.write(i + " X " + j + " = " + i * j + "<br>")
    }
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