import React, {Component} from 'react';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './Test.css';
import quizQuestionsTempTwo from "./api/quizQuestionsTarget";


export default class TestTarget extends Component {

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
        console.log(quizQuestionsTempTwo);
        console.log(shuffledAnswerOptions)
    }

    shuffleArray(array) {
        let currentIndex = array.length,
            temporaryValue,
            randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = 0;
            currentIndex = 0;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;

    }

    handleAnswerSelected(event) {
        console.log(event.currentTarget.value)
        this.setUserAnswer(event.currentTarget.value);
        if (this.state.questionId < quizQuestionsTempTwo.length) {
            console.log(quizQuestionsTempTwo.length)
            setTimeout(() => this.setNextQuestion(), 300);
        } else {
            setTimeout(() => this.setResults(this.getResults()), 300);
        }
        console.log(this.state.questionId)
    }

    setUserAnswer(answer) {
        this.setState((state, props) => ({
            answersCount: {
                ...state.answersCount,
                [answer]: (state.answersCount[answer] || 0) + 1
            },
            answer: answer
        }));
        console.log(answer)
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
        const answersCountValues = answersCountValuesOld.filter((key) => {
            return key !== answersCount.мусор
        });
        const target = answersCount.цель;
        const means = answersCount.средство;
        const resulttarget = answersCount.результат
        const lie = answersCount.Брехня;

        const maxAnswerCount = Math.max.apply(null, answersCountValues);
        console.log(answersCount.цель);
        console.log(answersCount.средство);
        console.log(answersCount.результат);
        console.log(answersCount.Брехня);
        console.log(answersCount.мусор);
        console.log(answersCountValuesOld);
        console.log(answersCountValues);
        console.log(answersCountKeys.filter(key => answersCount[key] === maxAnswerCount));
        return [target, means, resulttarget, lie, answersCountKeys.filter(key => answersCount[key] === maxAnswerCount),
        ]
    }

    setResults(result) {
        this.setState({result: result});
        console.log(result);
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
        return <Result quizResult={this.state.result}/>;
    }
    render() {
        return (<div>
      <span>
          <h4 className='text-center' style={{
              border: "3px solid #8bc53f"
          }}> Тест "Цель – Средство – Результат"</h4>
        Инструкция. В опроснике содержится несколько десятков утверждений, касающихся вашего характера, поведения. К опроснику приложен бланк ответов. Номер на бланке ответа соответствует номеру утверждения. Прочтите каждое утверждение и решите, верно оно или нет. Если вы решили, что данное утверждение верно, поставьте плюс на бланке ответов рядом с номером, соответствующим номеру утверждения. Если утверждение по отношению к вам неверно, поставьте минус. Если утверждение по отношению к вам бывает верно или неверно в разные периоды вашей жизни, выбирайте решение так, как это правильно в настоящее время.
        </span>
                {this.state.result ? this.renderResult() : this.renderQuiz()}

            </div>
        );
    }
}

