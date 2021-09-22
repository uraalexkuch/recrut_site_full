import React, {Component} from 'react';
import axios from "axios";
import swal from "sweetalert";
import Cert from "../Certificate/Cert";
import CertShablon from "../Certificate/CertІShablon";


class Results extends Component {

    constructor(props) {
        super(props);
        this.theDiv = React.createRef();

        const today = new Date(),
            date = today.date = today.getFullYear();
        this.state = {
            date: date,
            name: "",
            surname: "",
            user: false,
            resultfull: {
                nameTest: "",
                author: "",
                result: ""
            },
            showModuls: true,
            load:false

        };
    }

    logInig = () => {
        let userInfo = JSON.parse(localStorage.getItem("userInfo"));
        this.setState({
            name: userInfo.name,
            surname: userInfo.surname,
        })
        sessionStorage.setItem("name",userInfo.name);
        sessionStorage.setItem("surname", userInfo.surname);
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
                },
                showModuls: true,
            load:true
            },

            this.setData,
            console.log(this.state.resultfull.result)
         );
        sessionStorage.setItem("level",  resultfull);
    }
    setData = async () => {
        const resultfull = this.state.resultfull
        axios.post('https://donocz.pp.ua/api/testing/add/', resultfull)
            .then(response => {
                    console.log(response)
                    if (response) {
                        swal("Ваш результат збережено!",).then(value => {
                           /* sessionStorage.setItem("level", this.state.resultfull.result);
                            sessionStorage.setItem("name", this.state.name);
                            sessionStorage.setItem("surname", this.state.surname);
                            sessionStorage.setItem("date", this.state.date);*/
                        })
                    }
                },
                error => {
                    swal("Error!");
                }
            );

        console.log(sessionStorage)
        console.log(this.state.resultfull)
    }

    componentDidMount() {
        this.logInig();
         this.setResult()
    }

    render() {
   const load=this.state.load
        const show = this.state.showModuls
        const percent = Math.round(this.props.score / this.props.questions.length * 100);
        let message;
        if (percent >= 80) {
            message = 'Відмінний ';
        } else if (percent < 80 && percent >= 60) {
            message = "Достатній ";
        } else {
            message = "Вибачте,повторіть курс ще раз....";
        }
        return (
            <>
                {
                    show&&load ?
                        <>
                            {
                                percent >= 60 ?
                                    <div
                                        style={{
                                            background: "#cbd3e1"
                                        }}>
                                        <div style={{
                                            background: "#cbd3e1"
                                        }}>
                                            <div><h3 className="text-center cert " style={{
                                                margin: "0 auto", paddingTop: "2rem"
                                            }}>Вітаємо!<br/> Ось й закінчився наш курс "Школа
                                                рекрутера".<br/>Ви маєте можливість завантажити сертифікат про
                                                закінчення або
                                                перегянути його
                                                онлайн нижче.<br/> Не зникайте, у
                                                нас ще багато цікавого на сайті!</h3></div>
                                            <div>
                                                <h3 className="text-center cert ">Кількість
                                                    відповідей {this.props.score} з {this.props.questions.length} є
                                                    правильними.
                                                    Рівень
                                                    знань: {percent}% - {message}</h3>
                                            </div>
                                        </div>
                                        <CertShablon name={sessionStorage.getItem("name")} surname={sessionStorage.getItem("surname")} result={sessionStorage.getItem("level")} date={this.state.date}/>
                                        <Cert name={sessionStorage.getItem("name")} surname={sessionStorage.getItem("surname")} result={sessionStorage.getItem("level")} date={this.state.date}/>
                                    </div>
                                    :
                                    <div>
                                        <h4>Кількість відповідей {this.props.score} з {this.props.questions.length} є
                                            правильними</h4>
                                        <h1>{percent}% - {message}</h1>
                                        <hr/>
                                    </div>
                            }
                        </>
                        :""
                }
            </>
        );
    }

}

export default Results;
