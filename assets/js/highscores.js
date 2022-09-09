// pulling up stored higscores list
var highScores = document.querySelector("#highscoresList");
// query selector for clear scores
var clearScores = document.querySelector("#clear");
// query selector for go back
var goBack = document.querySelector("#goBack");



// retrieves all scores from local storage
function renderHighscore() {
	document.querySelector(".highscores-list").empty();
	var userScoreArray = localStorage.getItem("highscores");
	console.log(userScoreArray);
	var render = JSON.parse(userScoreArray);

	for (i = 0; i < render.length; i++) {
		var eachScore = getItem("<li>")
		eachScore.text = userScoreArray[i]
		var renderEach = getItem("<ul>").append(eachScore);
	}
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


