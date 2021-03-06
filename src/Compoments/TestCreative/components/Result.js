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
        const sim0 = this.props.quizResult[0]=== undefined ? 0 : this.props.quizResult[0];
        const sim01 = sim0 >= 14 ? "высокий" : sim0 <= 13 && sim0 >= 8 ? "средний" : "низкий";
        const sim1 = this.props.quizResult[1]=== undefined ? 0 : this.props.quizResult[1];
        const sim11 = sim1 >= 14 ? "высокий" : sim1 <= 13 && sim1 >= 8 ? "средний" : "низкий";
        const sim2 = this.props.quizResult[2]=== undefined ? 0 : this.props.quizResult[2];
        const sim21 = sim2 >= 14 ? "высокий" : sim2 <= 13 && sim2 >= 8 ? "средний" : "низкий";
        const sim3 = this.props.quizResult[3]=== undefined ? 0 : this.props.quizResult[3];
        const sim31 = sim3 >= 14 ? "высокий" : sim3 <= 13 && sim3 >= 8 ? "средний" : "низкий";
        const sim4 = this.props.quizResult[4]=== undefined ? 0 : this.props.quizResult[4];
        const sim41 = sim4 >= 14 ? "высокий" : sim4 <= 13 && sim4 >= 8 ? "средний" : "низкий";
        const allsim = (sim0 + sim1 + sim2 + sim3 + sim4) <= 39 ? "низкий"
            : (sim0 + sim1 + sim2 + sim3 + sim4) >= 40 && (sim0 + sim1 + sim2 + sim3 + sim4) <= 69
                ? "средний" : "высокий"
        let resultfull = `Эмоциональная осведомленность : ${sim0},степень развития: ${sim01} ,
        Управление своими эмоциями : ${sim1},степень развития: ${sim11},
       Самомотивация: ${sim2},степень развития: ${sim21},
       Эмпатия: ${sim3},степень развития: ${sim31},
       Распознавание эмоций других людей: ${sim4},степень развития: ${sim41},
       Интегративный уровень эмоционального интеллекта:  ${allsim}`
        this.setState({
                resultfull: {
                    nameTest: "Тест на определение уровня Эмоционального Интеллекта",
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
        const sim0 = this.props.quizResult[0] === undefined ? 0 : this.props.quizResult[0];
        const sim1 = this.props.quizResult[1] === undefined ? 0 : this.props.quizResult[1];
        const sim2 = this.props.quizResult[2] === undefined ? 0 : this.props.quizResult[2];
        const sim3 = this.props.quizResult[3] === undefined ? 0 : this.props.quizResult[3];
        const sim4 = this.props.quizResult[4] === undefined ? 0 : this.props.quizResult[4];
        const data = {
            labels: [
                'Эмоциональная осведомленность',
                'Управление своими эмоциями',
                'Самомотивация',
                `Эмпатия`,
                'Распознавание эмоций других людей'
            ],
            datasets: [{
                data: [sim0 / (sim0 + sim1 + sim2 + sim3 + sim4) * 100,
                    sim1 / (sim0 + sim1 + sim2 + sim3 + sim4) * 100,
                    sim2 / (sim0 + sim1 + sim2 + sim3 + sim4) * 100,
                    sim3 / (sim0 + sim1 + sim2 + sim3 + sim4) * 100,
                    sim4 / (sim0 + sim1 + sim2 + sim3 + sim4) * 100],
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
                    Уровень «Эмоциональная осведомленность» эмоционального интеллекта :<h4
                    style={{color: "red"}}> {sim0}</h4>
                    <h4>степень
                        развития: {sim0 >= 14 ? "высокий" : sim0 <= 13 && sim0 >= 8 ? "средний" : "низкий"}</h4>
                    <br/>
                    Уровень «Управление своими эмоциями» эмоционального интеллекта:<h4
                    style={{color: "red"}}> {sim1}</h4>
                    <h4>степень
                        развития: {sim1 >= 14 ? "высокий" : sim1 <= 13 && sim1 >= 8 ? "средний" : "низкий"}</h4>
                    <br/>
                    Уровень «Самомотивация» эмоционального интеллекта:<h4
                    style={{color: "red"}}> {sim2}</h4> <h4>степень
                    развития: {sim2 >= 14 ? "высокий" : sim2 <= 13 && sim2 >= 8 ? "средний" : "низкий"}</h4>
                    <br/>
                    Уровень «Эмпатия» эмоционального интеллекта :<h4
                    style={{color: "red"}}> {sim3}</h4>
                    <h4>степень
                        развития:{sim3 >= 14 ? "высокий" : sim3 <= 13 && sim3 >= 8 ? "средний" : "низкий"}</h4>
                    <br/>
                    Уровень «Распознавание эмоций других людей» эмоционального интеллекта :<h4
                    style={{color: "red"}}> {sim4}</h4> <h4>степень
                    развития: {sim4 >= 14 ? "высокий" : sim4 <= 13 && sim4 >= 8 ? "средний" : "низкий"}</h4>
                    <br/>
                    Интегративный уровень эмоционального интеллекта :<h4
                    style={{color: "red"}}>  {(sim0 + sim1 + sim2 + sim3 + sim4) <= 39 ? "низкий"
                    : (sim0 + sim1 + sim2 + sim3 + sim4) >= 40 && (sim0 + sim1 + sim2 + sim3 + sim4) <= 69
                        ? "средний" : "высокий"}</h4>

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