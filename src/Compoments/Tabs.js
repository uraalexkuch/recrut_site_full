import React, {Component} from "react";
import '../Css/Tabs.css'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import TabContainer from "react-bootstrap/TabContainer";
import TabContent from "react-bootstrap/TabContent";
import TabPane from "react-bootstrap/TabPane";
import Container from "react-bootstrap/Container";
import Footer from "./Footer/Footer";
import Zacon from "./Zacon/Zacon";
import Foto from "./Foto";
import Innovation from "./Innovation";

import NewsPagination from "./News/NewsPagination";
import HeroNews from "./News/HeroNews";


export default class Tabs extends Component {
    render() {
        return (<>
                <HeroNews/>
                <TabContainer clasName="left-tabs-example" id="left-tabs-example" defaultActiveKey="1" style={{
                    padding:"0"
                }}>
                    <Row style={{
                    marginLeft:"0.05rem",
                        marginRight:"0.18rem"
                    }}>
                        <Col md={3} lg={2}  className="text-center" style={{
                            backgroundColor:"#005BAA"
                        }}>
                            <Nav variant="tabs" className=" flex-column flex-row nav-justified" style={{
                                marginTop:"10px",
                                fontSize:"18px",
                                backgroundColor:"#ffffff",
                                color:  "#005BAA",
                                fontWeight: "bold",
                                padding:"-1rem"

                            }}>
                                <Nav.Item >
                                    <Nav.Link  className="flex-fill nav-justified" eventKey="1">
                                        <Container  fluid="auto " clearfix="true">
                                            <div className="text-center">
                                                Новини
                                            </div>
                                        </Container>
                                    </Nav.Link>
                                </Nav.Item>

                                <Nav.Item >
                                    <Nav.Link className="flex-fill nav-justified" eventKey="2">
                                        <Container fluid="auto"  clearfix="true">
                                            <div className="text-center">
                                                Законодавство
                                            </div>
                                        </Container></Nav.Link>
                                </Nav.Item>
                                <Nav.Item >
                                    <Nav.Link className="flex-fill nav-justified" eventKey="3">
                                        <Container fluid="auto"  clearfix="true">
                                            <div className="text-center">
                                                Фотогалерея
                                            </div>
                                        </Container>
                                    </Nav.Link>
                                </Nav.Item>

                            </Nav>
                            <div className="vl"/>
                           <div>
                               <div className="soc" style={{
                                   marginTop:"1rem",
                                 marginLeft:"1rem",
                                   marginBottom:"1rem",
                                width: "auto",
                                height: "auto",
                                display: "inline-block",

                               fontWeight:"bold",
                              textAlign: "center",
                                backgroundColor: "#005BAA",
                                color: "#FFD947",
                            }}>Ми у соціальніх мережах
                            </div>
                            <div className="social-icons flex-fill flex-wrap" style={{

                                height: "auto",
                                display: "block",
                                lineHeight: "34px",
                                textAlign: "center",
                                backgroundColor: "#005BAA",
                                color: "#FFD947",
                                bordeRadius: "50%",
                                transition:" all 0.3s"
                            }}>
                                <div>
                                <span>
                                    <a rel="noopener noreferrer"
                                       href="https://www.facebook.com/groups/641144929592951/"
                                        target="_blank"
                                    > <i className="fa fa-facebook" />
                                    </a>
                                </span>
                                <span>
                                    <a rel="noopener noreferrer"
                                       href="https://t.me/DonOczBot"
                                        target="_blank">
                                        <i className="fa fa-telegram" />
                                    </a>
                                </span>
                                <span>
                                    <a rel="noopener noreferrer"
                                       href="https://twitter.com/donemployment"
                                        target="_blank"
                                    >
                                        <i className="fa fa-twitter" />
                                    </a>
                                </span>
                            </div>
                                <div>
                                <span>
                                    <a rel="noopener noreferrer"
                                       href="https://www.youtube.com/channel/UCLJsK2Om57oel0f_8DGK9qQ"
                                       target="_blank">
                                        <i className="fa fa-youtube" />
                                    </a>
                                </span>

                                </div>
                            </div></div>
                        </Col>

                        <Col md={6} lg={7} >
                            <TabContent>
                                <TabPane eventKey="1" className="tab-pane">
                                    <Container className="news"  style={{
                                        boxShadow: "0 0 10px #333333",
                                        maxWidth: "100%",
                                        height:"auto",
                                        margin:"0",
                                        padding:"0"
                                    }}>
                                        <NewsPagination/>
                                    </Container>
                                </TabPane>
                                <TabPane eventKey="2">
                                    <Container className="news" style={{
                                        boxShadow: "0 0 10px #333333",
                                        maxWidth: "100%",
                                        height:"auto",
                                        margin:"0",
                                        padding:"0"
                                    }}>
                                        <Zacon/>
                                    </Container>
                                </TabPane>
                                <TabPane eventKey="3">
                                    <Container className="news" style={{
                                        boxShadow: "0 0 10px #333333",
                                        maxWidth: "100%",
                                        height:"auto",
                                        margin:"0",
                                        padding:"0"
                                    }} >
                                        <Foto/>
                                    </Container>
                                </TabPane>

                            </TabContent>
                        </Col>
                        <Col md={3}   >
                            <div
                                style={{
                                marginTop:"1rem",

                                    marginBottom:"1rem",
                                    marginRight:"1rem",
                                width: "100%",
                                height: "auto",
                                display: "inline-block",
                                fontSize:"1.25rem",
                                fontWeight:"bold",
                                textAlign: "center",
                                backgroundColor: "#005BAA",
                                color: "#FFD947",
                            }}>
                                <h4 style={{
                                    color: "#FFD947"
                                }}>Наші інновації</h4></div>
                                <Innovation/>

                        </Col>
                    </Row>

                </TabContainer>
                <Footer/>
            </>
        );
    }
}

