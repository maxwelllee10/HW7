// List of questions (statement + answer)
const questions = [
  {
    statement: "2+2?",
    answer: "2+2 = 4"
  },
  {
    statement: "In which year did Christopher Columbus discover America?",
    answer: "1492"
  },
  {
    statement:
      "What occurs twice in a lifetime, but once in every year, twice in a week but never in a day?",
    answer: "The E letter"
  }
];
const contentDiv = document.getElementById("content");

questions.forEach((question) => {
  const p = document.createElement("p");
  p.textContent = question.statement;

  const button = document.createElement("button");
  button.textContent = "Show the answer";
  button.addEventListener("click", () => {
    button.parentNode.replaceChild(document.createTextNode(question.answer), button);
  });

  contentDiv.appendChild(p);
  contentDiv.appendChild(button);
});