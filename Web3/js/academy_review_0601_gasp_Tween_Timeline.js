$(document).ready(function () {

    $(".box1").click(function () {

        // gsap.from(".box1", {rotation: 27, y: 100, backgroundColor : "blue" , borderRadius : "50", duration: 1});

        var test = gsap.timeline({
            repeat: 2,
            repeatDelay: 1,
            yoyo: true
        });
        test.to(".box1", {
            x: 100,
            y: 50,
            duration: 1
        });
        test.to(".box1", {
            backgroundColor: "blue",
            duration: 2
        });
        test.to(".box1", {
            borderRadius: "50px",
            duration: 1
        });

    });

});