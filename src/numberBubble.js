$(document).ready(function() {
    var bubbles = document.getElementsByClassName(".number-bubble");
    var h = $(".number-bubble").height();
    var w = $(".number-bubble").width();
    var s = h;
    if (w > h) {
        s = w;
    }
    console.log(s);
    $(".number-bubble").width(s).height(s);
});