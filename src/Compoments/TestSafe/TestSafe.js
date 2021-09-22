import React, { Component } from 'react';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './Test.css';
import quizQuestionsTemp from "./api/quizQuestionsSafe";



class TestSafe extends Component {

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
      randomIndex = 0;
      currentIndex =0;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }console.log(array.length)
    console.log(array)
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
    const answersCountValuesOld = answersCountKeys.map(key => answersCount[key]);
    const answersCountValues=answersCountValuesOld.filter((key) => {
      return key !== answersCount.мусор});
    const negativ =answersCount.Заперечення;
    const press =answersCount.Придушення;
    const regresion = answersCount.Регресія;
    const compesation = answersCount.Компенсація;
    const proection =answersCount.Проекція;
    const copying = answersCount.Заміщення;
    const intelect = answersCount.Інтелектуалізація;
    const reactiv = answersCount.Реактивність;
    const maxAnswerCount = Math.max.apply(null, answersCountValues);
    console.log(answersCount.Заперечення);
    console.log(answersCount.Придушення);
    console.log(answersCount.Регресія);
    console.log(answersCount.Компенсація);
    console.log(answersCount.Проекція);
    console.log(answersCount.Заміщення);
    console.log(answersCount.Інтелектуалізація);
    console.log(answersCount.Реактивність);
    console.log(answersCountValuesOld);
    console.log(answersCountValues);
    console.log(  answersCountKeys.filter(key => answersCount[key] === maxAnswerCount));
    return [ negativ,press,regresion,compesation,proection,copying,intelect,reactiv,answersCountKeys.filter(key => answersCount[key] === maxAnswerCount),
    ]
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
          }}>Тест-опитувальник механізмів психологічного захисту
«ІНДЕКС ЖИТТЄВОГО СТИЛЮ»</h4>
        </span><h5>Інструкція:<br/>
          Вам будуть пред'являтися твердження, що стосуються стану вашого здоров'я і вашого характеру. Читайте кожне твердження і вирішуйте, чи правильно воно по відношенню до вас.
          <br/>Не витрачайте часу на роздуми.<br/>
          Найбільш природна та реакція, яка першою приходить в голову. Якщо ви вирішили, що твердження вірне, <br/> натисніть «Так» ; <br/>якщо твердження по відношенню до вас невірно, натисніть «Ні» .
          <br/>При сумнівах пам'ятайте, що будь-яке твердження, яке ви не можете розцінити по відношенню до себе як вірне, слід вважати невірним.
        </h5>
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

export default TestSafe;
