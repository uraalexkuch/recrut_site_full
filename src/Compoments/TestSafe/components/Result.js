import React from 'react';
import PropTypes from 'prop-types';
import {CSSTransitionGroup} from 'react-transition-group';
import {Radar} from 'react-chartjs-2';

function Result(props) {
  const negativ = Math.round(props.quizResult[0] / 13 * 100);
  const press = Math.round(props.quizResult[1] / 12 * 100);
  const regresion = Math.round(props.quizResult[2] / 14 * 100);
  const compesation = Math.round(props.quizResult[3] / 10 * 100);
  const proection = Math.round(props.quizResult[4] / 13 * 100);
  const copying = Math.round(props.quizResult[5] / 13 * 100);
  const intelect = Math.round(props.quizResult[6] / 12 * 100);
  const reactiv = Math.round(props.quizResult[7] / 10 * 100);
  const data = {
    labels: [
      'Заперечення',
      'Придушення',
      'Регресія',
      `Компенсація`,
      'Проекція',
      'Заміщення',
      'Інтелектуалізація',
      'Реактивність'
    ],
    datasets: [{
      label: 'Площина психологічного захисту',
      backgroundColor: '#FFFF00',
      borderColor: '#36A2EB',
      pointBackgroundColor: [
        '#FF6384',
        "#00FF00",
        "#36A2EB",
        "#FFCE56",
        "#8B008B",
        "#FFFF00",
        "#696969",
        "#00CED1",
      ],
      pointBorderColor: '#FF6384',
      pointHoverBackgroundColor: '#FFCE56',
      pointHoverBorderColor: '#FFCE56)',
      data: [negativ, press, regresion, compesation, proection, copying, intelect, reactiv],

    }]
  };


  console.log(props.quizResult)
  console.log(Math.max.apply(null, props.quizResult));
  return (
      <CSSTransitionGroup
          className="container result"
          component="div"
          transitionName="fade"
          transitionEnterTimeout={800}
          transitionLeaveTimeout={500}
          transitionAppear
          transitionAppearTimeout={500}
      >
        <div>
          Ваш основний тип психологічного захисту: <h4 style={{color: "red"}}> {props.quizResult[8]}</h4>
          <br/>Детальна розбивка на співвідношення:
          <br/> Заперечення:<strong>{negativ + '%'}</strong>!
          <br/>Придушення :<strong>{press + '%'}</strong>!
          <br/>Регресія:<strong>{regresion + '%'}</strong>!
          <br/> Компенсація:<strong>{compesation + '%'}</strong>!
          <br/>Проекція:<strong>{proection + '%'}</strong>!
          <br/> Заміщення:<strong>{copying + '%'}</strong>!
          <br/> Інтелектуалізація:<strong>{intelect + '%'}</strong>!
          <br/> Реактивність:<strong>{reactiv + '%'}</strong>!
          <br/><br/>
          З докладним описом ознайомтесь в матеріалах треннігу.
          <Radar data={data}/>
        </div>
      </CSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
