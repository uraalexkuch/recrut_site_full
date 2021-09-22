import React, { Component } from 'react';


class Results extends Component {

  render() {
  	const percent = this.props.score / this.props.questions.length * 100;
  	 
  	let message;
  	if (percent > 80) {
  		message = 'Відмінні знання';
  	} else if (percent < 80 && percent >= 60) {
  		message = "Достатній рівень";
  	} else {
  		message = "Вибачте,повторіть курс ще раз....";
  	}

    return (
      <div className="well">
        <h4>Кількість відповідей {this.props.score} з {this.props.questions.length}  є правильними</h4>
        <h1>{percent}% - {message}</h1>
        <hr />

      </div>
    );
  }
}

export default Results;
