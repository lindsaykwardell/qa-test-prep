import React, { Component } from "react";
import { Container, Input, FormGroup, Label, Button, Alert } from "reactstrap";
import "./App.css";
import questions from "./questions";

class App extends Component {
  state = {
    currentQuestion: questions[0],
    selectedAnswer: null,
    correctAnswer: null,
    totalQuestions: 0,
    correctQuestions: 0
  };

  componentDidMount = () => {
    this.nextQuestion();
  };

  selectAnswerHandler = e => {
    this.setState({ selectedAnswer: parseFloat(e.target.value) });
  };

  submitAnswer = () => {
    this.setState({
      correctAnswer: this.state.currentQuestion.correctAnswer,
      totalQuestions: this.state.totalQuestions + 1,
      correctQuestions:
        this.state.currentQuestion.correctAnswer === this.state.selectedAnswer
          ? this.state.correctQuestions + 1
          : this.state.correctQuestions
    });
  };

  nextQuestion = () => {
    const key = Math.floor(Math.random() * (questions.length - 1));
    this.setState({
      selectedAnswer: null,
      currentQuestion: questions[key],
      correctAnswer: null
    });
  };

  render() {
    return (
      <div className="App">
        <Container>
          <div>Questions Answered: {this.state.totalQuestions} | Correct Answers: {this.state.correctQuestions} {this.state.correctQuestions / this.state.totalQuestions ? `(${Math.round((this.state.correctQuestions/this.state.totalQuestions) * 100)}%)` : ""}</div>
          <div className="mt-4" style={{ whiteSpace: "pre-wrap" }}>
            {this.state.currentQuestion.question}
          </div>
          <FormGroup className="mt-5" tag="fieldset">
            {this.state.currentQuestion.answers.map((answer, index) => (
              <FormGroup check key={index}>
                <Label
                  check
                  style={
                    index === this.state.correctAnswer
                      ? {
                          textDecoration: "underline",
                          fontWeight: "bold"
                        }
                      : index === this.state.selectedAnswer &&
                        index !== this.state.correctAnswer &&
                        this.state.correctAnswer !== null
                      ? { color: "red" }
                      : {}
                  }
                >
                  <Input
                    type="radio"
                    name="answer"
                    value={index}
                    checked={index === this.state.selectedAnswer}
                    onChange={this.selectAnswerHandler}
                    disabled={this.state.correctAnswer !== null}
                  />{" "}
                  {answer}
                </Label>
              </FormGroup>
            ))}
          </FormGroup>
          <Button
            color="success"
            onClick={this.submitAnswer}
            disabled={
              this.state.selectedAnswer === null ||
              this.state.correctAnswer !== null
            }
          >
            Submit
          </Button>
          <Button
            className="ml-4"
            color="secondary"
            onClick={this.nextQuestion}
          >
            Next question
          </Button>
          {this.state.correctAnswer !== null ? (
            <Alert
              className="mt-3"
              style={{ whiteSpace: "pre-wrap" }}
              color={
                this.state.selectedAnswer === this.state.correctAnswer
                  ? "success"
                  : "danger"
              }
            >
              {this.state.selectedAnswer === this.state.correctAnswer
                ? "Correct!"
                : this.state.currentQuestion.showAnswer()}
            </Alert>
          ) : (
            ""
          )}
        </Container>
      </div>
    );
  }
}

export default App;
