$(window).scroll(function () {
    $("section").css("background-position","0px " + ( -50 + $(this).scrollTop()/5) + "px");
});
