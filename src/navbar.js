$(window).on("scroll touchmove", function() {
    if ($(document).scrollTop() > 100 && $("#navbar").hasClass("not-scrolled-navbar")) {
        $("#navbar").removeClass("not-scrolled-navbar");
        $("#navbar").addClass("scrolled-navbar");
        console.log("xx");
    }
    if ($(document).scrollTop() < 100 && $("#navbar").hasClass("scrolled-navbar")) {
        $("#navbar").removeClass("scrolled-navbar");
        $("#navbar").addClass("not-scrolled-navbar");
        console.log("ee");
    }
})