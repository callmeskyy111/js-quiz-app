
```markdown
# 🎯 JavaScript Quiz App

A simple yet interactive **Quiz Application** built using **HTML, CSS, and JavaScript**. This app displays multiple-choice questions one at a time with a countdown timer for each, and shows the final score at the end.

---

## 🚀 Live Demo

> You can host it using GitHub Pages, Netlify, or localhost to try it out.

---

## 📁 Project Structure

```

quiz-app/
├── index.html
├── styles.css
├── script.js
└── README.md

```

---

## ⚙️ How to Run

1. Clone or download the repo:
```

git clone [https://github.com/your-username/quiz-app.git](https://github.com/your-username/quiz-app.git)
cd quiz-app

````

2. Open `index.html` in your browser.

---

## 🧠 Features

- Start quiz with a **Start** button
- Dynamic **question rendering** using JavaScript
- **Timer** of 5 seconds per question
- **Score tracking** with marks for each question
- Displays **correct and wrong** answers
- Final **score summary** with option to restart quiz
- Fully **responsive** and styled with dark mode aesthetics

---

## 📜 JavaScript Features Explained (in `script.js`)

### 1. `document.addEventListener("DOMContentLoaded", () => { ... })`
- Ensures JavaScript runs only **after the DOM has loaded**.

---

### 2. ✅ DOM Selection with `getElementById`
```js
const startBtn = document.getElementById("start-btn");
````

* Used to **grab elements** from the HTML for interaction.

---

### 3. ✅ Event Listeners

```js
startBtn.addEventListener("click", startQuiz);
```

* Used to **respond to user actions** like button clicks.

---

### 4. ✅ Dynamic Data: `questions` array

```js
const questions = [
  { question: "What is ...", choices: [...], answer: "...", marks: 2 },
];
```

* Stores quiz content as an **array of objects**, making it scalable.

---

### 5. ✅ let/const Variables

```js
let currentQuestionIdx = 0;
let score = 0;
```

* `let` is used for values that change; `const` for constants.

---

### 6. ✅ Functions and Function Declarations

```js
function startQuiz() { ... }
```

* The app is split into **modular functions** for clarity and reuse:

  * `startQuiz()` – begins the quiz
  * `showQuestion()` – loads current question
  * `selectAnswer()` – handles answer logic
  * `showResult()` – shows score
  * `showNextQuestion()` – moves to the next question

---

### 7. ✅ `classList` API

```js
startBtn.classList.add("hidden");
```

* Used to **show/hide** elements by adding/removing CSS classes.

---

### 8. ✅ Dynamic DOM Manipulation

```js
const li = document.createElement("li");
li.textContent = choice;
choicesList.appendChild(li);
```

* Creates answer buttons **on the fly** using JavaScript.

---

### 9. ✅ `setTimeout()`

```js
timeoutId = setTimeout(() => {
  showNextQuestion();
}, 5000);
```

* Implements a **5-second timer** to auto-skip questions.

---

### 10. ✅ `clearTimeout()`

```js
clearTimeout(timeoutId);
```

* Cancels the timer when user answers early.

---

### 11. ✅ `forEach()` loop

```js
questions[currentQuestionIdx].choices.forEach((choice) => { ... });
```

* Loops through answer choices and renders them as list items.

---

### 12. ✅ Template Literals

```js
scoreDisplay.textContent = `You scored ${score} out of ${totalMarks} marks`;
```

* Used for **easy string interpolation**.

---

### 13. ✅ Array Methods: `reduce()`

```js
const totalMarks = questions.reduce((sum, q) => sum + q.marks, 0);
```

* Calculates **total possible score** dynamically.

---

### 14. ✅ Conditional Logic

```js
if (choice === correctAnswer) {
  score += questions[currentQuestionIdx].marks;
}
```

* Increases score based on correctness and assigns class styles accordingly.

---

### 15. ✅ Clean Separation of Logic

* Each function has a **single responsibility**, making the code easier to maintain and extend.
---

## 👨🏻‍💻 Author

Made by **Soumadip Banerjee** – aspiring full-stack dev on a mission 🚀
```
```
