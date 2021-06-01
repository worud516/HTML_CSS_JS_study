$(document).ready(function () {


    // 스크롤 매직, 컨트롤러
    var controller = new ScrollMagic.Controller();

    // 적용해야하는 애니메이션
    var tween2 = TweenMax.to('.section02 > .move-box', 1, {
        x: "150%", //transform: translateX 의 줄임말
        rotation: 180,
        //background-color 같이 '-'가 들어갈경우에는 낙타 표기법으로 써준다 (backgroundColor)
    });

    // 스크롤매직 씬 생성
    var scene2 = new ScrollMagic.Scene({
            triggerElement: ".section02",
            triggerHook: 0.7, //0~1 ,
            offset: 0,
            duration: "100%",
        })

        .setTween(tween2) // 애니메이션 등록
        .addTo(controller) // 컨트롤러 등록
        .addIndicators({ // 트리거 인디케이터 이름지정 및 등록
            name: "첫번째"
        });

    var tween3 = TweenMax.to('.section03 > .move-box', 1, {
        x: "-150%",
        rotation: 180,
        opacity: 1
    });

    var scene3 = new ScrollMagic.Scene({
            triggerElement: ".section03",
            triggerHook: 0.5,
            // offset: -100,
            duration: "80%",
        })
        .setTween(tween3)
        .addTo(controller)
        .addIndicators({
            name: "3"
        });


    var tween4 = TweenMax.to('.section04 > .move-box', 1, {
        x: "-150%",
        rotation: 180,
        background: "red",
    });

    var scene4 = new ScrollMagic.Scene({
            triggerElement: ".section04",
            triggerHook: 0.5,
            // offset: -100,
            duration: "50%",
        })
        .setTween(tween4)
        .addTo(controller)
        .addIndicators({
            name: "4"
        });
});