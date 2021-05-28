$(document).ready(function () {
    $('.fullpage').fullpage({
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: [
            'firstSlide',
            'secondSlide',
            'test',
            'slide4'
        ],
        onLeave: function (origin, destination, direction) {
            var leavingSection = this;

            //구역 2를 떠난 후
            //if(origin.index == 1 && direction =='down'){

            $(".fullpage > .section04 .box").removeClass("active");

            if (destination.index == 0) {
                alert("섹션 1 입니다.");
            } else if (destination.index == 1) {
                alert("섹션 2 입니다.");
            } else if (destination.index == 2) {
                alert("섹션 3 입니다.");
            } else if (destination.index == 3) {
                alert("섹션 4 입니다.");
                $(".fullpage > .section04 .box").addClass("active");
            } else if (destination.index == 4) {
                alert("footer 입니다.");
            }
        }
    });

});
