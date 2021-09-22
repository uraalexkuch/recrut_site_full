import React, {Component} from "react";
import HeroAbout from "../Compoments/HeroAbout";
import Team from "../Compoments/Team/Team";
import Team2 from "../Compoments/Team/Team2";
import Footer from "../Compoments/Footer/Footer";
import Row from "react-bootstrap/Row";
import logo from "../Img/logo.png";
import "../Css/About.css"


export default class About extends Component {
    render() {
        return (
<div>

        <HeroAbout/>
    <Row  style={{
        fontSize:"24px",
        fontWeight:"bold",
        color:"#005BAA",
        marginLeft:"10px",
        marginRight:"0",
        width:"95%"
    }}>
        <Row className="lineabout"  />
        <div  style={{paddingTop:"20px",
            marginLeft:"10px",
            color: "#005BAA",
        }}>НАША КОМАНДА</div>
        <img className="logo" src={logo} style={{

        }}
             alt="Generic placeholder"
        />
    </Row>
<Team/>

<Team2/>

<Footer/>
        </div>
    )
        ;
    }
}
