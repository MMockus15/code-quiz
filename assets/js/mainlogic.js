// start button variables
var startScreen = document.querySelector("#starting-screen");
var startButton = document.querySelector(".button");
var timerElement = document.querySelector("#quizTimer");

// questions variables
var questionsContainer = document.getElementById("questions-screen");
var checkAnswer = document.getElementById("answer-check");
// var question = quizQuestions[index].question;
var choiceA = document.getElementById("button-0");
var choiceB = document.getElementById("button-1");
var choiceC = document.getElementById("button-2");
var choiceD = document.getElementById("button-3");
var answerCheck = document.getElementById("answer-check");
var questionsUl = document.getElementById("questionsUl");
var choicesButtons = document.querySelectorAll(".choicesButtons");

var timerCount = 75;
var index = 0;
var totalScore = 0;
var score = 0;
var quizQuestionsEmpty = 0;

// click start button and starts game
startButton.addEventListener("click", startGame);

// start game function
function startGame() {
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
	
	questionsStarting();
	// render(quetionsUl);
}

function questionsStarting() {
	// first get current question object from array
	var questionsContainer = quizQuestions[quizQuestionsEmpty];
	// update title with current question
	
	var questionsUl = document.getElementById("questionsUl");

	var 
	
	questionsUl.textContent = questionsContainer.title;
	// clear out any old question choices 
	quizQuestions.innerHTML = "";
	
	// for loop thru questions
	for (var i = 0; i < questionsContainer.choices.length; i++) {
		
		// create a button for each choice
		var choice = quizQuestions.choices[i];
		var answersBtns = document.createElement('button');
		answersBtns.textContent = i + 1 + ". " + choice;
		answersBtns.setAttribute('value', questionsContainer.options[i]);
		// answersBtns.setAttribute('class', 'choice')
		
		// checks answer on click - need to set up function for choicesButtons
		choicesButtons.eventListener("click", answerCheck);
		
		// display on the page
		quizQuestions.appendChild(answersBtns);
	}
	questionsContainer.append(answersBtns, questionsUl);
}



// starts timer when quiz start button is selected
// when wrong answer take off 10 seconds
// question++;

