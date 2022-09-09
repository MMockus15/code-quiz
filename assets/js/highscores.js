// pulling up stored higscores list
// var highScores = document.querySelector("#highscoresList");
// query selector for clear scores
var clearScores = document.querySelector("#clear");
// query selector for go back
var goBack = document.querySelector("#goBack");
var initialsText = document.querySelector(".initialsText");


// FUNCTION(){
	// 	get the highscores or an empty array if no scores with let highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];
	// 	Then sort the scores using the .sort method
	// 	Next using a for loop to create a list <li> tags for each score
	// 	Finally displaying the list with a document.getElementById method and then .appendChild method for the <li> tags
	// 	}
	
	
	
	
	// retrieves all scores from local storage
	function getHighscores() {
	var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

	var inputInitials = initialsText.value

	getHighscores.sort(function(userScoreArray, inputInitials){return userScoreArray-inputInitials});

	for (i = 0; i < render.length; i++) {
		var eachScore = getItem("<li>")
		eachScore.text = userScoreArray[i]
		var renderEach = getItem("<ul>").append(eachScore);
	}

	document.querySelector(".highscores-list").empty();
	var userScoreArray = localStorage.getItem("highscores");
	console.log(userScoreArray);
	var render = JSON.parse(userScoreArray);


	document.getElementById
};



// event listener to clear score
clearScores.addEventListener("click", function() {
	localStorage.clear();
	location.reload();
});

// event listener click go back button
goBack.addEventListener("click", function () {
	window.location.replace("./index.html")
});


