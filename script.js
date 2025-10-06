const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d"
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b"
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hyper Transfer Makeup Language",
    c: "Hyper Text Markdown Language",
    d: "None of the above",
    correct: "a"
  },
  {
    question: "Which year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "None of the above",
    correct: "b"
  }
];

let currentQuiz = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answerBtns = document.querySelectorAll(".answer-btn");
const nextBtn = document.getElementById("next-btn");
const quizEl = document.getElementById("quiz");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  answerBtns.forEach(btn => {
    const id = btn.id;
    btn.innerText = currentQuizData[id];
  });
}

function deselectAnswers() {
  answerBtns.forEach(btn => {
    btn.classList.remove("correct", "wrong");
    btn.disabled = false;
  });
}

function selectAnswer(selected) {
  const answer = quizData[currentQuiz].correct;
  if (selected === answer) {
    document.getElementById(selected).classList.add("correct");
    score++;
  } else {
    document.getElementById(selected).classList.add("wrong");
    document.getElementById(answer).classList.add("correct");
  }
  answerBtns.forEach(btn => (btn.disabled = true));
}

function nextQuestion() {
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    showResult();
  }
}

function showResult() {
  quizEl.classList.add("hidden");
  resultEl.classList.remove("hidden");
  scoreEl.innerText = `${score} / ${quizData.length}`;
}

function restartQuiz() {
  currentQuiz = 0;
  score = 0;
  resultEl.classList.add("hidden");
  quizEl.classList.remove("hidden");
  loadQuiz();
}

// Load first question
loadQuiz();
