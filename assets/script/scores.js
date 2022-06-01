var displayHighScore = function () {
  // get score from local storage
  var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

  highscores.sort(function (a, b) {
    return b.score - a.score;
  });

  highscores.forEach(function (score) {
    //create li tags for each high score
    var liTag = document.createElement("li");
    liTag.textContent = score.initials + " - " + score.score;

    // display high score
    var olEl = document.getElementById("highscores");
    olEl.appendChild(liTag);
  });
};

//call function when page is loaded
displayHighScore();
