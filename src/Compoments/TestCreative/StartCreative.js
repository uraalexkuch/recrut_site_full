import React, {Component} from "react";

import "../Presentaion/Presentaion.css"
import TestMotiv from "./TestMotiv/TestMotiv";
import TestTimeType from "./TestTimeType/TestTimeType";
import TestTarget from "./TestTarget/TestTarget";
import Card from "react-bootstrap/Card";
import {CardDeck} from "react-bootstrap";

export default class StartTime extends Component {


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
                        <TestMotiv/>
                    </Card>
                    <Card style={{padding:"1%"}}>
                        <TestTimeType/>
                    </Card>
                    <Card style={{padding:"1%"}}>
                        <TestTarget/>
                    </Card>
                </CardDeck>

            </div>)
    }
}
