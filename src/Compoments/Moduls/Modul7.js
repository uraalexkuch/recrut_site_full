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
import Video11 from "../Video/Video11";
import Video12 from "../Video/Video12";
import TestSeven from "../TestSeven/TestSeven";



export default class Modul7 extends Component {
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
                                        <div className="text-center "><h2 className="modul">РОБОТА З ВИВИЛЬНЮВАНИМИ</h2></div>
                                        <Nav.Item>
                                            <hr/>    <Nav.Link eventKey="1">Особливості роботи зі звільненими працівниками</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="2">Психологічні стани у людей, які втратили роботу</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="3">Тест</Nav.Link>
                                        </Nav.Item>

                                        <Rate modul={sessionStorage.getItem("6")} />
                                    </Nav>
                                </Col>


                        <Col sm={9} style={{  justifyContent: "stretch"}}>
                            <Tab.Content>
                                <Tab.Pane eventKey="1">
                                    <Video11/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="2">
                             <Video12/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="3">
                                    <TestSeven/>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        );
    }
}
