function closeResults() {
    $("#results").addClass("hidden");
}

function invalidInput() {
    var levels = ["#Level1", "#Level2", "#Level3", "#Level4"];
    var alerts = ["#L1Alert", "#L2Alert", "#L3Alert", "#L4Alert"];
    var foundEmpty = false;

    $.each(levels, function(id) {
        var value = $(levels[id]).val();
        if (isNaN(value) || value == "") {
            $(alerts[id]).removeClass("hidden");
            $(alerts[id]).addClass("block");
            $(levels[id]).removeClass("border-gray-300");
            $(levels[id]).addClass("border-red-600");
            foundEmpty = true;
        }
    })
    return foundEmpty;
}

function removeRedFromInputs() {
    var levels = ["#Level1", "#Level2", "#Level3", "#Level4"];
    var alerts = ["#L1Alert", "#L2Alert", "#L3Alert", "#L4Alert"];

    $.each(levels, function(id) {
        if ($(alerts[id]).hasClass("block")) {
            $(alerts[id]).removeClass("block");
            $(alerts[id]).addClass("hidden");
        }
        if ($(levels[id]).hasClass("border-red-600")) {
            $(levels[id]).removeClass("border-red-600");
            $(levels[id]).addClass("border-gray-300");
        }
    })
}

function putValueToInterval(value) {
    var newValue = value;
    if (value > 5)
        newValue = 5;
    if (value < 0)
        newValue = 0;

    return newValue;
}

function changeValueToPoints(v) {
    var value = putValueToInterval(v);
    return 6 - value;
}

function evaluateBonusL5() {
    var checkbox = document.getElementById("firstBlue");
    var checked = checkbox.checked;
    if (checked)
        return 2;
    else
        return 0;
}

function evaluateL5() {
    var picked = $('input[name="l5"]:checked').val();

    if (picked == "found")
        return 3;
    if (picked == "notfound")
        return 1;

    return 0;
}

function calculateResults() {
    if (invalidInput() == true)
        return;
    var l1 = changeValueToPoints(parseInt($("#Level1").val()));
    var l2 = changeValueToPoints(parseInt($("#Level2").val()));
    var l3 = changeValueToPoints(parseInt($("#Level3").val()));
    var l4 = changeValueToPoints(parseInt($("#Level4").val()));

    var resultL1to4 = l1 + l2 + l3 + l4;

    var l5 = evaluateL5();
    var l5Bonus = evaluateBonusL5();

    var result = resultL1to4 + l5 + l5Bonus;

    document.getElementById("score").innerHTML = result;

    removeRedFromInputs();
    $("#results").removeClass("hidden");
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateColors() {
    var colorUsage = [false, false, false, false];
    var colorDivs = ["red", "green", "blue", "yellow"];

    for(var i = 0; i < 4; i++) {
        var divElement = document.getElementById(colorDivs[i]);

        if (!divElement.classList.contains('hidden')) {
            divElement.classList.add('hidden');
        }
    }

    for(var i = 0; i < 3; i++) {
        var randomNum = getRandomInt(0, 3);
        while (colorUsage[randomNum]) {
            randomNum = getRandomInt(0, 3);
        }
        colorUsage[randomNum] = true;

        var divElement = document.getElementById(colorDivs[randomNum]);

        if (divElement.classList.contains('hidden')) {
            divElement.classList.remove('hidden');
        }
    }
    //console.log(colorUsage);
}