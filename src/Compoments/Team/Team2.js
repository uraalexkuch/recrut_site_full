import React, {Component} from "react";
import "./Team2.css"
import Card from "react-bootstrap/Card";
import team1 from "../../Img/jigaylo.jpg";
import team2 from "../../Img/team_03.jpg";
import team3 from "../../Img/sur.jpg";
import team4 from "../../Img/sal.jpg";

import CardDeck from "react-bootstrap/CardDeck";

export default class Team2 extends Component {
    render() {
        return (
            <>
                <CardDeck className="team2">
                    <div className=" team col-6 one">
                        <div className="title ">
                            <h4 className="teamTitle">Відділ організації рекрутингу та партнерства у сфері
                                зайнятості</h4>
                        </div>
                        <CardDeck className=" team" style={{
                            marginLeft: "1%",
                            marginRight: "1%",
                        }}>
                            <Card className="DownTeam col-3 " style={{
                                flexShrink: "1",
                              //  flexDirection: "column",
                              maxHeight: "500px",
                                border: " #005BAA solid 5px",
                                boxShadow: " 0 0 10px #333333"
                            }}>
                                <Card.Img variant="down"
                                          src={team1} />
                                <Card.Body>
                                    <Card.Title>Жигайло Надія Анатоліївна</Card.Title>
                                    <Card.Text className="teamtext" >
                                        Начальник відділу
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="DownTeam col-3 " style={{
                                flexShrink: "1",
                               // flexDirection: "column",
                                maxHeight: "500px",
                                border: " #005BAA solid 5px",
                                boxShadow: " 0 0 10px #333333"
                            }}>
                                <Card.Body >
                                    <Card.Title>Надєйкіна
                                        Ольга Вікторівна
                                    </Card.Title>
                                    <Card.Text className="teamtext">
                                        Заступник начальника відділу
                                    </Card.Text>
                                </Card.Body>
                                <Card.Img variant="top " src={team2} />
                            </Card>
                        </CardDeck>
                    </div>

                    <div className="team col-6 one">
                        <div className="title " style={{
                           // marginBottom: "3rem"
                        }}>
                            <h4 className="teamTitle">Відділ організації надання послуг роботодавцям</h4>
                        </div>
                        <CardDeck className=" team" style={{
                            marginLeft: "1%",
                            marginRight: "1%",
                        }}>
                            <Card className="DownTeam col-3 " style={{
                                flexShrink: "1",
                               // flexDirection: "column",
                                maxHeight: "700px",
                                border: " #005BAA solid 5px",
                                boxShadow: " 0 0 10px #333333"
                            }}>
                                <Card.Img variant="down"
                                          src={team3}/>
                                <Card.Body>
                                    <Card.Title>Суровикіна
                                        Вікторія Юріївна
                                    </Card.Title>
                                    <Card.Text className="teamtext" >
                                        Начальник відділу
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="DownTeam col-3 " style={{
                                flexShrink: "1",
                                //flexDirection: "column",
                                maxHeight: "500px",
                                border: " #005BAA solid 5px",
                                boxShadow: " 0 0 10px #333333"
                            }}>
                                <Card.Body >
                                    <Card.Title>Сальник
                                        Ганна Юріївна

                                    </Card.Title>
                                    <Card.Text className="teamtext">
                                        Заступник начальника відділу
                                    </Card.Text>
                                </Card.Body>
                                <Card.Img variant="top " src={team4} />
                            </Card>
                        </CardDeck>
                    </div>
                </CardDeck>
            </>

        );


    }
}
