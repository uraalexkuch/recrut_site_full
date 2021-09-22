import React, {Component} from "react";
import {Card} from "react-bootstrap";
import convertDate from "../utils/convertDate";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import swal from "sweetalert";
import ResultTesting from "./ResultTesting";
import API from '../../Forum/utils/API';


export default class ProfileStat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            response: [],
            error_message: null,
            avatar: "",
            password: "",
        };

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

    handleChange = event => {
        this.setState({password: event.target.value});
    }
    handleChangeAvatar = event => {
        this.setState({avatar: event.target.value});
    }
    getData = async id => {
        API.get("/users/" + id)
            .then(response => {
                console.log(response.data);
                this.setState(
                    {
                        response: response.data
                    }
                );
                console.log(this.state.response.user)
            })
            .catch(error => {
                this.setState({error_message: error.message});
            });
        console.log(this.state.response)
    };


    handleSubmit = async e => {
        e.preventDefault();
        let id = this.state.response.user._id
        const password = this.state.password
        API.patch('/users/password/' + id, {password})
            .then(res => {
                    console.log(res)
                    if (res) {
                        swal('Успіх!', res.data.message, 'success').then(value => {
                            window.location.reload();
                        })
                    }
                },
                error => {
                    swal("Error!", error.response.data.message, "error");
                }
            );
    }
    handleSubmitAvatar = async e => {
        e.preventDefault();
        let id = this.state.response.user._id
        const avatar = this.state.avatar

        API.patch('/users/avatar/' + id, {avatar})
            .then(res => {
                    console.log(res)
                    if (res) {
                        swal('Успіх!', res.data.message, 'success').then(value => {
                            window.location.reload();
                        })
                    }
                },
                error => {
                    swal("Error!", error.response.data.message, "error");
                }
            );
    }
    componentDidMount() {
        let id = this.parseJwt();
        this.getData(id);
        console.log(id)
    }
    render() {
        let result = this.state.response.user;
        console.log(result);
        // console.log(id);
        return (
            <>
                <div className="content-wrapper">
                    <Card className="content-header">
                        {Object.keys(this.state.response).map(
                            (response, id) => {
                                console.log(response)
                                return (
                                    <div key={response.id}
                                         style={{
                                             borderRadius: "15px",
                                             width: "100%",
                                             maxHeight: "50%",
                                         }}>
                                        <Row fluid style={{
                                            maxWidth: "100%",
                                            height: "auto",
                                            marginLeft: "15%",
                                            marginRight: "20%",
                                        }}>
                                            <img className="history col-2 text-center  profile-user-img img-fluid img-circle'
                    width={100}"
                                                 style={{
                                                     width: "50px",
                                                     height: "50%",
                                                     borderRadius: "100%",
                                                 }}
                                                 src={result.avatar}
                                                 alt="Card image cap"
                                            />
                                            <div>
                                                <form onSubmit={this.handleSubmitAvatar}>
                                                    <label style={{
                                                        fontSize: "18 px",
                                                        fontWeight: "bold",
                                                        color: "#005BAA",
                                                    }}>
                                                        <input style={{
                                                            fontSize: "16 px",
                                                            fontWeight: "bold",
                                                            borderStyle: "solid",
                                                            borderWidth: "5px",
                                                            borderColor: "#005BAA",
                                                            padding: "5px",
                                                            marginBottom: "1rem"
                                                        }} type="text" placeholder="Вставити посилання на аватар"
                                                               onChange={this.handleChangeAvatar}/>
                                                    </label>
                                                    <button className="btn" type="submit" style={{
                                                        width: "auto"
                                                    }}>Змінити аватар
                                                    </button>
                                                </form>
                                            </div>
                                            <h3 className="history col-10">Мої дані
                                            </h3>
                                        </Row>

                                        <Row fluid style={{
                                            maxWidth: "100%",
                                            height: "auto",
                                            marginLeft: "15%",
                                            marginRight: "20%",
                                        }}>
                                            <Col md={6} style={{
                                                fontSize: "18 px",
                                                fontWeight: "bold",
                                                borderStyle: "solid",
                                                borderWidth: "5px",
                                                borderColor: "#005BAA",
                                                padding: "5px",
                                                marginBottom: "1rem"
                                            }}>
                                                <label>Ім'я</label>
                                            </Col>
                                            <hr/>
                                            <Col md={6} style={{
                                                fontSize: "18 px",
                                                fontWeight: "bold",
                                                borderStyle: "solid",
                                                borderWidth: "5px",
                                                borderColor: "#FFD947",
                                                padding: "5px",
                                                marginBottom: "1rem"
                                            }}> {result.name}
                                            </Col>
                                        </Row>
                                        <Row fluid style={{
                                            maxWidth: "100%",
                                            height: "auto",
                                            marginLeft: "15%",
                                            marginRight: "20%",

                                        }}>
                                            <Col md={6} style={{
                                                fontSize: "18 px",
                                                fontWeight: "bold",
                                                borderStyle: "solid",
                                                borderWidth: "5px",
                                                borderColor: "#005BAA",
                                                padding: "5px",
                                                marginBottom: "1rem"
                                            }}>
                                                <label>Прізвище</label>
                                            </Col>
                                            <hr/>
                                            <Col md={6} style={{
                                                fontSize: "18 px",
                                                fontWeight: "bold",
                                                borderStyle: "solid",
                                                borderWidth: "5px",
                                                borderColor: "#FFD947",
                                                padding: "5px",
                                                marginBottom: "1rem"
                                            }}>
                                                {result.surname}
                                            </Col>
                                            <div className='form-group has-feedback'>

                                                <div>
                                                    <form onSubmit={this.handleSubmit}>
                                                        <label style={{
                                                            fontSize: "18 px",
                                                            fontWeight: "bold",
                                                            color: "#005BAA",
                                                        }}>
                                                            Пароль:
                                                            <input style={{
                                                                fontSize: "18 px",
                                                                fontWeight: "bold",
                                                                borderStyle: "solid",
                                                                borderWidth: "5px",
                                                                borderColor: "#005BAA",
                                                                padding: "5px",
                                                                marginBottom: "1rem"
                                                            }} type="text" password="password"
                                                                   onChange={this.handleChange}/>
                                                        </label>
                                                        <button className="btn" type="submit" style={{
                                                            width: "auto"
                                                        }}>Змінити пароль
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </Row>
                                        <Row fluid style={{
                                            maxWidth: "100%",
                                            height: "auto",
                                            marginLeft: "15%",
                                            marginRight: "20%",

                                        }}>
                                            <Col md={6} style={{
                                                fontSize: "18 px",
                                                fontWeight: "bold",
                                                borderStyle: "solid",
                                                borderWidth: "5px",
                                                borderColor: "#005BAA",
                                                padding: "5px",
                                                marginBottom: "1rem"
                                            }}>
                                                <label>Дата реєстрації</label>
                                            </Col>
                                            <hr/>
                                            <Col md={6} style={{
                                                fontSize: "18 px",
                                                fontWeight: "bold",
                                                borderStyle: "solid",
                                                borderWidth: "5px",
                                                borderColor: "#FFD947",
                                                padding: "5px",
                                                marginBottom: "1rem"
                                            }}>
                                                {convertDate(result.registerDate)}
                                            </Col>
                                        </Row>

                                        <Row fluid style={{
                                            maxWidth: "100%",
                                            height: "auto",
                                            marginLeft: "15%",
                                            marginRight: "20%",

                                        }}>
                                            <Col md={6} style={{
                                                fontSize: "18 px",
                                                fontWeight: "bold",
                                                borderStyle: "solid",
                                                borderWidth: "5px",
                                                borderColor: "#005BAA",
                                                padding: "5px",
                                                marginBottom: "1rem"
                                            }}>
                                                <label>Мої повідомлення</label>
                                            </Col>
                                            <hr/>
                                            <Col md={6} style={{
                                                fontSize: "18 px",
                                                fontWeight: "bold",
                                                borderStyle: "solid",
                                                borderWidth: "5px",
                                                borderColor: "#FFD947",
                                                padding: "5px",
                                                marginBottom: "1rem"
                                            }}>
                                                {result.posts.length}
                                            </Col>
                                        </Row>
                                        <Row fluid style={{
                                            maxWidth: "100%",
                                            height: "auto",
                                            marginLeft: "15%",
                                            marginRight: "20%",

                                        }}>
                                            <Col md={6} style={{
                                                fontSize: "18 px",
                                                fontWeight: "bold",
                                                borderStyle: "solid",
                                                borderWidth: "5px",
                                                borderColor: "#005BAA",
                                                padding: "5px",
                                                marginBottom: "1rem"
                                            }}>
                                                <label>Мої теми</label>
                                            </Col>
                                            <hr/>
                                            <Col md={6} style={{
                                                fontSize: "18 px",
                                                fontWeight: "bold",
                                                borderStyle: "solid",
                                                borderWidth: "5px",
                                                borderColor: "#FFD947",
                                                padding: "5px",
                                                marginBottom: "1rem"
                                            }}>
                                                {result.topics.length}
                                            </Col>
                                        </Row>

                                    </div>)
                            }
                        )
                        }
                    </Card>
                </div>
                <ResultTesting data={this.state.response}/>
            </>
        );

    }
}

