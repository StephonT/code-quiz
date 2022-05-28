// Variables to keep track of the quiz
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// Variables I defined to help the code run
var questionsEl = document.getElementById("questions");
var questions = [
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
var time = 75;
var timerEl = document.querySelector(".time");

// Dynamically created DOM element (buttonEl) to make sure function is working towards the  "Start Quiz" button and not anywhere else on the HTML page
var startButtonEl = document.querySelector("#start");
console.log(startButtonEl);

// =======================START FUNCTIONS==========================

// 1. STARTING THE QUIZ
var quizStart = function () {
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide"); // Hide the start screen

  // Reveal Questions
  questionsEl.removeAttribute("class");

  //start timer
  timerId = setInterval(clockTime, 1000);

  //show starting time
  timerEl.textContent = time;

  //showQuestions(); <<< define function
};

// =====================End Of Functions============================
// Event Listeners

// start quiz
startButtonEl.addEventListener("click", quizStart);
