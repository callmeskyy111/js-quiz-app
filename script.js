document.addEventListener("DOMContentLoaded", () => {
  //! Grab the elements/references
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
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
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
    },
  ];

  let currentQuestionIdx = 0;
  let score = 0;
  let answerFlag;

  //! Someone clicks on the START button, then..
  startBtn.addEventListener("click", startQuiz);

  //! Someone clicks on the NEXT button, then..
  nextBtn.addEventListener("click", showNextQuestion);

  //! Someone clicks on the RESTART button, then..
  restartBtn.addEventListener("click", () => {
    currentQuestionIdx = 0;
    score = 0;
    resultContainer.classList.add("hidden");
    startQuiz();
  });

  let interval = setInterval(showNextQuestion, 5000);

  //! The functions
  function startQuiz() {
    startBtn.classList.add("hidden"); //hiding on commencement of the quiz
    resultContainer.classList.add("hidden"); //hiding on commencement of the quiz
    questionContainer.classList.remove("hidden"); //showing on commencement of the quiz
    stopWatch.classList.remove("hidden");
    showQuestion();
    interval();
  }

  function showQuestion() {
    nextBtn.classList.add("hidden");
    questionTxt.textContent = questions[currentQuestionIdx].question; //dynamically
    //! Now, show the options too!
    choicesList.innerHTML = ""; //refresh/clear previous questions
    // 💡 LIST===ARRAY , ARRAY===LIST
    // forEach/map/... (whatevs)
    questions[currentQuestionIdx].choices.forEach((choice) => {
      const li = document.createElement("li");
      li.textContent = choice;
      if (answerFlag === "correct") {
        li.classList.add("correct-answer");
      }
      // 💡 selectAnswer() - executes immediately ❌, selectAnswer - can't provide params ❌, Solution? - ()=> fx(param) ✅
      //li.addEventListener("click", () => selectAnswer(choice));
      li.addEventListener("click", () => selectAnswer(choice));

      console.log(score);

      // Don't forget to attach/append
      choicesList.appendChild(li);
    });
  }

  function selectAnswer(choice) {
    const correctAnswer = questions[currentQuestionIdx].answer;
    if (choice === correctAnswer) {
      score++;
      //answerFlag === "correct";
    }
    nextBtn.classList.remove("hidden");
  }

  function showResult() {
    questionContainer.classList.add("hidden");
    stopWatch.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    clearInterval(interval);
    scoreDisplay.textContent = `
    ${score} out of ${questions.length}
    `;
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
