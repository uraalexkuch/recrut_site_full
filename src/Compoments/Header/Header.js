import React, {Component, Suspense, lazy} from 'react';
import logo from "../../Img/logo.png"
import "./Header.css"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import About from "../../Pages/About";
import Glossary from "../Glossariy/Glossary";
import TestFinalyty from "../TestFinality/TestFinalyty";
import StartAnalytic from "../Analytics/StartAnalytic";
import StartGoogle from "../Google/StartGoogle";
import Home from "../../Pages/Home";
import Tabs from "../Tabs";
import startModuls from "../Moduls/startModuls";
import startForum from "../Forum/startForum";
import StartLoging from "../Login/StartLoging";
import {NavDropdown} from "react-bootstrap";

import StartLogingFPDHK from "../Fpdhk/StartLogingFPDHK";
import StartLogingPhone from "../TelephoneCommunucation/StartLogingPhone";

import StartLogingTime from "../TestTime/StartLogingTime";
import StartLogingProf from "../TestProfDef/StartLogingProf";
import StartLogingEmotion from "../TestEmotion/StartLogingEmotion";
/*const Home = lazy(() =>import( "../../Pages/Home"));
const Tabs = lazy(() =>import( "../Tabs"));
const TestFinalyty = lazy(() =>import( "../TestFinality/TestFinalyty"));
const StartLogingFPDHK= lazy(() =>import("../Login/StartLogingFPDHK"));
const startForum = lazy(() =>import("../Forum/startForum"));
const startModuls = lazy(() =>import("../Moduls/startModuls"));
const StartAnalytic = lazy(() =>import("../Analytics/StartAnalytic"));
const About = lazy(() =>import( "../../Pages/About"));
const StartGoogle= lazy(() =>import("../Google/StartGoogle"));
const Glossary = lazy(() =>import("../Glossariy/Glossary"));*/


export default class Header extends Component {
    render() {

        return (
            <header>
                <Navbar className="header " collapseOnSelect expand="lg" style={{
                    marginRight: "150px"
                }}>
                    <Navbar.Brand className="logo" href="/recruting/" style={{
                        marginRight: "200px"
                    }}>
                        <img className="logo-img"
                             src={logo}
                             height="auto"
                             width="50"
                             alt="logo"
                        />{' '}???????????????????????? ??????????????????<br/>
                        ?????????????????? ????????????????<br/>
                        ???????????? ????????????????????
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-toggle" style={{
                        marginLeft: "70%",
                        color: "#FFD947",
                        border: "5px solid #FFD947"
                    }}/>

                    <Navbar.Collapse id="nav-item-child">
                        <Nav className="mr-auto"/>
                        <Nav className="test" style={{
                            marginRight: "100px",
                            color: "#FFD947"
                        }}>
                            <Nav.Link href="/recruting/">??????????????</Nav.Link>
                            <Nav.Link href="/recruting/about">?????? ??????</Nav.Link>
                            <Nav.Link href="/recruting/news">????????????</Nav.Link>
                            <Nav.Link href="/recruting/glossary">????????????????</Nav.Link>
                            <Nav.Link href="/recruting/learn">?????????????????? ??????????????????</Nav.Link>
                            <NavDropdown title="????????????????" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/recruting/trennig/trennig">?? ????????????  ??????????????????????</NavDropdown.Item>
                                <NavDropdown.Item href="/recruting/trennig/phone">?????????????????? ?????????????????? ??????????????????????</NavDropdown.Item>
                                <NavDropdown.Item href="/recruting/trennig/fpdhk">???????????????? ?????? ?????????? ???????????????????????? <br/>???????????????? ??????????????</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/recruting/forum">??????????</Nav.Link>
                            <Nav.Link href="/recruting/exam">??????????</Nav.Link>
                            <Nav.Link href="/recruting/analytics">??????????????????</Nav.Link>
                            <Nav.Link href="/recruting/sheets">Google</Nav.Link>
                            <NavDropdown title="??????????" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/recruting/time">?????????? ???? "????????-??????????????????????"</NavDropdown.Item>
                                <NavDropdown.Item href="/recruting/profdef">???????? ???? "????????????????????<br/> ???????????????????? ??????????????????????" </NavDropdown.Item>
                                <NavDropdown.Item href="/recruting/emotion">?????????? ???? ?????????????????????? ?????????????????? </NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Router>
                    <Suspense fallback={<div>????????????????????????...</div>}>
                        <Switch>
                            <Route excat path="/recruting/about" component={About}/>
                            <Route excat path="/recruting/news" component={Tabs}/>
                            <Route excat path="/recruting/glossary" component={Glossary}/>
                            <Route excat path="/recruting/learn" component={startModuls}/>
                            <Route excat path="/recruting/trennig/trennig" component={StartLoging}/>
                            <Route excat path="/recruting/trennig/phone" component={StartLogingPhone}/>
                            <Route excat path="/recruting/trennig/fpdhk" component={StartLogingFPDHK}/>
                            <Route excat path="/recruting/forum" component={startForum}/>
                            <Route excat path="/recruting/exam" component={TestFinalyty}/>
                            <Route excat path="/recruting/analytics" component={StartAnalytic}/>
                            <Route excat path="/recruting/sheets" component={StartGoogle}/>
                            <Route excat path="/recruting/time" component={StartLogingTime}/>
                            <Route excat path="/recruting/emotion" component={StartLogingEmotion}/>
                            <Route excat path="/recruting/profdef" component={StartLogingProf}/>
                            <Route excat path="/recruting/" component={Home}/>
                        </Switch>
                    </Suspense>
                </Router>

            </header>


        );
    }
}
