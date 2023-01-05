$(window).on("scroll touchmove", function() {
    if ($(document).scrollTop() > 100 && !$("#navbar").hasClass("bg-mainBlue")) {
        $("#navbar").addClass("bg-mainBlue");
        console.log("xx");
    }
    if ($(document).scrollTop() < 100 && $("#navbar").hasClass("bg-mainBlue")) {
        $("#navbar").removeClass("bg-mainBlue");
        console.log("ee");
    }
})