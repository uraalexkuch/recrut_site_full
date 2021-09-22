import React, {Component} from 'react';
import QuestionList from './components/question_list';
import ScoreBox from './components/score_box';
import Results from './components/results';
import quizQuestion from "./api/quizQuestion";
import Button from "react-bootstrap/Button";



class TestOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: quizQuestion,
            score: 0,
            current: 1,
            name:"Тест до модуля 1",
            modul_id:sessionStorage.getItem("0")
        }

    }
    newTest = () => {
        this.setState({
            questions:quizQuestion  ,
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
            <div>
                <h1>Тест до модуля 1</h1>
                <p className="lead" />
                <hr/>
                {scorebox}
                <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)}
                              setScore={this.setScore.bind(this)}/>

                {results}

            </div>
                {results?
        <div>
            <Button onClick={this.newTest}>
               З початку
            </Button>
        </div>:""}
            </>
        );
    }
}

export default TestOne;
