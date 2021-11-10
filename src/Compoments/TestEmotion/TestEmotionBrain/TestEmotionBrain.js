import React, { Component } from 'react';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './Test.css';
import quizQuestionsTempTwo from "../TestEmotionBrain/api/quizQuestionsBrain";



export default class TestEmotionBrain extends Component {

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
        console.log(event.currentTarget)
        this.setUserAnswer(event.currentTarget.value);
        if (this.state.questionId < quizQuestionsTempTwo.length) {
          //  console.log(quizQuestionsTempTwo.length)
            setTimeout(() => this.setNextQuestion(), 0);
        } else {
            setTimeout(() => this.setResults(this.getResults()), 0);
        }

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
            question: quizQuestionsTempTwo[counter].question,
            answerOptions: quizQuestionsTempTwo[counter].answers,
            answer: ''
        });
    }

    getResults=()=> {
        const answersCount = this.state.answersCount;
         const emo1 =!isNaN(answersCount.Эмоциональная_осведомленность1)?answersCount.Эмоциональная_осведомленность1*(-3):0;
        const emo2 =!isNaN(answersCount.Эмоциональная_осведомленность2)?answersCount.Эмоциональная_осведомленность2*(-2):0;
        const emo3 =!isNaN(answersCount.Эмоциональная_осведомленность3)?answersCount.Эмоциональная_осведомленность3*(-1):0;
        const emo4 =!isNaN(answersCount.Эмоциональная_осведомленность4)?answersCount.Эмоциональная_осведомленность4*(1):0;
        const emo5 =!isNaN(answersCount.Эмоциональная_осведомленность5)?answersCount.Эмоциональная_осведомленность5*(2):0;
        const emo6 =!isNaN(answersCount.Эмоциональная_осведомленность6)?answersCount.Эмоциональная_осведомленность6*(3):0;
        const emosum=emo1+emo2+emo3+emo4+emo5+emo6;
        const mangemo1 =!isNaN(answersCount.Управление_своими_эмоциями1)?answersCount.Управление_своими_эмоциями1*(-3):0;
        const mangemo2 =!isNaN(answersCount.Управление_своими_эмоциями2)?answersCount.Управление_своими_эмоциями2*(-2):0;
        const mangemo3 =!isNaN(answersCount.Управление_своими_эмоциями3)?answersCount.Управление_своими_эмоциями3*(-1):0;
        const mangemo4 =!isNaN(answersCount.Управление_своими_эмоциями4)?answersCount.Управление_своими_эмоциями4*(1):0;
        const mangemo5 =!isNaN(answersCount.Управление_своими_эмоциями5)?answersCount.Управление_своими_эмоциями5*(2):0;
        const mangemo6 =!isNaN(answersCount.Управление_своими_эмоциями6)?answersCount.Управление_своими_эмоциями6*(3):0;
        const mahgemosum=mangemo1+mangemo2+mangemo3+mangemo4+mangemo5+mangemo6;
        const selfmotiv1= !isNaN(answersCount.Самомотивация1)?answersCount.Самомотивация1*(-3):0;
        const selfmotiv2= !isNaN(answersCount.Самомотивация2)?answersCount.Самомотивация2*(-2):0;
        const selfmotiv3= !isNaN(answersCount.Самомотивация3)?answersCount.Самомотивация3*(-1):0;
        const selfmotiv4= !isNaN(answersCount.Самомотивация4)?answersCount.Самомотивация4*(1):0;
        const selfmotiv5= !isNaN(answersCount.Самомотивация5)?answersCount.Самомотивация5*(2):0;
        const selfmotiv6= !isNaN(answersCount.Самомотивация6)?answersCount.Самомотивация6*(3):0;
        const selfmotivsum=selfmotiv1+selfmotiv2+selfmotiv3+selfmotiv4+selfmotiv5+selfmotiv6;
        const empat1 = !isNaN(answersCount.Эмпатия1)?answersCount.Эмпатия1*(-3):0;
        const empat2 = !isNaN(answersCount.Эмпатия2)?answersCount.Эмпатия2*(-2):0;
        const empat3 = !isNaN(answersCount.Эмпатия3)?answersCount.Эмпатия3*(-1):0;
        const empat4 = !isNaN(answersCount.Эмпатия4)?answersCount.Эмпатия4*(1):0;
        const empat5 = !isNaN(answersCount.Эмпатия5)?answersCount.Эмпатия5*(2):0;
        const empat6 = !isNaN(answersCount.Эмпатия6)?answersCount.Эмпатия6*(3):0;
        const empatsum=empat1+empat2+empat3+empat4+empat5+empat6;
         const peoplemo1 =!isNaN( answersCount.Распознавание_эмоций_других_людей1)?answersCount.Распознавание_эмоций_других_людей1*(-3):0;
        const peoplemo2 = !isNaN(answersCount.Распознавание_эмоций_других_людей2)?answersCount.Распознавание_эмоций_других_людей2*(-2):0;
        const peoplemo3 =!isNaN( answersCount.Распознавание_эмоций_других_людей3)?answersCount.Распознавание_эмоций_других_людей3*(-1):0;
        const peoplemo4 = !isNaN(answersCount.Распознавание_эмоций_других_людей4)?answersCount.Распознавание_эмоций_других_людей4*(1):0;
        const peoplemo5 = !isNaN(answersCount.Распознавание_эмоций_других_людей5)?answersCount.Распознавание_эмоций_других_людей5*(2):0;
        const peoplemo6 = !isNaN(answersCount.Распознавание_эмоций_других_людей6)?answersCount.Распознавание_эмоций_других_людей6*(3):0;
        const peoplemosum=peoplemo1+peoplemo2+peoplemo3+peoplemo4+peoplemo5+peoplemo6;

        return [ emosum,mahgemosum,selfmotivsum,empatsum,peoplemosum  ]
    }

    setResults(result) {
          this.setState({ result:result});
           console.log(result);
    }
    newTest = () =>{
        this.setState({
            counter: 0,
            questionId: 1,
            question: ``,
            answerOptions: [],
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
          }}>Тест на определение уровня Эмоционального Интеллекта</h4>
          <h5>Инструкция<br/>
Ниже Вам будут предложены высказывания, которые, так или иначе, отражают различные стороны Вашей жизни. Пожалуйста, отметьте звёздочкой или любым другим знаком тот столбец с соответствующим баллом справа, который больше всего отражает степень Вашего согласия с высказыванием.
<br/>Обозначение баллов:<br/>
•	Полностью не согласен (–3 балла).<br/>
•	В основном не согласен (–2 балла).<br/>
•	Отчасти не согласен (–1 балл).<br/>
•	Отчасти согласен (+1 балл).<br/>
•	В основном согласен (+2 балла).<br/>
•	Полностью согласен (+3 балла).
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


