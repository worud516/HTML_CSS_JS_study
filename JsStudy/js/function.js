function hi() {
    document.write("hello" + "</br>")
}

function plus() {
    var x = 30;
    var y = 70;
    document.write(x + y + "</br>");
};

function plus2(x, y) {
    document.write(x + y + "</br>");
};


function gugudan(num) {
    for(i = 2; i<=num; i++){
        document.write(i + "단을 출력합니다." + "</br>");
        for(var j = 1; j <= 9; j++){
            document.write(i + " X " + j + " = " + i * j + "</br>");
        }
        document.write("</br>");
    }
}



hi()
plus();
plus2(10, 6);
gugudan(3);