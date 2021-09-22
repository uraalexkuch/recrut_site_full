import React, {Component} from 'react';
import QuestionList from './components/question_list';
import ScoreBox from './components/score_box';
import Results from './components/results';
import quizQuestion from "./api/quizQuestion";
import Button from "react-bootstrap/Button";
import '../TestMotiv/Test.css';

export default class TestMotiv extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: quizQuestion,
            score: 0,
            current: 1,
            name: "Тест Мотивация успеха и боязнь неудачи",
        }
    }
    newTest = () => {
        this.setState({
            questions: quizQuestion,
            score: 0,
            current: 1,
        });
    }
    setCurrent(current) {
        console.log(current)
        this.setState({current});

    }
    setScore(score) {
        this.setState({score});
    }
    render() {
        let scorebox, results;
        if (this.state.current > this.state.questions.length) {
            scorebox = '';
            results = <Results {...this.state} />
        } else {
            scorebox = <ScoreBox {...this.state} />
            results = '';
        }
        return (<>
                <div >
                    <h4  className='text-center' style={{
                        border:"3px solid #8bc53f"
                    }}>Тест "Мотивация успеха и боязнь неудачи"</h4>
                    <label>Инструкция:<br/>отвечая на нижеприведенные вопросы, необходимо выбрать ответ «да» или «нет».
                        Если Вы затрудняетесь с ответом, то вспомните, что «да» объединяет как явное «да», так и «скорее
                        да, чем нет». То же относится и к ответу «нет»: он объединяет явное «нет» и «скорее нет, чем
                        да».
                        Отвечать на вопросы следует быстро, не задумываясь надолго. Ответ, который первый приходит в
                        голову, как: правило, является и наиболее точным.
                    </label>
                    <p className="lead"/>
                    <hr/>
                    <div className="container">
                    {scorebox}
                    <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)}
                                  setScore={this.setScore.bind(this)}/>
                    {results}
                </div>
                </div>
                {results ?
                    <div>
                        <Button onClick={this.newTest}>
                            З початку
                        </Button>
                    </div> : ""}
            </>
        );
    }
}


