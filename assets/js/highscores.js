// pulling up stored higscores list
var highScores = document.querySelector("#highscoresList");
// query selector for clear scores
var clearScores = document.querySelector("#clear");
// query selector for go back
var goBack = document.querySelector("#goBack");



// retrieves all scores from local storage
function renderHighscore() {
	$(".highscores-list").empty();
	var userScoreArray = localStorage.getItem("userScoresObject");
	console.log(userScoreArray);
	var render = JSON.parse(userScoreArray);

	for (i = 0; i < render.length; i++) {
		var eachScore = $("<li>")
		eachScore.text = userScoreArray[i]
		var renderEach = $("<ul>").append(eachScore);
	}
}

$(document).click("nav-link", function (e) {
	renderHighscore();
});


// event listener to clear score
clearScores.addEventListener("click", reset); {
	localStorage.clear();
	location.reload();
};

// event listener click go back button
goBack.addEventListener("click", function () {
	window.location.replace("./index.html")
});


