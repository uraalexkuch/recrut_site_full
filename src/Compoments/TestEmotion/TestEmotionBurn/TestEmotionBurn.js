import React, { Component } from 'react';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './Test.css';
import quizQuestionsTempTwo from "../TestEmotionBurn/api/quizQuestionsEmo";



export default class TestEmotionBurn   extends Component {

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
        const shuffledAnswerOptions = quizQuestionsTempTwo.map(question =>
            this.shuffleArray(question.answers),
        );
        this.setState({
            question: quizQuestionsTempTwo[0].question,
            answerOptions: shuffledAnswerOptions[0]
        });
       // console.log(quizQuestionsTempTwo);
       // console.log(shuffledAnswerOptions)
    }

    shuffleArray(array) {
        let currentIndex = array.length

        return array;

    }
    handleAnswerSelected(event) {
       // console.log(event.currentTarget.value)
        this.setUserAnswer(event.currentTarget.value);
        if (this.state.questionId < quizQuestionsTempTwo.length) {
          //  console.log(quizQuestionsTempTwo.length)
            setTimeout(() => this.setNextQuestion(), 300);
        } else {
            setTimeout(() => this.setResults(this.getResults()), 300);
        }
        //console.log(this.state.questionId)
    }

    setUserAnswer(answer) {

        this.setState((state, props) => ({

            answersCount: {
                ...state.answersCount,
                [answer]: (state.answersCount[answer] || 0) +( this.state.answerOptions[0].value|| 0)
            },
            answer: answer

        }));
        console.log( this.state.answerOptions)

    }

    setNextQuestion() {
        const counter = this.state.counter + 1;
        const questionId = this.state.questionId + 1;

        this.setState({
            counter: counter,
            questionId: questionId,
            question: quizQuestionsTempTwo[counter].question,
            answerOptions: quizQuestionsTempTwo[counter].answers,
            answer: ''
        });
    }

    getResults() {
        const answersCount = this.state.answersCount;
        const answersCountKeys = Object.keys(answersCount);
        const answersCountValuesOld = answersCountKeys.map(key => answersCount[key]);
        const answersCountValues=answersCountValuesOld.filter((key) => {
            return key !== answersCount.мусор});
        const extra =answersCount.Неудовлетворенность_собой;
        const nejro =answersCount.Загнанность_в_клетку;
        const pshyho = answersCount.Редукция_профессиональных_обязанностей;
        const person = answersCount.Личностная_отстраненность_деперсонализация;
        const emo = answersCount.Эмоциональная_отстраненность;
        const maxAnswerCount = Math.max.apply(null, answersCountValues);
        console.log(answersCount);
        console.log(answersCount.Неудовлетворенность_собой);
        console.log(answersCount.Загнанность_в_клетку);
        console.log(answersCount.Редукция_профессиональных_обязанностей);
        console.log(answersCount.Личностная_отстраненность_деперсонализация);
        console.log(answersCount.Личностная_отстраненность_деперсонализация);
        console.log(answersCount.мусор);
        console.log(answersCountValuesOld);
        console.log(answersCountValues);
        console.log(  answersCountKeys.filter(key => answersCount[key] === maxAnswerCount));
        return [ extra,nejro,pshyho,person,emo,answersCountKeys.filter(key => answersCount[key] === maxAnswerCount),
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
                questionTotal={quizQuestionsTempTwo.length}
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
          }}> Методика «Диагностика уровня эмоционального выгорания»</h4>
          <h5>Инструкция<br/>
Вам предлагается ряд утверждений, по каждому выскажите свое мнение. Если вы согласны с утверждением, поставьте около соответствующего ему номера в бланке для ответов знак «+» («да»), если не согласны — то знак «-» («нет»).
</h5>
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


