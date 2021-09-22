import React, {Component} from "react";
import "../Moduls/Modul2.css"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import {NavDropdown} from "react-bootstrap";
import VideoFDHK from "./VideoFDHK";
import VideoFDHK1 from "./VideoFDHK1";
import VideoFDHK2 from "./VideoFDHK2";
import VideoFDHK3 from "./VideoFDHK3";
import VideoFDHK4 from "./VideoFDHK4";
import VideoFDHK5 from "./VideoFDHK5";
import VideoFDHK6 from "./VideoFDHK6";
import VideoFDHK7 from "./VideoFDHK7";
import VideoFDHK9 from "./VideoFDHK8";
import VideoFDHK10 from "./VideoFDHK10";
import VideoFDHK11 from "./VideoFDHK11";
import VideoFDHK8 from "./VideoFDHK8";


export default class ModulFDHK extends Component {
    render() {
        return (
            <div style={{
                marginLeft: "15px"
            }}>
                <Tab.Container id="tabs-with-dropdown" defaultActiveKey="1.1">
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
                                    <h2 className="modul" >Фонд "Професійний розвиток
                                        Харкова"</h2></div>

                                <NavDropdown    eventKey="1" title="Загальні тренінги" id="tabs-with-dropdown-tab-null">
                                    <Nav.Link className="dropitem" eventKey="1.1">Ефективні комунікації</Nav.Link>
                                    <Nav.Link className="dropitem" eventKey="1.2">Професійне вигоряння </Nav.Link>
                                    <Nav.Link className="dropitem" eventKey="1.3">Підвищуємо рівень стресостійкості</Nav.Link>
                                </NavDropdown>

                                <NavDropdown className="dropitem"   eventKey="2" title="Тренінги для     консультантів роботодавців "
                                              id="tabs-with-dropdown-tab-null" defaultActiveKey="2.1">
                                    <Nav.Link className="dropitem" eventKey="2.1">Як заохотити роботодавців до співпраці із службою зайнятості</Nav.Link>
                                    <Nav.Link className="dropitem" eventKey="2.2">Як інтегрувати у практичну діяльність методику Девіда Колба</Nav.Link>
                                    <Nav.Link className="dropitem" eventKey="2.3">Коучинговий підхід до роботи із людьми</Nav.Link>
                                    <Nav.Link className="dropitem" eventKey="2.4">Сучасний рекрутинг, алгорітм дії</Nav.Link>
                                    <Nav.Link className="dropitem" eventKey="2.5">Словесне айкідо</Nav.Link>
                                    <Nav.Link eventKey="2.6">Виклики цифрової ери</Nav.Link>
                                    <Nav.Link eventKey="2.7">Навіщо роботодавцю працівники із розвиненим емоційним інтелектом</Nav.Link>
                                    <Nav.Link eventKey="2.8">Критичне мислення</Nav.Link>
                                    <Nav.Link eventKey="2.9">Креативність як найвищий прояв професійних компетенцій</Nav.Link>
                                </NavDropdown>
                            </Nav>
                        </Col>

                        <Col sm={9} style={{justifyContent: "stretch"}}>
                            <Tab.Content animation>
                                <Tab.Pane eventKey="1.1"><VideoFDHK/> </Tab.Pane>
                                <Tab.Pane eventKey="1.2"> <VideoFDHK1/> </Tab.Pane>
                                <Tab.Pane eventKey="1.3"> <VideoFDHK2/> </Tab.Pane>
                                <Tab.Pane eventKey="2.1"> <VideoFDHK3/> </Tab.Pane>
                                <Tab.Pane eventKey="2.2"> <VideoFDHK4/> </Tab.Pane>
                                <Tab.Pane eventKey="2.3"> <VideoFDHK5/> </Tab.Pane>
                                <Tab.Pane eventKey="2.4"> <VideoFDHK6/> </Tab.Pane>
                                <Tab.Pane eventKey="2.5"> <VideoFDHK7/> </Tab.Pane>
                                <Tab.Pane eventKey="2.6"> <VideoFDHK8/> </Tab.Pane>
                                <Tab.Pane eventKey="2.7"> <VideoFDHK9/> </Tab.Pane>
                                <Tab.Pane eventKey="2.8"> <VideoFDHK10/> </Tab.Pane>
                                <Tab.Pane eventKey="2.9"> <VideoFDHK11/> </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        );
    }
}
