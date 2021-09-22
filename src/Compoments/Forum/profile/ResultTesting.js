import React, {Component} from "react";
import {Card} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import convertDate from "../utils/convertDate";
import API from '../../Forum/utils/API';
import Button from "react-bootstrap/Button";
import Cert from "../../TestFinality/Certificate/Cert";
import CertShablon from "../../TestFinality/Certificate/CertІShablon";

export default class ResultTesting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            resultfull: [
                {
                    nameTest: '',
                    author: '',
                    result: '',
                }],
            name:"",
            surname:"",
            date: '',
            result: '',
            show:true

        }
    }
    logInig = () => {
        let userInfo = JSON.parse(localStorage.getItem("userInfo"));
        this.setState({
            name: userInfo.name,
            surname: userInfo.surname,
        })
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

    getTest = async (id) => {
        await API.get("/testing/" + id)
            .then(response => {
                console.log(response.data);
                this.setState(
                    {
                        resultfull: response.data
                    },
                );
                console.log(this.state.resultfull);
            })
            .catch(error => {
                this.setState({error_message: error.message});
            });
        console.log(this.state.resultfull)
        this.setFinaltest()
    };
    setFinaltest() {
        if (this.state.resultfull !== null) {
            let cert = this.state.resultfull.filter((data) => {
                    if (data.nameTest == "Фінальний іспит") {
                        return data == null ? null : data
                    }
                }
            )
            const today =new Date(cert[0].testingDate),
                date = today.date = today.getFullYear();
            this.setState({
                result: cert[0].result,
                date:date
            })
            console.log(cert)
        }

    }
    getCert=()=>{
        this.setState(
            {
                show: false
            },
        );
    }
    componentDidMount() {

      this.logInig()
        let id = this.parseJwt();
        this.getTest(id)
        console.log(id)
    }

    render() {
        let test = this.state.resultfull;
        console.log(test)
        console.log(this.state.name)
        console.log(this.state.surname)
        console.log(this.state.result)
        console.log(this.state.date)
        const show=this.state.show
        return (
            <>
                {
                    show?
                        <div className="content-wrapper">
                            <Card className="content-header" style={{
                                flexDirection: "column"
                            }}>
                                <h3 className="history col-10">Мої результати тестування
                                </h3>
                                {this.state.resultfull.map((testing, id) => {
                                        console.log({testing})
                                        return (
                                            <div key={id}
                                                 style={{
                                                     borderRadius: "15px",
                                                     width: "100%",
                                                     maxHeight: "50%",
                                                 }}>
                                                <Row fluid style={{
                                                    maxWidth: "100%",
                                                    height: "auto",
                                                    marginLeft: "15%",
                                                    marginRight: "15%",
                                                }}>
                                                    <Col md={2} style={{
                                                        fontSize: "18 px",
                                                        fontWeight: "bold",
                                                        borderStyle: "solid",
                                                        borderWidth: "5px",
                                                        borderColor: "#005BAA",
                                                        borderRadius:"25px",
                                                        padding: "5px",
                                                        marginBottom: "1rem"
                                                    }}>
                                                        <label>{testing.nameTest}</label>
                                                    </Col>
                                                    <hr/>
                                                    <Col md={2} style={{
                                                        fontSize: "18 px",
                                                        fontWeight: "bold",
                                                        borderStyle: "solid",
                                                        borderWidth: "5px",
                                                        borderColor: "#FFD947",
                                                        padding: "5px",
                                                        marginBottom: "1rem"
                                                    }}>
                                                        <label>Результат тестування: </label>
                                                    </Col>
                                                    <Col md={3} style={{
                                                        fontSize: "18 px",
                                                        fontWeight: "bold",
                                                        borderStyle: "solid",
                                                        borderWidth: "5px",
                                                        borderColor: "#005BAA",
                                                        borderRadius:"25px",
                                                        padding: "5px",
                                                        marginBottom: "1rem"
                                                    }}>
                                                        {testing.result}

                                                    </Col>
                                                    <Col md={2} style={{
                                                        fontSize: "18 px",
                                                        fontWeight: "bold",
                                                        borderStyle: "solid",
                                                        borderWidth: "5px",
                                                        borderColor: "#FFD947",
                                                        padding: "5px",
                                                        marginBottom: "1rem"
                                                    }}>
                                                        <label>Дата тестування:
                                                        </label>
                                                    </Col>
                                                    <Col md={2} style={{
                                                        fontSize: "18 px",
                                                        fontWeight: "bold",
                                                        borderStyle: "solid",
                                                        borderWidth: "5px",
                                                        borderColor: "#005BAA",
                                                        borderRadius:"25px",
                                                        padding: "5px",
                                                        marginBottom: "1rem"
                                                    }}>
                                                        {convertDate(testing.testingDate)}
                                                    </Col>

                                                </Row>
                                                <Row fluid style={{
                                                    maxWidth: "100%",
                                                    height: "auto",
                                                    marginLeft: "15%",
                                                    marginRight: "15%",
                                                    paddingTop:"0"
                                                }}>
                                                {testing.nameTest == "Фінальний іспит"?
                                                    <Col md={2} >
                                                        <Button className="btn" onClick={this.getCert} style={{
                                                            width: "auto",
                                                            height: "auto",

                                                            marginLeft: "1rem%",
                                                        }}>Завантажити сертифікат</Button>
                                                    </Col >:""}
                                                    </Row>
                                            </div>)
                                    }
                                )
                                }
                            </Card>
                        </div>
                   :<> <Cert name={this.state.name} surname={this.state.surname} result={this.state.result} date={this.state.date}/><br/>
                            <CertShablon name={this.state.name} surname={this.state.surname} result={this.state.result} date={this.state.date}/>

                        </>
                }

            </>
        );
    }
}

