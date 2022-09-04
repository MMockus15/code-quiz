var startButton = document.querySelector(".start-button");
var timerElement = document.getElementById("#quizTimer");

var secondsLeft = 75;



// click start button and starts game
startButton.addEventListener ("click", function);

// start game function
function startGame () {
	// needs to bring you to #startingScreen
	// will use var startButton
	
}

function startTimer () {
	var timerInterval = setInterval(function() {
		if (timerCount >= 0) {
		timerElement.textContent = timerCount + "seconds left:";
		timerCount--;
		}
} else {
	clearInterval(timerInterval)
}
}, 1000);
}
	
	// starts timer when quiz start button is selected
	// when wrong answer take off 10 seconds
