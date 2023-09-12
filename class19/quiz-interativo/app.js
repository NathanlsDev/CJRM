const form = document.querySelector(".quiz-form");
const finalScoreContainer = document.querySelector(".final-score-container");

let score = 0;
const correctAnswers = ["B", "D", "A", "C"];

const getUserAnswers = () =>
  correctAnswers.map((_, index) => form[`inputQuestion${index + 1}`].value);

const calculateUserScore = (userAnswers) => {
  score = 0;

  userAnswers.forEach((userAnswer, index) => {
    const userAnswerIsCorrect = userAnswer === correctAnswers[index];

    if (userAnswerIsCorrect) score += 25;
  });
};

const enableScore = () => {
  scrollTo(0, 0);
  finalScoreContainer.classList.remove("d-none");
};

const animateFinalScore = () => {
  let counter = 0;

  const timer = setInterval(() => {
    if (counter === score) clearInterval(timer);
    finalScoreContainer.querySelector("span").textContent = `${counter++}%`;
  }, 10);
};

const answerMatch = (event) => {
  event.preventDefault();

  const userAnswers = getUserAnswers();

  calculateUserScore(userAnswers);
  enableScore();
  animateFinalScore();
};

form.addEventListener("submit", answerMatch);
