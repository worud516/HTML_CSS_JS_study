$(document).ready(function () {

    $(".box1").click(function () {

        gsap.from(".box1", {
            rotation: 27,
            y: 100,
            backgroundColor: "blue",
            borderRadius: "50",
            duration: 1
        });

    });

});