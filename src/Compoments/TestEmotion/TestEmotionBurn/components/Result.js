import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import {Pie} from 'react-chartjs-2';
import API from "../../../Forum/utils/API";
import swal from "sweetalert";

export default  function Result(props) { {




  {/*setResult = () => {
    let id = this.parseJwt();

    let resultfull = `Симптом Неудовлетворенность собой : ${props.quizResult[0]}, степень развития:: ${his.props.quizResult[0] >= 16?"сложившийся симптом":props.quizResult[0] <= 15 && props.quizResult[0] >= 10?"складывающийся симптом":"несложившийся симптом"},
        Симптом Неудовлетворенность собой : ${props.quizResult[0]}, степень развития:: ${his.props.quizResult[0] >= 16?"сложившийся симптом":props.quizResult[0] <= 15 && props.quizResult[0] >= 10?"складывающийся симптом":"несложившийся симптом"},
        Симптом Неудовлетворенность собой : ${props.quizResult[0]}, степень развития:: ${his.props.quizResult[0] >= 16?"сложившийся симптом":props.quizResult[0] <= 15 && props.quizResult[0] >= 10?"складывающийся симптом":"несложившийся симптом"},
        Симптом Неудовлетворенность собой : ${props.quizResult[0]}, степень развития:: ${his.props.quizResult[0] >= 16?"сложившийся симптом":props.quizResult[0] <= 15 && props.quizResult[0] >= 10?"складывающийся симптом":"несложившийся симптом"},
        Симптом Неудовлетворенность собой : ${props.quizResult[0]}, степень развития:: ${his.props.quizResult[0] >= 16?"сложившийся симптом":props.quizResult[0] <= 15 && props.quizResult[0] >= 10?"складывающийся симптом":"несложившийся симптом"}
          `

        //'Симптом Неудовлетворенность собой : ${props.quizResult[0]}, степень развития: ${props.quizResult[0] >= 16?"сложившийся симптом":props.quizResult[0] <= 15 && props.quizResult[0] >= 10?"складывающийся симптом":"несложившийся симптом"}'
          //Симптом Загнанность в клетку: ${props.quizResult[1]},  степень развития: ${props.quizResult[1] >= 16?"сложившийся симптом":props.quizResult[1] <= 15 && props.quizResult[1] >= 10?"складывающийся симптом":"несложившийся симптом"},
       // Симптом Редукция профессиональных обязанностей: ${props.quizResult[2]} , степень развития:${props.quizResult[2] >= 16?"сложившийся симптом":props.quizResult[2] <= 15 && props.quizResult[2] >= 10?"складывающийся симптом":"несложившийся симптом"},
       // Симптом Эмоциональная отстраненность: ${props.quizResult[3]}, степень развития: ${props.quizResult[3] >= 16?"сложившийся симптом":props.quizResult[3] <= 15 && props.quizResult[3] >= 10?"складывающийся симптом":"несложившийся симптом"},
       // Симптом Личностная отстраненность (деперсонализация):${props.quizResult[4]},  степень развития:${props.quizResult[4] >= 16?"сложившийся симптом":props.quizResult[4] <= 15 && props.quizResult[4] >= 10?"складывающийся симптом":"несложившийся симптом"}'

    this.setState({
          resultfull: {
            nameTest: "Методика «Диагностика уровня эмоционального выгорания»»",
            author: id,
            result: resultfull,
          }
        },
        this.setData
    );

  }*/}




  const data = {
    labels: [
      'Неудовлетворенность собой',
      'Загнанность в клетку',
      'Редукция профессиональных обязанностей',
      `Эмоциональная отстраненность`,
      'Личностная отстраненность (деперсонализация) '
    ],
    datasets: [{
      data: [props.quizResult[0]/(props.quizResult[0]+props.quizResult[1]+props.quizResult[2]+props.quizResult[3]+props.quizResult[4])*100,
        props.quizResult[1]/(props.quizResult[0]+props.quizResult[1]+props.quizResult[2]+props.quizResult[3]+props.quizResult[4])*100,
        props.quizResult[2]/(props.quizResult[0]+props.quizResult[1]+props.quizResult[2]+props.quizResult[3]+props.quizResult[4])*100,
        props.quizResult[3]/(props.quizResult[0]+props.quizResult[1]+props.quizResult[2]+props.quizResult[3]+props.quizResult[4])*100,
        props.quizResult[4]/(props.quizResult[0]+props.quizResult[1]+props.quizResult[2]+props.quizResult[3]+props.quizResult[4])*100],
      backgroundColor: [
        '#FF6384',
        `#00FF00`,
        '#36A2EB',
        '#FFCE56',
        '#7c5905',
      ],
      hoverBackgroundColor: [
        '#FF6384',
        `#00FF00`,
        '#36A2EB',
        '#FFCE56',
        '#7c5905',
      ]
    }]
  };
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
        Симптом «Неудовлетворенность собой»:<h4 style={{color:"red"}}> {props.quizResult[0]}</h4><h4>степень развития: {props.quizResult[0] >= 16?"сложившийся симптом":props.quizResult[0] <= 15 && props.quizResult[0] >= 10?"складывающийся симптом":"несложившийся симптом"}</h4> <br/>

        Симптом «Загнанность в клетку»:<h4 style={{color:"red"}}> {props.quizResult[1]}</h4><h4>степень развития: {props.quizResult[1] >= 16?"сложившийся симптом":props.quizResult[1] <= 15 && props.quizResult[1] >= 10?"складывающийся симптом":"несложившийся симптом"}</h4> <br/>
        Симптом «Редукция профессиональных обязанностей»:<h4 style={{color:"red"}}> {props.quizResult[2]}</h4> <h4>степень развития: {props.quizResult[2] >= 16?"сложившийся симптом":props.quizResult[2] <= 15 && props.quizResult[2] >= 10?"складывающийся симптом":"несложившийся симптом"}</h4> <br/>
        Симптом «Эмоциональная отстраненность»:<h4 style={{color:"red"}}> {props.quizResult[3]}</h4> <h4>степень развития: {props.quizResult[3] >= 16?"сложившийся симптом":props.quizResult[3] <= 15 && props.quizResult[3] >= 10?"складывающийся симптом":"несложившийся симптом"}</h4> <br/>
        Симптом «Личностная отстраненность (деперсонализация):<h4 style={{color:"red"}}> {props.quizResult[4]}</h4> <h4>степень развития: {props.quizResult[4] >= 16?"сложившийся симптом":props.quizResult[4] <= 15 && props.quizResult[4] >= 10?"складывающийся симптом":"несложившийся симптом"}</h4> <br/>

        <br/>

        <Pie data={data} />
      </div>
    </CSSTransitionGroup>
  );
}
}
Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};
