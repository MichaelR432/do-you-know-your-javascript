// variables for quiz game

let timeRemaining = 60;
let timer = document.querySelector("#timer")
let question = document.querySelector("#question");
let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let button3 = document.querySelector("#button3");
let button4 = document.querySelector("#button4");
let quizIndex = 0;
let selectedQuestion = quizContent[0];

// setting the array of questions to match html id's

let quizContent = [
  {
    question: "Commonly used data types DO Not include:",
    choices: ["Strings", "Booleans", "Alerts", "Numbers"],
    correctChoice: "Alerts",
  },

  {
    question:
      "In a condition the if/else statement is enclosed with ___________.",
    choices: ["Quotes", "Curly brackets", "Parenthesis", "Square brackets"],
    correctChoice: "Parenthesis",
  },

  {
    question: "Arrays in JavaScript can be used to store _______.",
    choices: [
      "Numbers and strings", "Other arrays", "Booleans", "All of the above",
    ],
    correctChoice: "All of the above",
  },

  {
    question:
      "String values must be enclosed within __________ when being assigned to variables.",
    choices: ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
    correctChoice: "Quotes",
  },

  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "Terminal/Bash", "For Loops", "console.log"],
    correctChoice: "console.log",
  },
];

// setting quiz index and html buttons to assigned quizContent
question.textContent = selectedQuestion.question;
button1.textContent = selectedQuestion.choices[0];
button2.textContent = selectedQuestion.choices[1];
button3.textContent = selectedQuestion.choices[2];
button4.textContent = selectedQuestion.choices[3];


// function to start quiz game

function start() {
    seconds = setInterval(function () {
        timeRemaining--;
        timer.textContent = "Time left:" + timeRemaining;

        if (timeRemaining <= 0) {
            clearInterval(seconds);
        }

        changeQuestion();
        
    }, 1000);
}

start();

// function to end quiz

function end() {
    clearInterval(seconds);

}

// here is the function to move to a new question using assigned values from above

function changeQuestion() {
  selectedQuestion = quizContent[quizIndex];
  question.textContent = selectedQuestion.question;
  button1.textContent = selectedQuestion.choices[0];
  button2.textContent = selectedQuestion.choices[1];
  button3.textContent = selectedQuestion.choices[2];
  button4.textContent = selectedQuestion.choices[3];
}

changeQuestion();
