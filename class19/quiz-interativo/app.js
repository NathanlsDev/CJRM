const form = document.querySelector(".quiz-form");
const finalResult = document.querySelector(".result");

let score = 0;
let counter = 0;
const correctAnswers = ["B", "B", "B", "B"];

const enableScore = () => {
  scrollTo(0, 0);
  finalResult.classList.remove("d-none");
};

const showScore = () => {
  const timer = setInterval(() => {
    if (counter === score) clearInterval(timer);
    finalResult.querySelector("span").textContent = `${counter}%`;
    counter++;
  }, 10);
};

const answerMatch = (event) => {
  event.preventDefault();

  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
  ];

  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer === correctAnswers[index]) {
      score += 25;
    }
  });

  enableScore();
  showScore();
};

form.addEventListener("submit", answerMatch);
