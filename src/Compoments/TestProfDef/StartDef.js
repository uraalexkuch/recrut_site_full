import React, {Component} from "react";

import "../Presentaion/Presentaion.css"

import TestTimeType from "./TestTimeType/TestTimeType";
import TestTarget from "./TestTarget/TestTarget";
import Card from "react-bootstrap/Card";
import {CardDeck} from "react-bootstrap";
import TestProfDef from "./TestProf/TestProfDef";


export default class StartDef extends Component {


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
                        <TestProfDef/>
                    </Card>
                    <Card style={{padding:"1%"}}>
                        <TestTimeType/>
                    </Card>

                </CardDeck>

            </div>)
    }
}
