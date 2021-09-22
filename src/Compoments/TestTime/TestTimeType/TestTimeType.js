import React, { Component } from 'react';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './Test.css';
import quizQuestionsTemp from "./api/quizQuestionsTime";
import API from '../../Forum/utils/API';
import swal from "sweetalert";


export default class TestTimeType extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      questionId: 1,
      question: ``,
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: '',
      nameTest: 'Определение типа временного поведения',
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
    const domin =answersCount.доминантный>0?answersCount.доминантный:0;
    const iniz  =answersCount.инициативный>0?answersCount.инициативный:0;
    const post = answersCount.постоянный>0?answersCount.постоянный:0;
    const otv = answersCount.ответственный>0?answersCount.ответственный:0;
    const maxAnswerCount = Math.max.apply(null, answersCountValues);
    console.log(answersCount.доминантный);
    console.log(answersCount.инициативный);
    console.log(answersCount.постоянный);
    console.log(answersCount.ответственный);
    console.log(  answersCountKeys.filter(key => answersCount[key] === maxAnswerCount));
    return [ domin,iniz ,post,otv,answersCountKeys.filter(key => answersCount[key] === maxAnswerCount)]
  }

  parseJwt() {
    localStorage.getItem('userInfo')
    const user = JSON.parse(localStorage.getItem('userInfo'));
    let token = user.accessToken;
    let base64Url = token.split(".")[1];
    let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    let jsonPayload = decodeURIComponent(
        atob(base64)
            .split("")
            .map(function (c) {
              return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join("")
    );
    console.log(JSON.parse(jsonPayload).id)
    return JSON.parse(jsonPayload).id;

  }
  setData = async () => {
    const resultfull = this.state.result
    API.post('/testing/add/', resultfull)
        .then(response => {
              console.log(response)
              if (response) {
                swal("Ваш результат збережено!",)
              }
            },
            error => {
              swal("Error!");
            }
        );
    console.log(this.state.result)
  }
  setResults(result) {
       this.setState({
      result:result
      });
       console.log(this.state.result);
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
          }}> Тест "Определение типа временного поведения" каков ваш временной тип?</h4>
        Представьте себе определенную, по возможности конкретную ситуацию.
Затем из четырех утверждений 1-й категории («Когда я задумываюсь о целях...») выберите то, которое, по вашему мнению, больше всего Вам подходит.

        </span>
        {this.state.result ? this.renderResult() : this.renderQuiz()}

      </div>
    );
  }
}


