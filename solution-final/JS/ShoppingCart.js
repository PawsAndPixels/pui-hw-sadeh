function toggleAnswer(questionNumber) {
  var answerId = "answer" + questionNumber;
  var answer = document.getElementById(answerId);

  if (answer.style.display === "block") {
    answer.style.display = "none";
  } else {
    answer.style.display = "block";
  }
}
