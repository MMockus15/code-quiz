var startScreen = document.querySelector("#starting-screen");
var startButton = document.querySelector(".button");
var timerElement = document.querySelector("#quizTimer");


var timerCount = 75;
var index = 0;
var question = document.querySelectorAll(".choiceButtons");
var totalScore = 0;
var score = 0;
var quizQuestions = 0;




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
	}, 1000);

	render(quetionsUl);
}

function render(questionsUl) {
	
	
	// for loop thru questions
	question++;
	
	for (var i = 0; i < question.length; i++) {
	  question[i].setAttribute("style", "color: purple; font-size: 30px;");
	}
}
	// starts timer when quiz start button is selected
	// when wrong answer take off 10 seconds
