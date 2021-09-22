import React, {Component} from "react";
import "./Modul.css"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import MediaTabTwo from "../MediaTabTwo";
import MediaTab from "../MediaTab";
import TestOne from "../TestOne/TestOne";
import PresentaionBlock0 from "../Presentaion/PresentaionBlock0";
import Rate from "../Rate/Rate";


export default class Modul extends Component {

    render() {

        return (
            <div style={{
                marginLeft: "15px"
            }}>
                <Tab.Container id="left-tabs-example" defaultActiveKey="1">
                    <Row className="history" >
                                <Col className="historycol col-auto fluid col-sm-auto " md={4}  style={{
                                    borderRight: "5px solid #005BAA",
                                    backgroundColor:"#005BAA",
                                }} >
                                    <Nav variant="tabs" className="flex-column flex-row nav-justified" style={{
                                        marginTop: "-50px",
                                        border: "5px solid #005BAA"
                                    }}>
                                        <div className="text-center "><h2 className="modulhistory">РЕКРУТИНГ СТАРТ</h2></div>
                                        <Nav.Item>
                                            <hr/>
                                            <Nav.Link  className="flex-fill nav-justified" eventKey="1">Історія рекрутингу</Nav.Link>

                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link className="flex-fill nav-justified" eventKey="2">Хто такий рекрутер центру зайнятості? </Nav.Link>

                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link className="flex-fill nav-justified" eventKey="3">Відмінності рекрутингових та кадрових агенств</Nav.Link>

                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link className="flex-fill nav-justified" eventKey="4">Тест</Nav.Link>
                                        </Nav.Item>

                                         <Rate modul={sessionStorage.getItem("0")} />
                                    </Nav>

                                </Col>

                        <Col className= "md-9 col-sm-8" style={{  justifyContent: "stretch"}}>
                            <Tab.Content>
                                <Tab.Pane eventKey="1">
                                    <PresentaionBlock0/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="2">
                               <MediaTab/>
                            </Tab.Pane>
                                <Tab.Pane eventKey="3">
                                    <MediaTabTwo/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="4">
                                <TestOne/>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        );
    }
}
