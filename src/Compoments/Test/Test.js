import React, { Component } from 'react';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './Test.css';
import quizQuestions from "./api/quizQuestions";



class Test extends Component {

  constructor(props) {
    super(props);
    this.state = {

      counter: 0,
      questionId: 1,
      question: ``,
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: ''
    };
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentDidMount() {
    const shuffledAnswerOptions = quizQuestions.map(question =>
              this.shuffleArray(question.answers),
    );
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
    console.log(quizQuestions);
    console.log(shuffledAnswerOptions)
  }

  shuffleArray(array) {
   let currentIndex = array.length,
      temporaryValue,
      randomIndex;
    console.log(currentIndex)
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }//console.log(array.length)
    //console.log(array)
    return array;

  }
  handleAnswerSelected(event) {
    console.log(event.currentTarget.value)
    this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionId < quizQuestions.length) {
      console.log(quizQuestions.length)
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }console.log(this.state.questionId)
  }

  setUserAnswer(answer) {
    this.setState((state, props) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1
      },
      answer: answer
    }));console.log( answer)
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Ви не щирі,спробуйте ще...' });
    }
  }
  newTest = () =>{
    this.setState({
      counter: 0,
      questionId: 1,
      question: ``,
      //answerOptions: [],
      answer: '',
      answersCount: {},
      result: ''
    });
  }
  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return <Result quizResult={this.state.result} />;

  }

  render() {
    return (<div>
      <span >
          <h4 className='text-center' style={{
            border:"3px solid #8bc53f"
          }}> тест DISC</h4>
        </span>
        {this.state.result ? this.renderResult() : this.renderQuiz()}
          <span style={{
            marginLeft: "20%",
            marginRight: "20%"
          }}><button
              className="btn centered" style={{
            flexShrink: "1",
            fontWeight: "bold",
            marginLeft: "25%",

            width:"auto"
          }}
              onClick={this.newTest}
          >Очистити результати
                        </button></span>
      </div>
    );
  }
}

export default Test;
