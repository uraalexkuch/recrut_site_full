import React, {Component} from "react";
import "./testfin.css"
import quizQuestion from "../../Compoments/TestFinality/api/quizQuestion";
import Results from "../../Compoments/TestFinality/components/results";
import ScoreBox from "../../Compoments/TestFinality/components/score_box";
import QuestionList from "../../Compoments/TestFinality/components/question_list";
import Button from "react-bootstrap/Button";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import {Redirect} from "react-router-dom";
import RegisterFormik from "../Login/RegisterFormik";
import API from "../Forum/utils/API";
import swal from "sweetalert";


export default class TestFinalyty extends Component {
    constructor() {
        super();
        this.state = {
            questions: quizQuestion,
            score: 0,
            current: 1, //this.getRandomInt(1,41),
            name: "Фінальний іспит",
            isUser: false,
            usertest: [],
            loading: false,
            mod: false,
            fin: ""
        }
    }


    newTest = () => {
        this.setState({
            questions: quizQuestion,
            score: 0,
            current: 1,
        });
    }
    getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
    }

    checkUser() {
        let userInfo = JSON.parse(localStorage.getItem("userInfo"));
        console.log(userInfo)
        if (!userInfo) {
            console.log("user is NOT logged in");
            this.setState({isUser: false});
        } else {
            this.setState({isUser: true});
            console.log(`${userInfo.surname} is logged IN`);
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
        //   console.log(JSON.parse(jsonPayload).id)
        return JSON.parse(jsonPayload).id;

    }

    getTest(id) {
        API.get("/testing/" + id)
            .then(response => {
                console.log(response.data);
                this.setState(
                    {
                        usertest: response.data,
                    },
                );
                console.log(this.state.usertest);
                this.filterModul()
            })
            .catch(error => {
                this.setState({error_message: error.message});
            });
        console.log(this.state.usertest)

    };

    filterModul() {
        if (this.state.usertest !== null) {
            let test = this.state.usertest.filter((data) => {
                    if (data.nameTest == "Тест до модуля 1") {
                        let mod1 = data
                        return mod1 == null ? null : mod1
                    } else if (data.nameTest == "Тест до модуля 2") {
                        let mod2 = data
                        return mod2 == null ? null : mod2
                    } else if (data.nameTest == "Тест до модуля 3") {
                        let mod3 = data
                        return mod3 == null ? null : mod3
                    } else if (data.nameTest == "Тест до модуля 4") {
                        let mod4 = data
                        return mod4 == null ? null : mod4
                    } else if (data.nameTest == "Тест до модуля 5") {
                        let mod5 = data
                        return mod5 == null ? null : mod5
                    } else if (data.nameTest == "Тест до модуля 6") {
                        let mod6 = data
                        return mod6 == undefined || null ? null : mod6
                    }

                }
            )
            this.setState({
                mod: test,
                // !(test[0] && test[1] && test[2] && test[3] && test[4] && test[5] == null),
                loading: true
            })
            console.log(test)
        } else {
            return console.log("Чекаємо2.....")
        }
        this.setFinaltest()
    }

    setFinaltest() {
        if (this.state.usertest !== null) {
            let fin = this.state.usertest.filter((data) => {
                    if (data.nameTest == "Фінальний іспит") {
                        return data == null ? null : data
                    }
                }
            )
            this.setState({
                fin: fin.length,

            })
            console.log(fin)
        }

    }

    setCurrent(current) {
        this.setState({current});
    }

    setScore(score) {
        this.setState({score});
    }

    warning = () => {
        swal("Увага!", "В доступі відмовлено! Не пройдені попередні тести!", "warning")
        return <Redirect to='/recruting/learn'/>
    }
    warning1 = () => {
        swal("Увага!", "В доступі відмовлено! Ви вже проходили фінальний тест!", "warning")
        return <Redirect to='/recruting/learn'/>
    }

    componentDidMount() {
        this.checkUser();
        let id = this.parseJwt();
        this.getTest(id);
        //this.setFinaltest()
        console.log(id)

    }

    render() {
        const load = this.state.loading
        console.log(load)
        const mod = this.state.mod
        const fin = this.state.fin
        console.log(this.state.fin)
        console.log(mod.length)
        const logged = this.state.isUser;
        const start = Math.round(this.state.score / this.state.questions.length * 100);
        let scorebox, results;
        if (this.state.current > this.state.questions.length) {
            scorebox = '';
            results = <Results {...this.state} />
        } else {
            scorebox = <ScoreBox {...this.state} />
            results = '';
        }
        return (
            <div>
                <Hero/>
                <div>
                    {load
                        ? logged
                            ? fin<1
                                ? mod.length === 6
                                    ? <div>
                                        <div className="bodyTest" style={{
                                            height: "100%"
                                        }}>
                                            <h2 className="text-center cert" style={{
                                                margin: "1rem auto"
                                            }}>{this.state.name}</h2>
                                            <h3>Лише одна спроба!</h3>
                                        </div>
                                        <div>
                                            <p className="lead"/>
                                            <hr/>
                                            {scorebox}
                                            <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)}
                                                          setScore={this.setScore.bind(this)}/>
                                            {results}
                                        </div>
                                        {start <= 60 ?
                                            <div>
                                                <Button onClick={this.newTest}> З початку</Button>
                                            </div> : ""
                                        }
                                    </div>
                                    : this.warning()
                                : this.warning1()
                            : <RegisterFormik/>
                        : console.log("Чекаємо.....")
                    }
                </div>
                <Footer/>
            </div>


        );
    }

}
