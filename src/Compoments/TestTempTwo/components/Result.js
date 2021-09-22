import React from 'react';
import PropTypes from 'prop-types';
import {CSSTransitionGroup} from 'react-transition-group';
import {Radar} from 'react-chartjs-2';

function Result(props) {
  const lie = props.quizResult[3] > 10 ? 'Не брешіть собі))' : 'Ви були чесними';
  const extra = Math.round(((props.quizResult[0] / 25) * 100));
  const intra = 100 - Math.round(((props.quizResult[0] / 25) * 100));
  const nejro = Math.round((props.quizResult[1] / 25) * 100);
  const stab = 100 - Math.round(((props.quizResult[1] / 25) * 100));
  const pshyho = Math.round(((props.quizResult[2]/25) * 100));

  const tip = ((extra) + (nejro)) > 100 ? "Холерик" : 0;
  const tipTwo = ((intra) + (nejro)) > 100 ? "Меланхолик" : 0;
  const tipThre = ((extra) + (stab)) > 100 ? "Сангвінік" : 0;
  const tipFour = ((intra) + (stab)) > 100 ? "Флегматик" : 0;
  const temp = [tip, tipTwo, tipThre, tipFour];
  const  conflict= pshyho<5?"Низький рівень конфліктності":5<pshyho<12?"Середній рівень конфліктності":pshyho>12?"Високий рівень конфліктності":"Щось пішло не так";
  const TipChoice = temp.filter((key) => {
    return key !== 0
  });
  const summaryTemp=((extra) + (nejro))+((intra) + (nejro))+((extra) + (stab))+((intra) + (stab));
  console.log(extra);
  console.log(intra);
  console.log(nejro);
  console.log(stab);
  console.log(temp);
  console.log(pshyho);
  const data = {
    labels: [
      'Нестабільний',
      'Екстраверсія',
      `Стабільний`,
      'Інтроверсія',
    ],
    datasets: [{
      label: 'Площина визначення темпераменту',
      backgroundColor: '#FFFF00',
      borderColor: '#36A2EB',
      pointBackgroundColor: [
        '#FF6384',
        "#00FF00",
        "#36A2EB",
        "#FFCE56"
      ],
      pointBorderColor: '#FF6384',
      pointHoverBackgroundColor: '#FFCE56',
      pointHoverBorderColor: '#FFCE56)',
      data: [nejro, extra, stab, intra],

    }]
  };

  const maxAnswerCount = Math.max.apply(null, props.quizResult);
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
          Ваш основний тип темпераменту: <h4 style={{color: "red"}}> {TipChoice}</h4>
          <br/>Детальна розбивка на співвідношення:
          <span><br/> Холерик на:<strong>{Math.round(((extra) + (nejro))/summaryTemp*100)+'%'}</strong>!
                    <br/>Сангвінік на :<strong>{Math.round(((extra) + (stab))/summaryTemp*100)+'%'}</strong>!</span>
          <span><br/> Флегматик на:<strong>{Math.round(((intra) + (stab))/summaryTemp*100)+'%'}</strong>!
                <br/> Меланхолік на:<strong>{Math.round(((intra) + (nejro))/summaryTemp*100)+'%'}</strong>! <br/></span>
          <br/>
          Якщо відносний результат числа позитивних відповідей по якомусь типу становить<b> 40%</b> і вище, виходить,
          даний тип темпераменту є у вас домінуючим,<br/> якщо <b>30 - 39% </b>- то якості даного типу виражені досить
          яскраво,<br/> якщо <b>20 - 29%</b>, то якості даного типу виражені середньо, <br/>якщо<b> 10 - 19%</b>, то якості даного
          темпераменту виражені в малому ступені.<br/>
          Пам'ятайте, що не існує ні хороших, ні поганих темпераментів.<br/>
          <br/> Рівень відвертості:<strong>{lie}</strong>!
          <br/> Рівень конфліктності:<strong>{conflict}</strong>!<br/>
          <br/>Детальна розбивка на співвідношення:
          <br/> Екстраверсія:<strong>{extra + '%'}</strong>!
          <br/> Інтраверсія:<strong>{intra + '%'}</strong>!
          <br/>Нестабільний :<strong>{nejro + '%'}</strong>!
          <br/>Стабільний:<strong>{stab + '%'}</strong>!
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
