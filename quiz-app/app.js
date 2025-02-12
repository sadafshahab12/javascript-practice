let question, answerBox, resultBox, submitBtn;
submitBtn = document.querySelector(".submitBtn");
const randomQuestions = [
  {
    question: "What is your name",
    answer: "sadaf",
  },
];
question = document.getElementById("question");
question.innerText = `${randomQuestions[0].question}`;
function quizApp() {
  answerBox = document.getElementById("answerBox").value;
  resultBox = document.querySelector(".result");

  if (answerBox !== randomQuestions[0].answer) {
    resultBox.innerHTML = `${answerBox} is the wrong answer. The Correct Answer is ${randomQuestions[0].answer}`;
  } else {
    resultBox.innerHTML = "Correct Answer";
  }
}

submitBtn.addEventListener("click", quizApp);
