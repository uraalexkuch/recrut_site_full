import React, {Component} from "react";
import "../Moduls/Modul.css"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import PresentaionBlock1 from "./PresentaionBlock1";
import PresentaionBlock2 from "./PresentaionBlock2";
import PresentaionBlock3 from "./PresentaionBlock3";
import PresentaionBlock4 from "./PresentaionBlock4";
import PresentaionBlock5 from "./PresentaionBlock5";
import PresentaionBlock6 from "./PresentaionBlock6";


export default class Communication extends Component {
    render() {
        return (
            <div>
                <Tab.Container id="left-tabs-example" defaultActiveKey="1">
                    <Row className="history" style={{
                        marginLeft: "0px"
                    }}>
                        <Col className="historycol col-auto fluid col-sm-auto " md={3}   style={{
                            borderRight: "5px solid #005BAA",
                            backgroundColor: "#005BAA",
                                                }}>
                            <Nav variant="tabs" className="flex-column flex-row nav-justified" style={{
                                marginTop: "-50px",
                                border: "5px solid #005BAA"
                            }}>
                                <div className="text-center "><h2 className="modulhistory">Ефективна комунікація</h2></div>
                                <Nav.Item>
                                    <hr/>
                                    <Nav.Link  className="flex-fill nav-justified" eventKey="1">Теорія комунікації</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link  className="flex-fill nav-justified" eventKey="2">Сприйняття світу </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link  className="flex-fill nav-justified" eventKey="3">Теорія поколінь</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link   className="flex-fill nav-justified" eventKey="4">Темперамент </Nav.Link>
                                    <Nav.Item>
                                        <Nav.Link   className="flex-fill nav-justified" eventKey="5">Стилі поведінки</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link   className="flex-fill nav-justified" eventKey="6">Методи психологічного захисту</Nav.Link>
                                    </Nav.Item>
                                </Nav.Item>
                            </Nav>
                        </Col>

                        <Col md={9} col-sm-auto  style={{justifyContent: "stretch"}}>
                            <Tab.Content>
                                <Tab.Pane eventKey="1">
                                    <PresentaionBlock1/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="2">
                                    <PresentaionBlock2/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="3">
                                    <PresentaionBlock3/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="4">
                                    <PresentaionBlock4/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="5">
                                    <PresentaionBlock5/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="6">
                                    <PresentaionBlock6/>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>

            </div>
        );
    }
}
