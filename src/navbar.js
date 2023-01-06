$(window).on("scroll touchmove", function() {
    if ($(document).scrollTop() > 100 && !$("#navbar").hasClass("scrolled-navbar")) {
        $("#navbar").addClass("scrolled-navbar");
        console.log("xx");
    }
    if ($(document).scrollTop() < 100 && $("#navbar").hasClass("scrolled-navbar")) {
        $("#navbar").removeClass("scrolled-navbar");
        console.log("ee");
    }
})