import React, {Component} from "react";
import "./Modul.css"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import VideoSeven from "../Video/VideoSeven";
import VideoEight from "../Video/VideoEight";
import TestFive from "../TestFive/TestFive";

import Rate from "../Rate/Rate";




export default class Modul5 extends Component {

    render() {

        return (
            <div style={{
                marginLeft:  "15px"
            }}>
                <Tab.Container id="left-tabs-example" defaultActiveKey="1">
                    <Row className="history">


                                <Col sm={3} style={{
                                    borderRight: "5px solid #005BAA",
                                    backgroundColor:"#005BAA"
                                }} >
                                    <Nav variant="tabs" className="flex-column" style={{
                                        marginTop: "-50px",
                                        border: "5px solid #005BAA"
                                    }}>
                                        <div className="text-center "><h2 className="modul">ВІДПОВІДАЛЬНІСТЬ В РОБОТІ</h2></div>
                                        <Nav.Item>
                                            <hr/>   <Nav.Link eventKey="1">Відповідальність в роботі рекрутера</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="2">Відповідальність клієнтів </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="3">Тест</Nav.Link>
                                        </Nav.Item>

                                        <Rate modul={sessionStorage.getItem("4")} />
                                    </Nav>
                                </Col>


                        <Col sm={9} style={{  justifyContent: "stretch"}}>
                            <Tab.Content>
                                <Tab.Pane eventKey="1">
                                   <VideoSeven/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="2">
                               <VideoEight/>
                            </Tab.Pane>
                                <Tab.Pane eventKey="3">
                                    <TestFive/>
                                </Tab.Pane>

                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        );
    }
}
