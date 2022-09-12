// pulling up stored higscores list
var highScoresEl = document.querySelector(".highscoresList");
// query selector for clear scores
var clearScores = document.querySelector("#clear");
// query selector for go back
var goBack = document.querySelector("#goBack");
var initialsText = document.querySelector(".initialsText");

	
	// retrieves all scores from local storage
	function getHighscores() {
	var highscores = JSON.parse(window.localStorage.getItem("highScores")) || [];

	for (i = 0; i < highscores.length; i++) {
		var liEl = document.createElement("li")
		liEl.textContent = `${highscores[i].initials}, ${highscores[i].userScore}`
		highScoresEl.append(liEl);
	}
};

getHighscores();

// event listener to clear score
clearScores.addEventListener("click", function() {
	localStorage.clear();
	location.reload();
});

// event listener click go back button
goBack.addEventListener("click", function () {
	window.location.replace("./index.html")
});


