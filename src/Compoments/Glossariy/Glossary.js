import React, {Component} from "react";
import logo from "../../Img/logo.png"
import GlosOne from "./GlosOne";
import Footer from "../Footer/Footer";
import Row from "react-bootstrap/Row";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import GlosTwo from "./GlosTwo";
import GlosThird from "./GlosThird";
import HeroGlos from "./HeroGlos";
import  "./Clossariy.css"


export default class Glossary extends Component {
    render() {

        return (
            <>
                <HeroGlos/>

                <Tabs className="modul" defaultActiveKey="1" id="uncontrolled-tab-example " >
                    <Tab eventKey="1" title="Корисні іменники " style={{
                        marginBottom:"15px"
                    }}>
                        <Row style={{
                            fontSize:"24px",
                            fontWeight:"bold",
                            color:"#005BAA",
                            marginLeft:"10px"
                        }}>
                            <Row className="linegloss" style={{
                                marginLeft:"15px",

                                height:"10px",
                                backgroundColor:"#FFD947"
                            }} />
                            <div className="titlegloss" style={{paddingTop:"20px",
                                marginLeft:"10px"
                            }}>ГЛОСАРІЙ ТЕРМІНІВ</div>
                            <img className="logo" src={logo} style={{
                                 height: "auto",
                                              }}
                                 alt="Generic placeholder"
                            />
                        </Row>
                        <GlosOne/>
                    </Tab>
                    <Tab eventKey="2" title="Основні дієслова">
                        <Row style={{
                            fontSize:"24px",
                            fontWeight:"bold",
                            color:"#005BAA",
                            marginLeft:"10px"
                        }}>
                            <Row className="linegloss" style={{
                                marginLeft:"15px",
                                height:"10px",
                                backgroundColor:"#FFD947"
                            }} />
                            <div className="titlegloss" style={{paddingTop:"20px",
                                marginLeft:"10px"
                            }}>ГЛОСАРІЙ ТЕРМІНІВ</div>
                            <img className="logo" src={logo} style={{
                                height: "auto",
                                                     }}
                                 alt="Generic placeholder"
                            />
                        </Row>
                        <GlosTwo/>
                    </Tab>
                    <Tab eventKey="3" title="Основні питання">
                        <Row style={{
                            fontSize:"24px",
                            fontWeight:"bold",
                            color:"#005BAA",
                            marginLeft:"10px"
                        }}>
                            <Row  className="linegloss" style={{
                                marginLeft:"15px",
                                    height:"10px",
                                backgroundColor:"#FFD947"
                            }} />
                            <div className="titlegloss" style={{paddingTop:"20px",
                                marginLeft:"10px"
                            }}>ГЛОСАРІЙ ТЕРМІНІВ</div>
                            <img className="logo" src={logo} style={{
                                height: "auto",
                            }}
                                 alt="Generic placeholder"
                            />
                        </Row>
                        <GlosThird/>
                    </Tab>

                </Tabs>


                <Footer/>
            </>
        );


    }
}
