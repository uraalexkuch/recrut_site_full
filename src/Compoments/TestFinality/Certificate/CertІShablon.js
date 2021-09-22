import React, {Component}from "react";
import "../testfin.css"
import Row from "react-bootstrap/Row";
import logo from "../../../Img/logo.png"

import Col from "react-bootstrap/Col";


export default class CertShablon extends Component {
    constructor(props) {
        console.log(props)
        super(props);
        this.state = {
            cert: this.props
        }
    }

    render() {
        return (
            <div className=" shablon cert"
                 style={{
                     width: '210mm',
                     height: '297mm',
                                }} >
                <img style={{
                    marginTop: '15%',
                    marginLeft: '40%',
                    marginRight: 'auto',
                    width: '150px',
                    height:' auto'
                }} src={logo} alt="logo"/>
                <h3 style={{
                    color:'#005BAA',
                    fontWeight: 'bold',
                    fontSize: '18pt',
                    fontFamily: 'Sans, serif ',
                    marginRight: 'auto',
                    marginLeft:'auto',
                    textAlign:"center"
                }}
                  >Донецька обласна служба зайнятості</h3>
                <br/>
                <h1 style={{
                    color: '#005BAA',
                    fontWeight: 'bold',
                    fontSize: '50pt',
                    fontFamily: 'Sans, serif ',
                    textAlign: 'center',
                    marginRight:'auto',
                    marginLeft: 'auto'
                }}
                   >СЕРТИФІКАТ</h1>
                <br/>
                <h2 style={{
                    color: '#005BAA',
                    fontWeight: 'bold',
                    fontSize: '34pt',
                    fontFamily: 'Sans, serif',
                    marginRight: 'auto',
                    marginLeft: 'auto'
                }} >ВИДАНИЙ </h2>
                <h3 style={{
                    color:'#005BAA',
                    fontWeight: 'bold',
                    fontSize: '20pt',
                    fontFamily: 'Sans, serif ',
                    marginRight: 'auto',
                    marginLeft:'auto',
                    textAlign:"center"
                }}>{this.props.name}&nbsp;&nbsp;{this.props.surname} </h3>

                <p><h3 style={{
                    color:'#005BAA',
                    fontWeight: 'bold',
                    fontSize: '18pt',
                    fontFamily: 'Sans, serif ',
                    marginRight: 'auto',
                    marginLeft:'auto',
                    textAlign:"center"
                }}>
                    про закінчення онлайн курсу <br/>"Школа рекрутингу"
                    <br/>
                    рівень знань: {this.props.result}
                </h3></p>
                <br/><br/>
                <Row style={{marginTop: "10%"}}>
                    <Col style={{
                        color: '#005BAA',
                        fontWeight: 'bold',
                        fontSize: '16pt',
                        fontFamily: 'Sans, serif',
                        marginTop:'2rem ',
                        marginLeft:'12%',
                        texAlign: 'left',
                        paddingLeft: '3rem',
                    }} >Директор
                    </Col>
                    <Col style={{
                        color: '#005BAA',
                        fontWeight: 'bold',
                        fontSize: '16pt',
                        fontFamily:' Sans, serif ',
                        marginTop:'2rem ',
                        marginRight:'auto' ,
                        marginLeft:'auto',
                        paddingRight:'20% ',
                        textAlign: 'right',
                    }}>В.Рибалко</Col>
                </Row>
                <br/>
                <div>
                    <h3 style={{
                        color: '#005BAA',
                        fontWeight: 'bold',
                        fontSize: '15pt',
                        fontFamily:' Sans, serif ',
                        marginTop:'10% ',
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        textAlign:"center"
                    }}>
                        {this.props.date} piк</h3>
                </div>
                <br/><br/>
            </div>
        );
    }
}

