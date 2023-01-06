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

function scrollToSection(section) {
    $('html').animate({
        scrollTop: $(section).offset().top - 2 * ($("#navbar").height())
    }, 100);
    $("#mobileMenu").addClass("hidden");
};

function openMenu() {
    if ($("#mobileMenu").hasClass("hidden"))
        $("#mobileMenu").removeClass("hidden");
}

function closeMenu() {
    $("#mobileMenu").addClass("hidden");
}

/*
$("#mobileMenu").click(function() {
    $("#mobileMenu").addClass("hidden");
});
*/