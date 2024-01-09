
function startpage() {
    document.getElementById("main-b0x").style.visibility = "visible";
    document.getElementById("gameplay").style.visibility = "hidden";
    document.getElementById("info-b0x").style.visibility = "hidden";
}
function cross() { // rule box closer
    // document.getElementById("clos").innerHTML = "";
    document.getElementById("clos").style.visibility = "hidden";

}
function rule() {
    document.getElementsByClassName("rule-container")[0].style.visibility = "visible";

}

function start() {//start box closer
    //document.getElementById("main-b0x").innerHTML = "";
    document.getElementById("main-b0x").style.visibility = "hidden";
    document.getElementById("gameplay").style.visibility = "visible";
    document.getElementById("info-b0x").style.visibility = "visible";
}
function scoreboard() {
    document.getElementById("score-vis").style.visibility = "visible";
}
function cross2() {
    document.getElementById("score-vis").style.visibility = "hidden";
}

let score = 0;
let draw = 0;
let win = 0;
let loose = 0;

const choises = ["rock", "paper", "scissor"];

function rock() {
    let number = Math.floor(Math.random() *3);
    let fix=number.toFixed(0);
let compchoise=choises[fix];
    if (compchoise == "scissor") {
        win = win + 1;
        document.getElementById("won-score").innerHTML = win;
        document.getElementById("happenning").innerHTML = "won";
    }
    else if (compchoise == "paper") {
        loose = loose + 1;
        document.getElementById("lost-score").innerHTML = loose;
        document.getElementById("happenning").innerHTML = "lost";

    }
    else  {
        draw = draw + 1;
        document.getElementById("drawn-score").innerHTML = draw;
        document.getElementById("happenning").innerHTML = "drawn";
    }
}

function paper() {
    let number = Math.floor(Math.random() * 3);
        let fix=number.toFixed(0);
let compchoise=choises[fix];
    if (compchoise == "rock") {
        win = win + 1;
        document.getElementById("wii").innerHTML = win;
        document.getElementById("happenning").innerHTML = "won";

    }
    else if (compchoise == "scissor") {
        loose = loose + 1;
        document.getElementById("lost-score").innerHTML = loose;
        document.getElementById("happenning").innerHTML = "lost";
    }
    else  {
        draw = draw + 1;
        document.getElementById("drawn-score").innerHTML = draw;
        document.getElementById("happenning").innerHTML = "drawn";
    }
}

function scissor() {
    let number = Math.floor(Math.random() * 3);
        let fix=number.toFixed(0);
let compchoise=choises[fix];
    if (compchoise == "paper") {
        win = win + 1;
        document.getElementById("wii").innerHTML = win;
        document.getElementById("happenning").innerHTML = "won";

    }
    else if (compchoise == "rock") {
        loose = loose + 1;
        document.getElementById("lost-score").innerHTML = loose;
        document.getElementById("happenning").innerHTML = "lost";
    }
    else {
        draw = draw + 1;
        document.getElementById("drawn-score").innerHTML = draw;
        document.getElementById("happenning").innerHTML = "drawn";
    }
}
