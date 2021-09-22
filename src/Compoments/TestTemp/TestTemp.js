import React, { Component } from 'react';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './Test.css';
import quizQuestionsTemp from "./api/quizQuestionsTemp";



class TestTemp extends Component {

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
    const shuffledAnswerOptions = quizQuestionsTemp.map(question =>
              this.shuffleArray(question.answers),
    );
    this.setState({
      question: quizQuestionsTemp[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
    console.log(quizQuestionsTemp);
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
    if (this.state.questionId < quizQuestionsTemp.length) {
      console.log(quizQuestionsTemp.length)
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
      question: quizQuestionsTemp[counter].question,
      answerOptions: quizQuestionsTemp[counter].answers,
      answer: ''
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const hol =answersCount.Холерик;
    const sang =answersCount.Сангвінік;
    const fleg = answersCount.Флегматик;
    const mel = answersCount.Меланхолік;
    const maxAnswerCount = Math.max.apply(null, answersCountValues);
    console.log(answersCount.Холерик);
    console.log(answersCount.Сангвінік);
    console.log(answersCount.Флегматик);
    console.log(answersCount.Меланхолік);
    console.log(  answersCountKeys.filter(key => answersCount[key] === maxAnswerCount));
    return [ hol,sang,fleg,mel,answersCountKeys.filter(key => answersCount[key] === maxAnswerCount)]

  }


  setResults(result) {
    //  const resultFull={[0][1],[2],[3]}
    // if (result.length === 1) {
    this.setState({ result:result});
    //} else {
    //this.setState({ result: 'Undetermined' });
    //}/
    console.log(result);
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
        questionTotal={quizQuestionsTemp.length}
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
          }}> тест на визначення типу темпераменту</h4>
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

export default TestTemp;
