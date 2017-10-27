$(function() {
    //smooth scrolling
    $(".js--scroll-to-portfolio").click(function() {
        $("html, body").animate({scrollTop: $(".js--portfolio").offset().top - 40}, 1000);
    });
    $(".js--scroll-home").click(function() {
        $("html, body").animate({scrollTop: $(".js--home").offset().top}, 1000);
    });
});