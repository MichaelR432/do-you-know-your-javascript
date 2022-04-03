// variables for quiz game

let timeRemaining = 60;
let question = document.querySelector("#question");
let button1 = document.querySelector("#buttonQ1");
let button2 = document.querySelector("#buttonQ2");
let button3 = document.querySelector("#buttonQ3");
let button4 = document.querySelector("#buttonQ4");
let submit = document.querySelector('#submit')
let startBtn = document.querySelector('#startBtn')
let time = document.querySelector(".time")

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
let quizIndex = 0;
let selectedQuestion = quizContent[0];
question.textContent = selectedQuestion.question;
button1.textContent = selectedQuestion.choices[0];
button2.textContent = selectedQuestion.choices[1];
button3.textContent = selectedQuestion.choices[2];
button4.textContent = selectedQuestion.choices[3];


// function to start quiz game

function start() {
    seconds = setInterval(function () {
        timeRemaining--;
        time.textContent = "Time left: " + timeRemaining;

        if (timeRemaining <= 0) {
            clearInterval(seconds);
            end();
        }
        
    }, 1000);

    changeQuestion();
}

start();

// function to end quiz

function end() {
    clearInterval(seconds);
    let yourScore = document.querySelector('#yourScore');
    let topScores = document.querySelector('#topScoresDiv');

    topScores.style.display = 'block';
    yourScore.textContent = 'Your Time: ' + timeRemaining;
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

// alerting user if question is wrong of right

button1.addEventListener("click", function (event) {
    event.preventDefault();

    if (button1.textContent === selectedQuestion.correctChoice) {
        alert("Your Choice is Correct!");
    } else {
        alert("Your Choice is Wrong");
        // takes away 15 secs
        timeRemaining -= 15
    }
    quizIndex++;
    if (quizIndex === quizContent.length) {
        end();
    } else {
        changeQuestion();
    }
})

button2.addEventListener("click", function (event) {
    event.preventDefault();

    if (button2.textContent === selectedQuestion.correctChoice) {
        alert("Your Choice is Correct!");
    } else {
        alert("Your Choice is Wrong");
        // takes away 15 secs
        timeRemaining -= 15
    }
    quizIndex++;
    if (quizIndex === quizContent.length) {
        end();
    } else {
        changeQuestion();
    }
})

button3.addEventListener("click", function (event) {
    event.preventDefault();

    if (button3.textContent === selectedQuestion.correctChoice) {
        alert("Your Choice is Correct!");
    } else {
        alert("Your Choice is Wrong");
        // takes away 15 secs
        timeRemaining -= 15
    }
    quizIndex++;
    if (quizIndex === quizContent.length) {
        end();
    } else {
        changeQuestion();
    }
})

button4.addEventListener("click", function (event) {
    event.preventDefault();

    if (button4.textContent === selectedQuestion.correctChoice) {
        alert("Your Choice is Correct!");
    } else {
        alert("Your Choice is Wrong");
        // takes away 15 secs
        timeRemaining -= 15
    }
    quizIndex++;
    if (quizIndex === quizContent.length) {
        end();
    } else {
        changeQuestion();
    }
})

// placing in topScores into local storage

function saveScore() {
    let userName = document.querySelector('#userName');
    // removing excess blank space from user name entry as string value
    let userNameCleanup = userName.value.trim();

    if (userNameCleanup !== "") {
        // if value is null from local storage this will turn into an empty string array
        let topScores = JSON.parse(window.localStorage.getItem("top-scores") || "[]");
    
        let newScore = {
            score: timeRemaining,
            userName: userNameCleanup,
        }

        // pushing/replacing value of new score into top score array
        topScores.push(newScore);
        window.localStorage.setItem("top-scores", JSON.stringify(topScores));

        window.location.href = 'index.html';
    
    }
}

submit.onclick = saveScore;
