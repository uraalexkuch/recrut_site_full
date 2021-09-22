import React, {Component} from 'react';
import '../Test.css';
import ListGroup from "react-bootstrap/ListGroup";

class Question extends Component {

    onChange(e) {
        e.preventDefault();
        const {setCurrent, setScore, question} = this.props;
        let selected = e.target.value;
        if (selected == question.correct) {
            setScore(this.props.score + 1);
        }
        setCurrent(this.props.current + 1);
    }
    render() {
        const {question} = this.props;
        return (
            <div className="questionCount">
                <h4 className="question">{question.text}</h4>
                <hr/>
                <ListGroup className="answerOptions">
                    {this.props.question.choices.map(choice => {
                        return (
                            <label className="radio">
                                <ListGroup.Item key={choice.id}>

                                    <input
                                        type="radio"
                                        onChange={this.onChange.bind(this)}
                                        name={question.id}
                                        value={choice.id}
                                        checked={question.id === choice.text}
                                    />
                                    <div className="radio__text"> {choice.text}</div>
                                </ListGroup.Item>
                            </label>
                        )
                    })}
                </ListGroup>
            </div>
        );
    }
}

export default Question;
