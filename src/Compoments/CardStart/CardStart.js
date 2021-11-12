import React, {Component} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import picture1 from "../../Img/facebook.webp"
import picture2 from "../../Img/link.webp"
import picture3 from "../../Img/microsoft.webp"
import "./cardstart.css"
import Row from "react-bootstrap/Row";
import {Col} from "antd";

import MyCarousel from "./MyCarousel";


export default class CardStart extends Component {
    render() {

        return (
            <Row className="rowmain">
                <Row>
                    <h1 className="titul">Цікаво та повчально </h1>
                    <hr/>
                </Row>
                <div className="row card1 ">


                    <div className="face col caption " style={{
                        padding: "0", whiteSpace: "pre-wrap",
                    }}>
                        <div id="stars-container">
                            <div id="stars"/>
                            <div id="stars2"/>
                            <div id="stars3"/>

                            <Col><img className=" img1" src={picture1}
                                      height="auto"
                                      alt=""/></Col>
                            <Col><img className=" img2" src={picture2}
                                      height="auto"
                                      alt=""/></Col>
                            <Col><img className=" img3" src={picture3}
                                      height="auto"
                                      alt=""/></Col>
                        </div>
                    </div>
                </div>

                <hr/>

                <div className="row ">
                    <MyCarousel/>

                </div>

            </Row>

        );


    }
}
