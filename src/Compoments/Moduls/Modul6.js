import React, {Component} from "react";
import "./Modul.css"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import VideoNine from "../Video/VideoNine";
import VideoTen from "../Video/VideoTen";
import TestSix from "../TestSix/TestSix";
import Rate from "../Rate/Rate";



export default class Modul6 extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 0};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({value: undefined});
    }

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
                                    <Nav variant="tabs" className="flex-column"  style={{
                                        marginTop: "-50px"
                                    }}>
                                        <div className="text-center "><h2 className="modul">РЕКРУТИНГОВА СТРАТЕГІЯ</h2></div>
                                        <Nav.Item>
                                            <hr/>    <Nav.Link eventKey="1">Стратегія рекрутера</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="2">У світі креативного рекрутингу</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="3">Тест</Nav.Link>
                                        </Nav.Item>

                                        <Rate modul={sessionStorage.getItem("5")} />
                                    </Nav>
                                </Col>


                        <Col sm={9} style={{  justifyContent: "stretch"}}>
                            <Tab.Content>
                                <Tab.Pane eventKey="1">
                                   <VideoNine/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="2">
                             <VideoTen/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="3">
                                    <TestSix/>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        );
    }
}
