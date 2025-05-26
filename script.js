document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");
  const questionContainer = document.getElementById("question-container");
  const resultContainer = document.getElementById("result-container");
  const questionTxt = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const scoreDisplay = document.getElementById("score");
  const stopWatch = document.getElementById("timer-container");

  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
      marks: 2,
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
      marks: 2,
    },
    {
      question: "Who wrote 'Hamlet'?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
      marks: 3,
    },
  ];

  let currentQuestionIdx = 0;
  let score = 0;
  let timeoutId;

  startBtn.addEventListener("click", startQuiz);
  nextBtn.addEventListener("click", showNextQuestion);
  restartBtn.addEventListener("click", () => {
    currentQuestionIdx = 0;
    score = 0;
    clearTimeout(timeoutId);
    resultContainer.classList.add("hidden");
    startQuiz();
  });

  function startQuiz() {
    startBtn.classList.add("hidden");
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    stopWatch.classList.remove("hidden");
    showQuestion();
  }

  function showQuestion() {
    clearTimeout(timeoutId);
    nextBtn.classList.add("hidden");
    questionTxt.textContent = questions[currentQuestionIdx].question;
    choicesList.innerHTML = "";

    questions[currentQuestionIdx].choices.forEach((choice) => {
      const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => {
        clearTimeout(timeoutId);
        selectAnswer(choice);
      });
      choicesList.appendChild(li);
    });

    timeoutId = setTimeout(() => {
      showNextQuestion();
    }, 5000);
  }

  function selectAnswer(choice) {
    const correctAnswer = questions[currentQuestionIdx].answer;
    const allChoices = choicesList.querySelectorAll("li");

    allChoices.forEach((li) => {
      li.style.pointerEvents = "none"; // disable after first click
      if (li.textContent === correctAnswer) {
        li.classList.add("correct-answer");
      } else if (li.textContent === choice) {
        li.classList.add("wrong-answer");
      }
    });

    if (choice === correctAnswer) {
      score += questions[currentQuestionIdx].marks;
    }

    nextBtn.classList.remove("hidden");
  }

  function showResult() {
    questionContainer.classList.add("hidden");
    stopWatch.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    clearTimeout(timeoutId);

    const totalMarks = questions.reduce((sum, q) => sum + q.marks, 0);
    scoreDisplay.textContent = `You scored ${score} out of ${totalMarks} marks`;
  }

  function showNextQuestion() {
    currentQuestionIdx++;
    if (currentQuestionIdx < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
});
