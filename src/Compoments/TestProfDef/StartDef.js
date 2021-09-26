import React, {Component} from "react";
import "../Presentaion/Presentaion.css"
import Card from "react-bootstrap/Card";
import {CardDeck} from "react-bootstrap";
import TestProfDef from "./TestProf/TestProfDef";

import TablMD from "./TestTable/TablMD";
import TableTest from "./TestTable/TableTest";




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
                        <TablMD/>

                    </Card>


                </CardDeck>

            </div>)
    }
}
