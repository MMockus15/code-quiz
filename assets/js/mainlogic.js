// start button variables
var startScreen = document.querySelector("#starting-screen");
var startButton = document.querySelector(".button");
var timerElement = document.querySelector("#quizTimer");

// questions variables
var questionsContainer = document.getElementById("questions-screen");
var checkAnswer = document.getElementById("answer-check");
// var question = quizQuestions[index].question;
var questionsUl = document.getElementById("questionsUl");
var choicesButtons = document.querySelectorAll(".choicesButtons");

var timerCount = 60;
var index = 0;
var totalScore = 0;
var score = 0;
var quizQuestionsEmpty = 0;

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
	// get current question object from array
	var currentQuestion = quizQuestions[quizQuestionsEmpty];
  
	// update title with current question
	var titleEl = document.getElementById('questionsUl');
	titleEl.textContent = currentQuestion.title;
  
	console.log(questionsContainer);
	// clear out any old question choices
	questionsContainer.innerHTML = '';
  
	// loop over choices
	for (var i = 0; i < currentQuestion.choices.length; i++) {
	  // create new button for each choice
	  var choice = currentQuestion.choices[i];
	  var choiceNode = document.createElement('button');
	  choiceNode.setAttribute('class', 'choice');
	  choiceNode.setAttribute('value', choice);
  
	  choiceNode.textContent = i + 1 + '. ' + choice;
  
	  // display on the page
	  questionsContainer.appendChild(choiceNode);
	}
};

// function being tied to event listener checking clicked answer
function results(e) {
	if (e.target.value !== quizQuestions[quizQuestionsEmpty].answer) {
		timerCount -= 10;
		timerElement.textContent = timerCount;
	}

	// increase quetions index by 1
	quizQuestionsEmpty++;

	// if we have more questions to ask / if no more questions game is over 
	if (time === 0 || quizQuestionsEmpty === quizQuestions.length) {
		quizOver();
	} else {
		displayQuestion()
	}
};







