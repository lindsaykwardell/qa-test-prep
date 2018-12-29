export default class Question {
  constructor(question = "", answers = ["", "", "", ""], correctAnswer = 0) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }

  checkAnswer = selectedAnswer => {
    if (selectedAnswer === this.correctAnswer) return true;
    else return false;
  };

  showAnswer = () => {
    return `The correct answer is:
    ${this.answers[this.correctAnswer]}`;
  };
}
