// start button variables
var startScreen = document.querySelector("#starting-screen");
var startButton = document.querySelector("#start_button");
var timerElement = document.querySelector("#quizTimer");

// questions variables
var questionsContainer = document.getElementById("questions-screen");
var checkAnswer = document.getElementById("answer-check");

// var question = quizQuestions[index].question;
var answerChoiceDiv = document.querySelector(".answer-choices");
var questionTextDiv = document.querySelector(".question-text");

// submit score buttons
// var submitScoreBtn = document.querySelector('#submitBtn');
var currentScoreDiv = document.querySelector(".currentScore");
var initialsForm = document.querySelector(".initialsForm");
var initialsText = document.querySelector(".initialsText");




var timerCount = 60;
var index = 0;
var userScore = 0;
var scoreText;
var questionsIndexCounter = 0;
var finalScore= [];

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
				alert("Correct");
				
				// hide currentQuestions text/remove child
				questionTextDiv.removeChild(questionTextDiv.firstChild);
				while (questionTextDiv.hasChildNodes()) {
					questionTextDiv.removeChild(questionTextDiv.firstChild);
				}
				// display next question
				if ((currentQuestion = quizQuestions[quizQuestions.length - 1])) {
				}
				
			} else {
				timerCount -= 10;
				alert("Wrong");
				
			} 
			getNextQuestion();
		});
	}
}



function currentScore () {
	console.log(userScore);
	currentScoreDiv.textContent = "Score: " + userScore;
	localStorage.setItem
	("userScore", userScore);
}

function gameOver () {
	clearInterval(timerInterval);
	timerElement.style.display = "none";
	startScreen.classList.add("hidden");
	if (initialsForm.classList.contains("hidden")) {
		initialsForm.classList.remove("hidden");
	  }
 }

document.querySelector("#submitButton").addEventListener("click", saveUserScores)

function saveUserScores (event) {
	event.preventDefault();
	var inputInitials = initialsText.value
	console.log(inputInitials, finalScore)
	
	window.location = "highscores.html"
	
	
	// So first before we save, we need to check if highscores already exist in local storage.  If they do not exist , we will make a variable for the score as an empty array.
	var finalScore= [];
	// The user’s score will need to be saved to an object that will have their initials, and their score.
	var saveScores = localStorage.setItem("highscores",(finalScore, inputInitials));

	// What we will be doing then is setting a variable equal to the empty or filled array we get from localstorage.getitem(highscores)
	var getScores = finalScore;
	// Then we will be pushing the object that has the initials and the score to this variable so that it gets added to the array as a new object.
	getScores = saveScores
	// Then we take that variable and do localStorage.setItem(“highscores”, variable).
	// It will overwrite our local storage, but the old information will be preserved.

	// local storage . get item turn onto a string stringify jason . parse put inputvalue - navigate to highscores page 
	// localStorage.getItem.("stringify.JSON.parse");
};

// form.addEventListener("submit", saveUserScores);








