$(window).scroll(function () {
    $("section").css("background-position","0px " + ( -100 + $(this).scrollTop()/2) + "px");
});
