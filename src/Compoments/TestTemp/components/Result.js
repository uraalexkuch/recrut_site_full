import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import {Pie} from 'react-chartjs-2';
function Result(props) {
  const data = {
    labels: [
      'Холерик',
      'Сангвінік',
      'Флегматик',
      `Меланхолік`
    ],
    datasets: [{
      data: [props.quizResult[0]/20*100,props.quizResult[1]/20*100, props.quizResult[2]/20*100,props.quizResult[3]/20*100],
      backgroundColor: [
        '#FF6384',
        `#00FF00`,
        '#36A2EB',
        '#FFCE56',
      ],
      hoverBackgroundColor: [
        '#FF6384',
        `#00FF00`,
        '#36A2EB',
        '#FFCE56',
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
        Ваш тип основний темперанту: <h4 style={{color:"red"}}> {props.quizResult[4]}</h4> <br/>Детальна розбивка на співвідношення:
        <span><br/> Холерик на:<strong>{props.quizResult[0]/20*100+'%'}</strong>!
                    <br/>Сангвінік на :<strong>{props.quizResult[1]/20*100+'%'}</strong>!</span>
        <span><br/> Флегматик на:<strong>{props.quizResult[2]/20*100+'%'}</strong>!
                <br/> Меланхолік на:<strong>{props.quizResult[3]/20*100+'%'}</strong>! <br/></span>
        <br/>
        Якщо відносний результат числа позитивних відповідей по якомусь типу становить<b> 40%</b> і вище, виходить,
        даний тип темпераменту є у вас домінуючим,<br/> якщо <b>30 - 39% </b>- то якості даного типу виражені досить
        яскраво,<br/> якщо <b>20 - 29%</b>, то якості даного типу виражені середньо, <br/>якщо<b> 10 - 19%</b>, то якості даного
        темпераменту виражені в малому ступені.<br/>
        Пам'ятайте, що не існує ні хороших, ні поганих темпераментів.<br/>
        З докладним описом ознайомтесь в матеріалах треннігу.
        <Pie data={data} />
      </div>
    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
