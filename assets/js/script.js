//Import Questions
import quizQuestions from '.js/questions.js';

//Quiz Specific Variables
let currentQuestion = 0;
let score = 0;
let timeLeft = 60;
const quizContainer = document.getElementById("quiz-container");
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const resultElement = document.getElementById("result");
    const timerElement = document.getElementById("time-left");

//Functions
function displayQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsElement.appendChild(button);
    });}
  
  function checkAnswer(answer) {
    if (answer === quizData[currentQuestion].answer) {score++;
        resultElement.innerText = "Correct!";
    } else {
        resultElement.innerText = "Incorrect answer!";
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}
  
function endQuiz() {
    clearInterval(timerInterval);
    quizContainer.innerHTML = `<h2>Quiz Ended!</h2>
                               <p>Your Score: ${score}/${quizData.length}</p>`;
}

  
  function startTimer() {
    const timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.innerText = `${timeLeft} seconds`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
  }
  
  function startQuiz() {
  }
  

  //Event Listener for Quiz to Begin
  document.addEventListener("DOMContentLoaded", startQuiz);