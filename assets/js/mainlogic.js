var startScreen = document.querySelector("#starting-screen");
var startButton = document.querySelector(".button");
var timerElement = document.querySelector("#quizTimer");


var timerCount = 75;




// click start button and starts game
startButton.addEventListener("click", startGame);

// start game function
function startGame () {
	startTimer();
}

function startTimer() {
	var timerInterval = setInterval(function () {
	  if (timerCount >= 0) {
		timerElement.textContent = timerCount + " seconds left";
		timerCount--;
	  } else {
		clearInterval(timerInterval);
	  }
	}, 1000); }


	// starts timer when quiz start button is selected
	// when wrong answer take off 10 seconds
