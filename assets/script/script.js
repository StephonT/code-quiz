// Variables to keep track of the quiz
var currentQuizDataIndex = 0;
var time = questions.length * 15;
var timerId;
var time = 75;

// Variables I defined to help the code run
var choicesEl = document.getElementById("choices");
var questionsEl = document.getElementById("questions");
var quizData = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    title: "Arrays in JavaScript can be used to store ____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    title:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes",
  },
  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log",
  },
];

var timerEl = document.getElementById("time");
var startButtonEl = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");
var submitButton = document.getElementById("submit");

// =======================START FUNCTIONS==========================

// 1. STARTING THE QUIZ
var quizStart = function () {
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide"); // Hide the start screen

  // Reveal Questions
  questionsEl.removeAttribute("class");

  //add start timer function here
  timerId = setInterval(clockCountDown, 1000);

  //show starting time
  timerEl.textContent = time;

  loadQuiz();
};

var loadQuiz = function () {
  // get current question object from array
  var currentQuizData = quizData[currentQuizDataIndex];

  // update title with current question
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuizData.title;

  // Removes choices after correct answer is chosen
  choicesEl.innerHTML = "";

  // Display choices on page and cycle through them
  currentQuizData.choices.forEach(function (choice, i) {
    // create new button for each choice
    var choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("class", "choice");
    choiceBtn.setAttribute("value", choice);

    // add function when choice button is clicked on
    choiceBtn.addEventListener("click", answerClick);

    choiceBtn.textContent = i + 1 + ". " + choice;

    //display on the page
    choicesEl.appendChild(choiceBtn);
  });
};

var clockCountDown = function () {
  //update time
  time--;
  timerEl.textContent = time;

  // check if user ran out of time
  if (time <= 0) {
    quizEnd();
  }
};

var answerClick = function () {
  // Penalize user if the answer is wrong
  if (this.value !== quizData[currentQuizDataIndex].answer) {
    // penalty
    time -= 10;

    // so clock won't go into the negatives
    if (time < 0) {
      time = 0;
    }

    // display new time on page
    timerEl.textContent = time;

    // display right or wrong on page
    feedbackEl.textContent = "Wrong!";
  } else {
    feedbackEl.textContent = "Correct!";
  }

  // flash right or wrong feedback on page
  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function () {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 1000);

  // move to next question
  currentQuizDataIndex++;

  // check if questions ran out
  if (currentQuizDataIndex === quizData.length) {
    quizEnd();
  } else {
    loadQuiz();
  }
};

var quizEnd = function () {
  // Stop timer
  clearInterval(timerId);

  //shows end screen
  var endScreenEl = document.getElementById("end-screen");
  endScreenEl.removeAttribute("class");

  // show final score
  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = time;

  // hide questions section
  questionsEl.setAttribute("class", "hide");
};

var saveHighScore = function () {
  // new score object

  var initials = initialsEl.value.trim();

  //make sure value wasn't empty
  if (initials !== "") {
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];
  }

  var newScore = {
    score: time,
    initials: initials,
  };

  //save to localstorage
  highscores.push(newScore);
  console.log(highscores);
  window.localStorage.setItem("highscores", JSON.stringify(highscores));

  // redirect to next page
  window.location.href = "highscores.html";

  //clear initial input field
  $("input[id='initials']").val("");
};

initialsEl.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    submitButton.click();
  }
});
submitButton.onclick = saveHighScore;

// =====================End Of Functions============================
// Event Listeners

// start quiz

startButtonEl.addEventListener("click", quizStart);
