import React, { Component } from 'react';



class ScoreBox extends Component {

  render() {

    return (
      <div className="questionCount">
      Вопросы {this.props.current} с {this.props.questions.length}
      </div>
    );
  }
}

export default ScoreBox;
