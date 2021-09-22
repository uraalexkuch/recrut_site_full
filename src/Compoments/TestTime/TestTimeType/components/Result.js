import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import {Pie} from 'react-chartjs-2';
import API from "../../../Forum/utils/API";
import swal from "sweetalert";

export default class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultfull: {
        nameTest: "",
        author: "",
        result: "",
      }
    }

  }
  parseJwt() {
    localStorage.getItem('userInfo')
    const user = JSON.parse(localStorage.getItem('userInfo'));
    let token = user.accessToken;
    let base64Url = token.split(".")[1];
    let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    let jsonPayload = decodeURIComponent(
        atob(base64)
            .split("")
            .map(function (c) {
              return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join("")
    );
    console.log(JSON.parse(jsonPayload).id)
    return JSON.parse(jsonPayload).id;

  }
  setResult = () => {
    let id = this.parseJwt();
   let type= this.props.quizResult[4];
let domin =this.props.quizResult[0];
let iniz =this.props.quizResult[1];
let post =this.props.quizResult[2];
  let otv =this.props.quizResult[3];
            let resultfull = `тип основной поведения: ${type},  доминантный: ${domin},
            инициативный: ${iniz},  постоянный: ${post}, ответственный: ${otv} `
    this.setState({
          resultfull: {
            nameTest: "«Определение типа временного поведения»",
            author: id,
            result: resultfull,
                     }
        },
        this.setData
    );

  }
  setData = async () => {
    const resultfull = this.state.resultfull

    API.post('/testing/add/', resultfull)
        .then(response => {
              console.log(response)
              if (response) {
                swal("Ваш результат збережено!",)
              }
            },
            error => {
              swal("Error!");
            }
        );
    console.log(this.state.resultfull)
  }
  componentDidMount() {
    this.setResult()
    console.log(this.setResult)
  }
  render() {

    const data = {
      labels: [
        'доминантный',
        'инициативный',
        'постоянный',
        `ответственный`
      ],
      datasets: [{
        data: [(this.props.quizResult[0]/(this.props.quizResult[0]+this.props.quizResult[1]+this.props.quizResult[2]+this.props.quizResult[3]))*100,
          (this.props.quizResult[1]/(this.props.quizResult[0]+this.props.quizResult[1]+this.props.quizResult[2]+this.props.quizResult[3]))*100,
          (this.props.quizResult[2]/(this.props.quizResult[0]+this.props.quizResult[1]+this.props.quizResult[2]+this.props.quizResult[3]))*100,
          (this.props.quizResult[3]/(this.props.quizResult[0]+this.props.quizResult[1]+this.props.quizResult[2]+this.props.quizResult[3]))*100],
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
        Ваш тип основний поведінки: <h4 style={{color:"red"}}> {this.props.quizResult[4]}</h4> <br/>Детальна розбивка на співвідношення:
        <span><br/> доминантный на:<strong>{(this.props.quizResult[0]/(this.props.quizResult[0]+this.props.quizResult[1]+this.props.quizResult[2]+this.props.quizResult[3]))*100+'%'}</strong>!
                    <br/>инициативный на :<strong>{(this.props.quizResult[1]/(this.props.quizResult[0]+this.props.quizResult[1]+this.props.quizResult[2]+this.props.quizResult[3]))*100+'%'}</strong>!</span>
        <span><br/> постоянный на:<strong>{(this.props.quizResult[2]/(this.props.quizResult[0]+this.props.quizResult[1]+this.props.quizResult[2]+this.props.quizResult[3]))*100+'%'}</strong>!
                <br/> ответственный на:<strong>{(this.props.quizResult[3]/(this.props.quizResult[0]+this.props.quizResult[1]+this.props.quizResult[2]+this.props.quizResult[3]))*100+'%'}</strong>! <br/></span>
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


