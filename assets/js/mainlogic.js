// start button variables
var startScreen = document.querySelector("#starting-screen");
var startButton = document.querySelector(".button");
var timerElement = document.querySelector("#quizTimer");

// questions variables
var questionsContainer = document.getElementById("questions-screen");
var checkAnswer = document.getElementById("answer-check");
// var question = quizQuestions[index].question;
var answerChoiceDiv = document.querySelector(".answer-choices");
var questionTextDiv = document.querySelector(".question-text");


var timerCount = 60;
var index = 0;
var userScore = 0;
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
    answer: "Parenthesis",
  },
  {
    question: "The console.log is used for:",
    choices: ["Event Listeners", "Debugging", "For Loops", "Datasets"],
    answer: "debugging",
  },
  {
    question: "What is an example of an eventListener triggering event?",
    choices: ["Array", "Button", "Dataset", "Click"],
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

function startTimer() {
  var timerInterval = setInterval(function () {
    if (timerCount >= 0) {
      timerElement.textContent = timerCount + " seconds left";
      timerCount--;
    } else {
      clearInterval(timerInterval);
    }
  }, 1000);

  getQuestion();
}

function getQuestion() {
	// take current screen (start or a questions and hide it also display next screen)
	// if its the starting sceen thats visable we want it to take section class starting-screen and hide it 
	if (startScreen.classList.includes !== "hidden") {
		startScreen.classList.add("hidden");
	}

	// clear out any old question choices
	// questionsContainer.textContent = "";

	// get current question object from array
	var currentQuestion = quizQuestions[questionsIndexCounter];
  
	// update title with current question
	var questionH3 = document.createElement("h3");
	questionH3.textContent = currentQuestion.question;
	questionTextDiv.appendChild(questionH3);
  

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

	var choiceBtns = document.querySelectorAll(".choice");
	for (var i = 0; i < choiceBtns.length; i++) {
		choiceBtns[i].addEventListener("click", function (event) {
		// event listeners on our choicebtn elements - on click event listeners 
		// if the textContent of user sected choicebtn is the same as the answer value currentQuestion.answer	

		// if the text inside the button that was clicked is the right answer
			if (event.target.textContent === currentQuestion.answer) {
		// add to users score
		userScore = userScore + 10;
		localStorage.setItem("userScore", userScore);
		// alert user they were correct/ element appended to the dom/create element/<p>

		
		// hide currentQuestions text/remove child 
		
		questionTextDiv.removeChild(questionTextDiv.firstChild);
		
		while (questionTextDiv.hasChildNodes()) {
			questionTextDiv.removeChild(questionTextDiv.firstChild);
			// display next question
		}
		
		getQuestion();
		// else if the text inside the button clicked is the wrong answer
		} else {
			console.log("oops")
	

		while (questionTextDiv.hasChildNodes()) {
			questionTextDiv.removeChild(questionTextDiv.firstChild);
		}
		while (questionTextDiv.hasChildNodes()) {
			questionTextDiv.removeChild(questionTextDiv.firstChild);
		}
			// otherwise textContent of user-selected choice button is != currentQuestion
			// take away 10 seconds off the clock
			// timerCount = 
			// hide currentQuestions text 
			// display next question})
	
		}
		});
	}
	// what to do if youre on your last question, might have to put in a different function/ then it can go to scoreboard screen else loop back to game
	if (currentQuestion = quizQuestions[quizQuestions.length - 1]){
}
}









