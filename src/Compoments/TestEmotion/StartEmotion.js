import React, {Component} from "react";

import "../Presentaion/Presentaion.css"
import TestEmotionBurn from "./TestEmotionBurn/TestEmotionBurn";

import Card from "react-bootstrap/Card";
import {CardDeck} from "react-bootstrap";
import TestEmotionBrain from "./TestEmotionBrain/TestEmotionBrain";

export default class StartEmotion extends Component {


    render() {
        return (
            <div style={{
                marginLeft: "15%",
                marginRight: "15%"
            }}>
                        <span style={{
                            textAlign: "justify",
                            justifyContent: "stretch",
                            color: "#005BAA",
                            fontWeight: "bold"
                        }}>
                            <h4 className="text-center">Трохи практики: </h4>
                    </span>
                <CardDeck style={{display:"inline-block"}}>
                    <Card style={{padding:"1%"}}>
                        <TestEmotionBurn/>
                    </Card>
                    <Card style={{padding:"1%"}}>
                        <TestEmotionBrain/>
                    </Card>

                </CardDeck>

            </div>)
    }
}
