$(document).ready(function () {

    var mySVG = $('.test').drawsvg({
        duration: 1000, // 한글자 그려지는 시간
        stagger: 1000, // 다음 글자 그려지는 순서
        eading: 'swing', // css ease-in out
        reverse: false // 그려지는 순서 true / false
    });
    mySVG.drawsvg('animate');

    var mySVG = $('.test2').drawsvg({
        duration: 1000, // 한글자 그려지는 시간
        stagger: 1000, // 다음 글자 그려지는 순서
        eading: 'swing', // css ease-in out
        reverse: false // 그려지는 순서 true / false
    });
    mySVG.drawsvg('animate');

    var $svg = $('svg').drawsvg({
        duration: 1000, // 한글자 그려지는 시간
        stagger: 1000, // 다음 글자 그려지는 순서
        easing: 'swing', // css ease-in out 등등 속성ㅇ
        reverse: false, //그려지는 순서 true / false
    })
    $svg.drawsvg('animate');
});