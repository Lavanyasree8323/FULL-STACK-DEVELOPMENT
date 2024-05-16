const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("nextBtn");
const resultElement = document.getElementById("result");

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;
  optionsElement.innerHTML = "";
  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.addEventListener("click", () => checkAnswer(option));
    optionsElement.appendChild(button);
  });
}

function checkAnswer(selectedOption) {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  if (selectedOption === currentQuestion.correctAnswer) {
    score++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < quizQuestions.length) {
    displayQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionElement.style.display = "none";
  optionsElement.style.display = "none";
  nextButton.style.display = "none";
  resultElement.innerText = `You scored ${score} out of ${quizQuestions.length}!`;
}

nextButton.addEventListener("click", displayQuestion);

// Initial display
displayQuestion();

