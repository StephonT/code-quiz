// Variables to keep track of the quiz
var currentQuestion = 0;
var time = questions.length * 15;
var timerId;
var time = 75;

// Variables I defined to help the code run
var choicesEl = document.getElementById("choices");
var questionsEl = document.getElementById("questions");
var quizQuestions = [
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
};

var clockCountDown = function () {
  //update time
  time--;
  timerEl.textContent = time;
};

// =====================End Of Functions============================
// Event Listeners

// start quiz
startButtonEl.addEventListener("click", quizStart);
