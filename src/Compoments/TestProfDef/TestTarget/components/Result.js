import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {CSSTransitionGroup} from 'react-transition-group';
import {Radar} from 'react-chartjs-2';
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
        const lie = this.props.quizResult[3] - (5 - this.props.quizResult[3]) > 0 ? 'Не брешіть собі))' : 'Ви були чесними';
        const target = (this.props.quizResult[0]) - (9 - this.props.quizResult[0]);
        const means = (this.props.quizResult[1]) - (9 - this.props.quizResult[1]);
        const resulttarget = (this.props.quizResult[2]) - (9 - this.props.quizResult[2]);
        let resultfull = `уровень честности: ${lie}, уровень  цель: ${target}, 
         уровень  средство: ${means},  уровень  результат: ${resulttarget} `
        this.setState({
                resultfull: {
                    nameTest: "«Цель – Средство – Результат»",
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
        const lie = this.props.quizResult[3] - (5 - this.props.quizResult[3]) > 0 ? 'Не брешіть собі))' : 'Ви були чесними';
        const target = (this.props.quizResult[0]) - (9 - this.props.quizResult[0]);
        const means = (this.props.quizResult[1]) - (9 - this.props.quizResult[1]);
        const resulttarget = (this.props.quizResult[2]) - (9 - this.props.quizResult[2]);
        console.log(target);
        console.log(means);
        console.log(resulttarget);

        const data = {
            labels: [
                'Цель',
                'Средство',
                `Результат`,

            ],
            datasets: [{
                label: 'Плоскость  определения  поведения',
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
                data: [target, means, resulttarget],

            }]
        };

        const maxAnswerCount = Math.max.apply(null, this.props.quizResult);
        console.log(this.props.quizResult)
        console.log(maxAnswerCount);
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
                    <br/> Уровень честности:<strong>{lie}</strong>

                    <p>уровень  цель: {target}</p>
                    <p>уровень  средство: {means}</p>
                    <p>уровень  результат: {resulttarget}</p>
                    <Radar data={data}/>
                </div>
            </CSSTransitionGroup>
        );
    }
}
Result.propTypes = {
    quizResult: PropTypes.string.isRequired
};

