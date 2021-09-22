import React, {Component} from "react";
import "../../Css/Modul.css"
import  "./Clossariy.css"

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import glosaryData from "../../data/glosaryTwoData.json";


export default class GlosTwo extends Component {
    render() {
        const GloslineItem = ({ data }) => (
            <div style={{
                width:"100%",
                height:"auto",
                marginLeft:"10px",


            }}>

<Row  fluid style={{
    maxWidth:"100%",
    height:"auto",
    marginLeft:"15%",
    marginRight:"20%",

}}>
    <Col md={6} style={{
fontSize:"18 px",
        fontWeight:"bold",
        borderStyle:"solid",
        borderWidth:"5px",
        borderColor:"#005BAA",
        padding:"5px"
    }}>
        {data.original}

    </Col>
<hr/>
    <Col md={6} style={{
        fontSize:"18 px",
        fontWeight:"bold",
        borderStyle:"solid",
        borderWidth:"5px",
        borderColor:"#FFD947",
        padding:"5px"
    }} >
                {data.translate}

    </Col>
</Row>
    </div>)
        const Glosline = () =>
            glosaryData.length > 0 && (
                <div >
                    {glosaryData.map((data, id) => (
                        <GloslineItem data={data} key={id} />
                    ))}
                </div>

            );
        return (

            <Glosline >
                <div className="text-center">
                    <h2>Короткий словник базових слів і дієслів необхідних для роботи рекрутера,<br/>які знадобляться будь-якому рекрутеру незалежно від того, в якій сфері він працює.</h2>
                </div>
                <div >
                    <GloslineItem/>
                </div>
            </Glosline>

        );
    }
}
