import React, {Component} from "react";
import "../Moduls/Modul2.css"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";

import PhoneBlock1 from "./PhoneBlock1";
import PhoneBlock2 from "./PhoneBlock2";
import PhoneBlock3 from "./PhoneBlock3";



export default class ModulPhone extends Component {
    render() {
        return (
            <div style={{
                marginLeft: "15px"
            }}>
                <Tab.Container id="tabs-with-dropdown" defaultActiveKey="1">
                    <Row className="history">
                        <Col sm={3} style={{
                            borderRight: "5px solid #005BAA",
                            backgroundColor: "#005BAA"
                        }}>
                            <Nav variant="tabs" className="flex-column" style={{
                                marginTop: "-50px",
                                border: "5px solid #005BAA"
                            }}>
                                <div className="text-center ">
                                    <h2 className="modul" >Мистецтво телефонного спілкування </h2></div>

                                <Nav.Item>
                                <hr/>
                                <Nav.Link  className="flex-fill nav-justified" eventKey="1">Сприйняття інформації</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link  className="flex-fill nav-justified" eventKey="2">Слова-паразити</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link  className="flex-fill nav-justified" eventKey="3">Робота з запереченнями та техніки перехоплення ініціативи</Nav.Link>
                            </Nav.Item>

                        </Nav>
                    </Col>

                    <Col md={9} col-sm-auto  style={{justifyContent: "stretch"}}>
                        <Tab.Content  className="comun" >
                            <Tab.Pane eventKey="1">
                                <PhoneBlock1/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="2">
                                <PhoneBlock2/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="3">
                                <PhoneBlock3/>
                            </Tab.Pane>

                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>

    </div>
    );
    }
}
