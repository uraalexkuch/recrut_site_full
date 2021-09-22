import React, {Component} from 'react';

import swal from "sweetalert";

import API from '../../Forum/utils/API';

class Results extends Component {

    constructor(props) {
        super(props);
        this.state = {
            resultfull: {
                nameTest: "",
                author: "",
                result: "",
                modul: ""
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
    setResult = () => {
        let id = this.parseJwt();
        const percent = this.props.score / this.props.questions.length * 100;
        let message;
        if (percent >= 80) {
            message = 'Відмінні знання';
        } else if (percent < 80 && percent >= 60) {
            message = "Достатній рівень";
        } else {
            message = "Вибачте,повторіть курс ще раз....";
        }
        let resultfull = `${percent}% ${message}`
        this.setState({
                resultfull: {
                    nameTest: this.props.name,
                    author: id,
                    result: resultfull,
                    resultNumber: percent,
                    modul: this.props.modul_id
                }
            },
            this.setData
        );

    }

    componentDidMount() {
        this.setResult()
        console.log(this.setResult)
    }

    render() {
        this.setResult.bind(this)
        const percent = this.props.score / this.props.questions.length * 100;
        let message;
        if (percent >= 80) {
            message = 'Відмінні знання';
        } else if (percent < 80 && percent >= 60) {
            message = "Достатній рівень";
        } else {
            message = "Вибачте,повторіть курс ще раз....";
        }
        let resultfull = `${percent}% ${message}`
        console.log(resultfull)

        console.log(this.state)
        return (

            <div className="well">
                <h4>Кількість відповідей {this.props.score} з {this.props.questions.length} є правильними</h4>
                <h1>{percent}% - {message}</h1>


            </div>
        );
    }
}

export default Results;
