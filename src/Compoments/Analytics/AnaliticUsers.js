import React, {Component} from 'react';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Analytics/Analyt.css"
import convertDate from "../Forum/utils/convertDate";
import Button from "react-bootstrap/Button";
import ProfileTest from "./ProfileTest";
import {Card} from "react-bootstrap";


export default class AnaliticUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: this.props.data,
            id: "",
            showCard: true,
            showBack: false,
        }

    }

    searchID = (event) => {
        let selectId = event
        console.log(selectId)
        this.setState({
            id: selectId,
            showCard: !this.state.showCard,
            showBack: !this.state.showBack,
        })
        console.log(this.state.id)

    }

    render() {
        const stat = this.state.showCard
        return (
            <Card className="content-header" style={{
                flexDirection: "column", paddingTop: "1rem"
            }}>

                {stat
                    ?
                    this.state.users.map((user, id) => {
                             console.log(this.state.users)
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
                                        marginLeft: "5%",
                                        marginRight: "5%",
                                    }}>
                                        <Col md={2} style={{
                                            fontSize: "18 px",
                                            fontWeight: "bold",
                                            borderStyle: "solid",
                                            borderWidth: "5px",
                                            borderColor: "#005BAA",
                                            borderRadius: "25px",
                                            padding: "5px",
                                            marginBottom: "1rem",
                                            marginRight: "1rem",
                                            textAlign: "center",
                                            width: "auto",
                                            height: "60%"
                                        }}>
                                            <label
                                                className="analyt">{user.name}</label>&nbsp;&nbsp;
                                            <label>{user.surname}</label>

                                        </Col>
                                        <hr/>
                                        <Col style={{
                                            fontSize: "18 px",
                                            fontWeight: "bold",
                                            borderStyle: "solid",
                                            borderWidth: "5px",
                                            borderColor: "#FFD947",
                                            padding: "5px",
                                            marginBottom: "1rem",
                                            marginRight: "1rem",
                                            width: "auto",
                                            height: "60%"
                                        }}>
                                            <label>Код центру:</label>
                                        </Col>
                                        <Col md={1} style={{
                                            fontSize: "18 px",
                                            fontWeight: "bold",
                                            borderStyle: "solid",
                                            borderWidth: "5px",
                                            borderColor: "#005BAA",
                                            borderRadius: "25px",
                                            padding: "5px",
                                            marginBottom: "1rem",
                                            marginRight: "1rem",
                                            textAlign: "center",
                                            width: "100%",
                                            height: "60%"
                                        }}>
                                            {user.center}

                                        </Col>
                                        <Col style={{
                                            fontSize: "18 px",
                                            fontWeight: "bold",
                                            borderStyle: "solid",
                                            borderWidth: "5px",
                                            borderColor: "#FFD947",
                                            padding: "5px",
                                            marginBottom: "1rem",
                                            marginRight: "1rem",
                                            width: "auto",
                                            height: "60%"
                                        }}>
                                            <label>Дата реєстрації:
                                            </label>
                                        </Col>
                                        <Col style={{
                                            fontSize: "18 px",
                                            fontWeight: "bold",
                                            borderStyle: "solid",
                                            borderWidth: "5px",
                                            borderColor: "#005BAA",
                                            borderRadius: "25px",
                                            padding: "5px",
                                            marginBottom: "1rem",
                                            marginRight: "1rem",
                                            textAlign: "center",
                                            width: "auto",
                                            height: "60%"
                                        }}>
                                            {convertDate(user.registerDate)}
                                        </Col>
                                        <Col style={{
                                            fontSize: "18 px",
                                            fontWeight: "bold",
                                            borderStyle: "solid",
                                            borderWidth: "5px",
                                            borderColor: "#FFD947",
                                            padding: "5px",
                                            marginBottom: "1rem",
                                            marginRight: "1rem",
                                            width: "auto",
                                            height: "60%"
                                        }}>
                                            <label>Завершенні тести:
                                            </label>
                                        </Col>
                                        <Col md={1} style={{
                                            fontSize: "18 px",
                                            fontWeight: "bold",
                                            borderStyle: "solid",
                                            borderWidth: "5px",
                                            borderColor: "#005BAA",
                                            borderRadius: "25px",
                                            padding: "0.5rem",
                                            marginBottom: "1rem",
                                            marginRight: "1rem",
                                            textAlign: "center",
                                            width: "auto",
                                            height: "60%"
                                        }}>
                                            {user.testing.length}
                                        </Col>
                                        <Col>
                                            <Button
                                                onClick={() => this.searchID([user._id, user.surname])}
                                                style={{
                                                    width: "100%",
                                                    height: "auto",
                                                    borderRadius: "25px",
                                                    marginTop: "0",
                                                    marginBottom: "1rem"
                                                }}>
                                                Переглянути тести
                                            </Button>
                                        </Col>
                                    </Row>
                                </div>)

                        },
                    ) : <ProfileTest id={this.state.id}/>
                }

            </Card>
        )
    }
}




