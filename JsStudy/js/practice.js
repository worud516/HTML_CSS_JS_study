
var num = prompt("1부터 입력하신 숫자까지의 홀수의 합을 구합니다.");
var i = 0;
var j = 0;

for (i = 1; i<=num; i++) {
    if(i%2==1){
        j += i;
    }
}

alert("1부터 " + num + "까지의 홀수의 합은 " + j + "입니다.");