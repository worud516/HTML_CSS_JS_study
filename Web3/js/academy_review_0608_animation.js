$(document).ready(function(){

    $(".section-wrap > .animation-wrap > .animation-content > .animation-content-list>.img-box").mouseover(function(){
        $(".section-wrap > .animation-wrap > .animation-content").addClass("animation-paused");

        var test = $(this).attr("data-bg-num");

        $(".section-wrap").addClass(test);

    });

    $(".section-wrap > .animation-wrap > .animation-content > .animation-content-list>.img-box").mouseleave(function(){
        $(".section-wrap > .animation-wrap > .animation-content").removeClass("animation-paused");

        var test = $(this).attr("data-bg-num");

        $(".section-wrap").removeClass(test);
    });



});

