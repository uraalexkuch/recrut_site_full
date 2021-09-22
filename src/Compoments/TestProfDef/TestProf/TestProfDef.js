import React, {Component} from 'react';
import Quiz from "../../TestProfDef/TestProf/components/Quiz";
import Result from "../../TestProfDef/TestProf/components/Result";
import quizQuestionsDef from "../TestProf/api/quizQuestionsTarget";




export default class TestProfDef extends Component {

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
        const shuffledAnswerOptions = quizQuestionsDef.map(question =>
            this.shuffleArray(question.answers),
        );
        this.setState({
            question: quizQuestionsDef[0].question,
            answerOptions: shuffledAnswerOptions[0]
        });
        console.log(quizQuestionsDef);
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
        if (this.state.questionId < quizQuestionsDef.length) {
            console.log(quizQuestionsDef.length)
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
            question: quizQuestionsDef[counter].question,
            answerOptions: quizQuestionsDef[counter].answers,
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
        const target = answersCount.чувствительность;
        const means = answersCount.переживания;
      //  const maxAnswerCount = Math.max.apply(null, answersCountValues);
        console.log(answersCount.чувствительность);
        console.log(answersCount.переживания);
      //  console.log(answersCount.мусор);
        //console.log(answersCountValuesOld);
        //console.log(answersCountValues);
        //console.log(answersCountKeys.filter(key => answersCount[key] === maxAnswerCount));
        return [target, means ]
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
                questionTotal={quizQuestionsDef.length}
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
          }}> Опросник ролевой компетенции</h4>
        Инструкция.<br/> Внимательно прочтите приведенные ниже утверждения и оцените их по критерию соответствия или несоответствия вашему собственному поведению. Если утверждение в большинстве случаев относится к Вам, Вы ставите оценку «Да». Если оно редко совпадает с Вашим настоящим поведением, Вы ставите оценку «Нет».
        </span>
                {this.state.result ? this.renderResult() : this.renderQuiz()}

            </div>
        );
    }
}

