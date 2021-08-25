$(document).ready(function(){

    $("h2.hgon").click(function(){
        $(".conbox > .tab > .gal").css({
            "display": "none"
        });
        $(".conbox > .tab > .gon").css({
            "display": "block"
        });
    });
    $("h2.hgal").click(function(){
        $(".conbox > .tab > .gon").css({
            "display": "none"
        });
        $(".conbox > .tab > .gal").css({
            "display": "block"
        });
    });
});