//Questions for the quiz
const quizQuestions = [
    {
        question: "What does CSS stand for in web development?",
        options: [
          "Colorful Style Sheets",
          "Computational Style Sheets",
          "Creative Style Sheets",
          "Cascading Style Sheets",
        ],
        correctAnswer: "Cascading Style Sheets",
    },
    {
        question: "What best describes mySql?",
        options: [
          "Reactive Database",
          "Relational Database",
          "Abstracted Database",
          "Creative Style Sheets",
        ],
        correctAnswer: "Relational Database",
    },
    {
        question: "Which of these are not part of the MERN stack??",
        options: [
          "React",
          "jQuery",
          "NodeJS",
          "Express",
        ],
        correctAnswer: "jQuery",
    },
    {
        question: "What does the abbreviatiom NPM stand for?",
        options: [
          "Node Property Manager",
          "New Package Manager",
          "Node Package Manager",
          "New Parameter Marker",
        ],
        correctAnswer: "Node Package Manager",
    },
    {
        question: "Where is an external script file referenced in HTML?",
        options: [
          "In the header",
          "In the footer",
          "As a variable",
          "At the end of the <body> tags",
        ],
        correctAnswer: "At the end of the <body> tags",
    }
];

//Logic Powering the Quiz

  //Initializing the quiz
  const startBtn = document.getElementById('start-btn');
  const questionContainer = document.getElementById('question-container');
  const timeLeft = document.getElementById('time-left');
  
  //Setting the timer, score, question and time limit to origination
  let timer;
  let score = 0;
  let questionIndex = 0;
  const timeLimit = 60; // seconds
  
  //Button that starts the quiz
  startBtn.addEventListener('click', startQuiz);
  
  //Function that starts the quiz
  function startQuiz() {
      startTimer();
      displayQuestion();
    }
  
//Function that starts the timer
function startTimer() {
    let timeRemaining = timeLimit;
    timeLeft.textContent = timeRemaining;
    //Controlling the time interval 
    timer = setInterval(() => {
      timeRemaining--;
      timeLeft.textContent = timeRemaining;
     //When the timer runs out the quiz ends   
      if (timeRemaining <= 0) {
        endQuiz();
      }
    }, 1000);
  }

//Function to render the questions on the screen
function displayQuestion() {
const currentQuestion = quizQuestions[questionIndex];
questionContainer.innerHTML = `
    <h2>${currentQuestion.question}</h2>
    <ul>
    ${currentQuestion.options.map(options => `<li>${options}</li>`).join('')}
    </ul>`;
}

function endQuiz() {
    clearInterval(timer);
    // Display final score and input for initials
    // Handle saving initials and score
  }
  
