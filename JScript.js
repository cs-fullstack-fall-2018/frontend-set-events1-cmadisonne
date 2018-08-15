//STEP 1
//First we're going to assign button to a variable, the counter display
//to a variable. and create the function to run when the button is clicked.

var button1 = document.getElementById("FirstButton");
var counterDisplay = document.getElementById("counter");

button1.addEventListener("click", buttonClick);

function buttonClick() {
    counterDisplay.innerText = parseInt(counterDisplay.innerText) + 1;
}
//STEP 2
//Doing the same for player 2 button
var button2 = document.getElementById("SecondButton");
var counterDisplay2 = document.getElementById("counter2");

button2.addEventListener("click", buttonClick2);

function buttonClick2() {
    counterDisplay2.innerText = parseInt(counterDisplay2.innerText) + 1;
}

var resetButton = document.getElementById("ResetButton");
resetButton.addEventListener("click", reset);

function reset() {
    counterDisplay.innerText = 0;
    counterDisplay2.innerText = 0;
}

//EXTRA CREDIT

