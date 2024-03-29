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
 
//Function to display questions and     
function displayQuestion() {
    const currentQuestion = quizQuestions[questionIndex];
    questionContainer.innerHTML = `
        <h2>${currentQuestion.question}</h2>
        <ul>
        ${currentQuestion.options.map(option => `<li><button class="option-btn">${option}</button></li>`).join('')}
        </ul>`;

    // Add event listeners to the option buttons
    const optionButtons = document.querySelectorAll('.option-btn');
        optionButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                checkAnswer(index);
            });
        });
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

//Confirming accuracy of answer chosen
function checkAnswer(selectedIndex) {
    const inputAnswer = quizQuestions[questionIndex].options[selectedIndex];
    const correctAnswer = quizQuestions[questionIndex].correctAnswer;

    if (inputAnswer === correctAnswer) {
        // User score update
        score++;
        //Query question array for end of quiz
        if (questionIndex === quizQuestions.length -1){
            endQuiz()
        } else {
        // Next question
        questionIndex++;
        displayQuestion();
        }
    } else {
        // Display incorrect answer message
        wrongAnswer = `<h3>Incorrect Answer. The correct answer is ${correctAnswer}</h3>`;
        questionContainer.insertAdjacentHTML('beforeend', wrongAnswer);
        
        const nextQuestionButton = document.createElement('button');
        nextQuestionButton.textContent = 'Next Question';
        nextQuestionButton.addEventListener('click', () => {
            questionIndex++;
            displayQuestion();
    });
        questionContainer.appendChild(nextQuestionButton);

    }
}

function endQuiz() {
    clearInterval(timer);
    questionContainer.innerHTML = `<h2>Quiz Over!</h2>
    <p>Your final score is: ${score} out of 6</p>   
    <input type="text" id="initials" placeholder="Enter your initials">
    <button id="submit-score-btn">Submit Score</button>`;
    const submitScoreBtn = document.getElementById('submit-score-btn');
    submitScoreBtn.addEventListener('click', () => {
        const initials = document.getElementById('initials').value;
        console.log(`Initials: ${initials}, Score: ${score}`);
        const userScoreDisplay = document.display('user-score-display');
        userScoreDisplay.innerHTML = `<div>Initials: ${initials}, Score: ${score} out of 6</div>`;
    });
}