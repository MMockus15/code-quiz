// start button variables
var startScreen = document.querySelector("#starting-screen");
var startButton = document.querySelector("#start_button");
var timerElement = document.querySelector("#quizTimer");

// questions variables
var questionsContainer = document.getElementById("questions-screen");
var checkAnswer = document.getElementById("answer-check");
var answerChoiceDiv = document.querySelector(".answer-choices");
var questionTextDiv = document.querySelector(".question-text");

// submit score buttons
var currentScoreDiv = document.querySelector(".currentScore");
var initialsForm = document.querySelector(".initialsForm");
var initialsText = document.querySelector(".initialsText");


var timerCount = 60;
var index = 0;
var userScore = 0;
var scoreText;
var questionsIndexCounter = 0;


var quizQuestions = [
  {
    question: "What is NOT a JavaScript Data Type?",
    choices: ["String", "Object", "inIt", "Boolean"],
    answer: "inIt",
  },
  {
    question: "If x = 25 and y = 50, which is true?",
    choices: ["x = y", "x < y", "x > y ", "x++"],
    answer: "x < y",
  },
  {
    question: "An if / else statement is closed within:",
    choices: ["Curly brackets", "Square brackets", "Quotes", "Parentheses"],
    answer: "Parentheses",
  },
  {
    question: "The console.log is used for:",
    choices: ["Event Listeners", "debugging", "For Loops", "Datasets"],
    answer: "debugging",
  },
  {
    question: "What is an example of an eventListener triggering event?",
    choices: ["Array", "Button", "Dataset", "click"],
    answer: "click",
  },
  {
    question: "What are the types of popup boxes available in JavaScript?",
    choices: ["Alert", "Confirm", "Prompt", "All of the above"],
    answer: "All of the above",
  },
];

// click start button and starts game
startButton.addEventListener("click", startGame);

// start game function
function startGame() {
	startTimer();
}
var timerInterval
function startTimer() {
timerInterval = setInterval(function () {
    if (timerCount >= 0) {
      timerElement.textContent = timerCount + " seconds left";
      timerCount--;
    } else {
      clearInterval(timerInterval);
    }
  }, 1000);

  getNextQuestion();
}

function getNextQuestion() {
	// hides questions container after last question
	if (questionsIndexCounter === 6) {
		questionsContainer.classList.add("hidden");
		return
	};
	// hides start screen when start quiz is pressed
	if (startScreen.classList.includes !== "hidden") {
		startScreen.classList.add("hidden");
	}

	// clear out any old question choices
	questionsIndexCounter.textContent = "";
	
	// get current question object from array
	var currentQuestion = quizQuestions[questionsIndexCounter];
	
	// update title with current question
	var questionH3 = document.createElement("h3");
	questionH3.textContent = currentQuestion.question;
	questionTextDiv.innerHTML = "";
	questionTextDiv.appendChild(questionH3);
	
	// empties content of answer choice div
	answerChoiceDiv.innerHTML = "";

	// looping over answer choices and turning each one into a button
	for (var i = 0; i < currentQuestion.choices.length; i++) {
		
		// create new button for each choice
		var choice = currentQuestion.choices[i];
		var choiceBtn = document.createElement('button');
		choiceBtn.setAttribute('class', 'choice');
		choiceBtn.setAttribute('value', choice);
		
		choiceBtn.textContent = choice;
		
		// display on the page
		answerChoiceDiv.appendChild(choiceBtn);
	}
	
	currentScore ();
	handleUserAnswer(currentQuestion);
	questionsIndexCounter++;
};

function handleUserAnswer(currentQuestion) {
	
	// moving thru choice buttons and creating event listener for each one
	var choiceBtns = document.querySelectorAll(".choice");
	for (var i = 0; i < choiceBtns.length; i++) {
		choiceBtns[i].addEventListener("click", function (event) {

			if(questionsIndexCounter === quizQuestions.length){
			gameOver();
			}
			
			// if the text inside the button that was clicked is the right answer
			console.log(event.target.textContent);
			if (event.target.textContent === currentQuestion.answer) {
				// add to users score
				userScore += 10;
				console.log(userScore);
				currentScore();
				var correctEl = document.createElement("div");
				correctEl.textContent = "correct"
				checkAnswer.append(correctEl);
			
				
			} else {
				timerCount -= 10;
				var wrongEl = document.createElement("div");
				wrongEl.textContent = "wrong"
				checkAnswer.append(wrongEl);
				
			} 
			getNextQuestion();
			setTimeout(function(){
				checkAnswer.removeChild(wrongEl)
				

			},700)
			
		});
	}
}


function currentScore () {
	console.log(userScore);
	currentScoreDiv.textContent = "Score: " + userScore;
}

function gameOver () {
	clearInterval(timerInterval);
	timerElement.style.display = "none";
	startScreen.classList.add("hidden");
	if (initialsForm.classList.contains("hidden")) {
		initialsForm.classList.remove("hidden");
	  }
 }

function saveUserScores (event) {
	event.preventDefault();
	var finalScore = JSON.parse(window.localStorage.getItem("highScores")) || [];
	var inputInitials = initialsText.value
	
	var score = {
		initials:inputInitials,
		userScore,
	}
	finalScore.push(score);
	localStorage.setItem("highScores", JSON.stringify(finalScore));
	window.location = "highscores.html"
};

initialsForm.addEventListener("submit", saveUserScores);








