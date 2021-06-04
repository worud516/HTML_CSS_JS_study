const options = {
    decimalPlaces: 2,
    useEasing: false,
    prefix: '$',
    suffix: '달러',
};

var demo = new CountUp('test', 10, 5000, 3, 3, options);
//new CountUp('id', 시작하는 숫자, 마지막 숫자, 소숫점 자리수, 실행되는 시간, countOptions);
var demo2 = new CountUp('test1', 10, 5000, 3, 3, options);
//new CountUp('id', 시작하는 숫자, 마지막 숫자, 소숫점 자리수, 실행되는 시간, countOptions);



$(document).ready(function () {

    $(".box").click(function () {
        demo.start();
    })

});

$(window).scroll(function () {

    var scrollTop = $(this).scrollTop();

    console.log(scrollTop);

    if (scrollTop >= 200) {
        demo2.start();
    }

})