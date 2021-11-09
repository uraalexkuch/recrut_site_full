import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {CSSTransitionGroup} from 'react-transition-group';
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
        this.setResult = this.setResult.bind(this);
        this.parseJwt = this.parseJwt.bind(this);
    }

    parseJwt = () => {
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
        const sim0 = this.props.quizResult[0];
        const sim01 = this.props.quizResult[0] >= 16 ? "сложившийся симптом" : this.props.quizResult[0] <= 15 && this.props.quizResult[0] >= 10 ? "складывающийся симптом" : "несложившийся симптом";
        const sim1 = this.props.quizResult[1];
        const sim11 = this.props.quizResult[1] >= 16 ? "сложившийся симптом" : this.props.quizResult[1] <= 15 && this.props.quizResult[1] >= 10 ? "складывающийся симптом" : "несложившийся симптом";
        const sim2 = this.props.quizResult[2];
        const sim21 = this.props.quizResult[2] >= 16 ? "сложившийся симптом" : this.props.quizResult[2] <= 15 && this.props.quizResult[2] >= 10 ? "складывающийся симптом" : "несложившийся симптом";
        const sim3 = this.props.quizResult[3];
        const sim31 = this.props.quizResult[3] >= 16 ? "сложившийся симптом" : this.props.quizResult[3] <= 15 && this.props.quizResult[3] >= 10 ? "складывающийся симптом" : "несложившийся симптом";
        const sim4 = this.props.quizResult[4];
        const sim41 = this.props.quizResult[4] >= 16 ? "сложившийся симптом" : this.props.quizResult[4] <= 15 && this.props.quizResult[4] >= 10 ? "складывающийся симптом" : "несложившийся симптом";
       const allsim= (this.props.quizResult[0] + this.props.quizResult[1] + this.props.quizResult[2] + this.props.quizResult[3] + this.props.quizResult[4])<= 45?"отсутствиe «выгорания»"
           :(this.props.quizResult[0] + this.props.quizResult[1] + this.props.quizResult[2] + this.props.quizResult[3] + this.props.quizResult[4])<=46 && (this.props.quizResult[0] + this.props.quizResult[1] + this.props.quizResult[2] + this.props.quizResult[3] + this.props.quizResult[4])<= 75
               ?"начинающееся «выгорание»":"имеется «выгорание»."
        let resultfull = `Симптом Неудовлетворенность собой : ${sim0},степень развития: ${sim01} ,
        Симптом Загнанность в клетку : ${sim1},степень развития: ${sim11},
       Симптом Редукция профессиональных обязанностей: ${sim2},степень развития: ${sim21},
       Симптом Эмоциональная отстраненность: ${sim3},степень развития: ${sim31},
       Симптом Личностная отстраненность (деперсонализация): ${sim4},степень развития: ${sim41},
       Состояние выгорания:  ${allsim}`
        this.setState({
                resultfull: {
                    nameTest: "Методика «Диагностика уровня эмоционального выгорания»»",
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
        this.setResult.bind(this)

        const data = {
            labels: [
                'Неудовлетворенность собой',
                'Загнанность в клетку',
                'Редукция профессиональных обязанностей',
                `Эмоциональная отстраненность`,
                'Личностная отстраненность (деперсонализация) '
            ],
            datasets: [{
                data: [this.props.quizResult[0] / (this.props.quizResult[0] + this.props.quizResult[1] + this.props.quizResult[2] + this.props.quizResult[3] + this.props.quizResult[4]) * 100,
                    this.props.quizResult[1] / (this.props.quizResult[0] + this.props.quizResult[1] + this.props.quizResult[2] + this.props.quizResult[3] + this.props.quizResult[4]) * 100,
                    this.props.quizResult[2] / (this.props.quizResult[0] + this.props.quizResult[1] + this.props.quizResult[2] + this.props.quizResult[3] + this.props.quizResult[4]) * 100,
                    this.props.quizResult[3] / (this.props.quizResult[0] + this.props.quizResult[1] + this.props.quizResult[2] + this.props.quizResult[3] + this.props.quizResult[4]) * 100,
                    this.props.quizResult[4] / (this.props.quizResult[0] + this.props.quizResult[1] + this.props.quizResult[2] + this.props.quizResult[3] + this.props.quizResult[4]) * 100],
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
                    Симптом «Неудовлетворенность собой»:<h4 style={{color: "red"}}> {this.props.quizResult[0]}</h4>
                    <h4>степень
                        развития: {this.props.quizResult[0] >= 16 ? "сложившийся симптом" : this.props.quizResult[0] <= 15 && this.props.quizResult[0] >= 10 ? "складывающийся симптом" : "несложившийся симптом"}</h4>
                    <br/>

                    Симптом «Загнанность в клетку»:<h4 style={{color: "red"}}> {this.props.quizResult[1]}</h4>
                    <h4>степень
                        развития: {this.props.quizResult[1] >= 16 ? "сложившийся симптом" : this.props.quizResult[1] <= 15 && this.props.quizResult[1] >= 10 ? "складывающийся симптом" : "несложившийся симптом"}</h4>
                    <br/>
                    Симптом «Редукция профессиональных обязанностей»:<h4
                    style={{color: "red"}}> {this.props.quizResult[2]}</h4> <h4>степень
                    развития: {this.props.quizResult[2] >= 16 ? "сложившийся симптом" : this.props.quizResult[2] <= 15 && this.props.quizResult[2] >= 10 ? "складывающийся симптом" : "несложившийся симптом"}</h4>
                    <br/>
                    Симптом «Эмоциональная отстраненность»:<h4 style={{color: "red"}}> {this.props.quizResult[3]}</h4>
                    <h4>степень
                        развития: {this.props.quizResult[3] >= 16 ? "сложившийся симптом" : this.props.quizResult[3] <= 15 && this.props.quizResult[3] >= 10 ? "складывающийся симптом" : "несложившийся симптом"}</h4>
                    <br/>
                    Симптом «Личностная отстраненность (деперсонализация):<h4
                    style={{color: "red"}}> {this.props.quizResult[4]}</h4> <h4>степень
                    развития: {this.props.quizResult[4] >= 16 ? "сложившийся симптом" : this.props.quizResult[4] <= 15 && this.props.quizResult[4] >= 10 ? "складывающийся симптом" : "несложившийся симптом"}</h4>
                    <br/>
                    Состояние выгорания:<h4
                    style={{color: "red"}}>  {(this.props.quizResult[0] + this.props.quizResult[1] + this.props.quizResult[2] + this.props.quizResult[3] + this.props.quizResult[4])<= 45?"отсутствиe «выгорания»"
                    :(this.props.quizResult[0] + this.props.quizResult[1] + this.props.quizResult[2] + this.props.quizResult[3] + this.props.quizResult[4])<=46 && (this.props.quizResult[0] + this.props.quizResult[1] + this.props.quizResult[2] + this.props.quizResult[3] + this.props.quizResult[4])<= 75
                    ?"начинающееся «выгорание»":"имеется «выгорание»."}</h4>

                    <br/>

                    <Pie data={data}/>
                </div>
            </CSSTransitionGroup>
        );
    }
}
Result.propTypes = {
    quizResult: PropTypes.string.isRequired
};