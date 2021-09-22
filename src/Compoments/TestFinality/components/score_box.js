import React, { Component } from 'react';



class ScoreBox extends Component {

  render() {

    return (
      <div className="well">
       Питання {this.props.current} з {this.props.questions.length}
      </div>
    );
  }
}

export default ScoreBox;
