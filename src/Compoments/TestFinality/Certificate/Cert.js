import React , {Component}from "react";
import ReactToPrint from "react-to-print";
import "../Certificate/certfin.css"
import Row from "react-bootstrap/Row";
import logo from "../../../Img/logo.png"
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";


class ComponentToPrint extends Component {
    constructor(props) {
        console.log(props.data.name)
        console.log(props.data.surname)
        super(props);
    }

    render() {
        return (
            <div className="well cert"  style={{
                width: "100%",
                height: "95%",
                margin: '10mm',
                padding: "0",
                overflow: "absolute!important",
            }}             >
                <img className="logo cert" src={logo} alt="logo"/>
                <h3 className="text-center cert" style={{
                    marginRight:"10%",marginBottom:"5%",fontSize: "30pt"
                }}>Донецька обласна служба зайнятості</h3>
                <br/>
                <h1 className="text-center cert" style={{
                    marginRight:"10%"
                }}>СЕРТИФІКАТ</h1>
                <br/>
                <h2 className="text-center cert" style={{
                    marginRight:"10%",marginBottom:"2%"
                }}>ВИДАНИЙ </h2>
                <h3 className="text-center cert" style={{
                    marginRight:"10%",marginBottom:"1%", fontSize: "30pt"
                }}>{this.props.data.name}&nbsp;&nbsp;{this.props.data.surname} </h3>

                <p><h3 className="text-center cert" style={{
                    marginRight:"10%"
                }}>
                    про закінчення онлайн курсу <br/>"Школа рекрутингу"
                    <br/>
                    рівень знань: {this.props.data.result}
                </h3></p>
                <br/><br/>
                <Row style={{marginTop: "8%",marginRight:"5%"}}>
                    <Col className="col-4 dir left">Директор
                    </Col>
                    <Col className="col-4 dir right">В.Рибалко</Col>
                </Row>
                <br/>
                <div>
                    <h3 className="text-center footer">
                        {this.props.data.date} piк</h3>
                </div>
                <br/><br/>
            </div>
        );
    }
}

class Cert extends React.Component {
    constructor(props) {
        console.log(props)
        super(props);
        this.state = {
            cert: this.props
        }
    }
    render() {
        return (
            <div>
                <ReactToPrint
                    trigger={() => <a href="#"> <Button style={{marginLeft: "35%", marginBottom: "1rem"}}>Роздрукувати
                        сертифікат</Button></a>}
pageStyle='@media print {
  html, body {
    height: initial !important;
    overflow: absolute !important;
    -webkit-print-color-adjust: exact;
  }
}'
                    content={() => this.componentRef}
                />
                < div  style = { { display :  " none " } } > <ComponentToPrint ref={(el) => (this.componentRef = el)} data={this.state.cert}  >

                </ComponentToPrint> </div>
            </div>
        );
    }
}

export default Cert;
