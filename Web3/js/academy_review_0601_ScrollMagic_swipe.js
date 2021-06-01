$(document).ready(function () {

    // 스크롤 매직, 컨트롤러
    var controller = new ScrollMagic.Controller();

    // 스크롤매직 씬 생성
    var scene1 = new ScrollMagic.Scene({
            triggerElement: ".green",
            triggerHook: 0, //0~1 ,
            duration: "100%"
        })
        .setPin(".green", {
            pushFollowers: false
        })
        .addTo(controller) // 컨트롤러 등록
        .addIndicators({ // 트리거 인디케이터 이름지정 및 등록
            name: "첫번째"
        });

    var scene1 = new ScrollMagic.Scene({
            triggerElement: ".purple",
            triggerHook: 0, //0~1 ,
            duration: "200%"

        })
        .setPin(".purple", {
            pushFollowers: false
        })
        .addTo(controller) // 컨트롤러 등록
        .addIndicators({ // 트리거 인디케이터 이름지정 및 등록
            name: "첫번째"
        });
    var scene1 = new ScrollMagic.Scene({
            triggerElement: ".gray",
            triggerHook: 0, //0~1 ,
            duration: "80%"

        })
        .setPin(".gray", {
            pushFollowers: false
        })
        .addTo(controller) // 컨트롤러 등록
        .addIndicators({ // 트리거 인디케이터 이름지정 및 등록
            name: "첫번째"
        });
    var scene1 = new ScrollMagic.Scene({
            triggerElement: ".orange",
            triggerHook: 0, //0~1 ,
            duration: "200%"

        })
        .setPin(".orange", {
            pushFollowers: false
        })
        .addTo(controller) // 컨트롤러 등록
        .addIndicators({ // 트리거 인디케이터 이름지정 및 등록
            name: "orange"
        });
});