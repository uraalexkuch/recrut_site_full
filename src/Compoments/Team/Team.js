import React, {Component} from "react";
import "./Team.css"
import team0 from "../../Img/vn.jpg"
import team2 from "../../Img/klim.jpg"
import team1 from "../../Img/ad.jpg"
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import CardDeck from "react-bootstrap/CardDeck";

export default class Team extends Component {
    render() {
        return (

            <div className="team">
                <div className="title">
                    <h2 className="teamTitle" >Керівництво </h2>
                </div>
                <CardDeck  style={{
                    marginBottom: "2rem",
                    marginRight:"3%",
                    marginLeft:"3%",
                }}>
                    <Card className="col-lg-auto  " style={{
                        boxShadow: "0 0 10px #333333"
                    }}>
                        <Card.Body>
                            <Card.Title className="sign" >Наше гасло:</Card.Title>
                            <Card.Text><br/>
                                <q >Чим складніші умови, то сильніші мотивація та прагнення до поліпшення.</q>
                                <br/><br/>
                                <div className="sigh" >Рибалко В. М.
                                </div>

                            </Card.Text>
                        </Card.Body>

                    </Card>

                    <div className="card-horizontal col-lg-7 col-md-7">
                        <Card className="shef" >
                            <Card.Img className="shef "
                                      src={team0}
                                      alt="Card image cap"
                            />
                            <Card.Body flex-grow-1 style={{
                                flexGrow: "1",
                                borderRadius: "25px",
                                height: "auto",
                                width: "auto"
                            }}>
                                <Card.Title className="sheftitle"
                                >Рибалко Валентина Миколаївна</Card.Title>
                                <Card.Text className="sheftext" >
                                    Директор Донецького обласного центру зайнятості
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                </CardDeck>
                <Row className="ad" style={{
                    marginRight: "5%",
                    marginLeft:"5%"
                }} >
                <div className="card-horizontal col-6  ">
                    <Card  className="adcard" style={{
                        orderRadius: "25px",
                        height: "auto",
                        border:" #005BAA solid 5px",
                        boxShadow: " 0 0 10px #333333"
                    }}>
                        <Card.Img
                            src={team1}
                            alt="Card image cap"
                        />
                        <Card.Body  className="col-auto " style={{
                            flexGrow: "1",
                            borderRadius: "25px",
                        }}>
                            <Card.Title className="ad"
                            >Адамова Наталля Миколаївна</Card.Title>
                            <Card.Text className="ad"
                            >Заступник директора, технолог-організатор
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="card-horizontal col-6 ">
                    <Card className="klcard" style={{
                        borderRadius: "25px",
                        height: "auto",
                        border:" #005BAA solid 5px",
                        boxShadow: " 0 0 10px #333333"
                    }}>
                        <Card.Img
                                  src={team2}
                                  alt="Card image cap"
                                 />
                        <Card.Body className="col-auto " style={{
                            flexGrow: "1",
                            borderRadius: "25px",
                        }}>
                            <Card.Title className="ad"
                            >Климович Олег Валерійович</Card.Title>
                            <Card.Text className="ad" >
                                Заступник директора –
                                начальник відділу з питань застосування праці іноземців та осіб без громадянства
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                </Row>
            <Row style={{
                marginTop: "50px",
                marginLeft: "15px",
                width: "98%",
                height: "10px",
                backgroundColor: "#005BAA"
            }}/>
        </div>


    )
        ;
}
}
