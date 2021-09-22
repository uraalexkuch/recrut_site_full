import React, {Component} from "react";
import Modul from "./Modul";
import Modul2 from "./Modul2";
import Modul4 from "./Modul4";
import Modul3 from "./Modul3";
import "./ModulStart.css"
import {Link, Route, Switch, Redirect} from "react-router-dom";
import Modul5 from "./Modul5";
import Modul6 from "./Modul6";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import logo from "../../Img/logo.png";
import RateRead from "../Rate/RateRead";
import Modul7 from "./Modul7";


export default class ModulStart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            moduls: [],
            showModuls: false,
            showBack: true,

        }
    }

    async componentDidMount() {
        const modul = await fetch('https://donocz.pp.ua/api/modul/');
        const body = await modul.json()
        if (modul.status !== 200) throw Error(body.message)
        this.setState({
                moduls: body,
                showModuls: true,
                showBack: false,
                modulsStart: body
            },
        )
        sessionStorage.setItem("0", this.state.moduls[0]._id);
        sessionStorage.setItem("1", this.state.moduls[1]._id);
        sessionStorage.setItem("2", this.state.moduls[2]._id);
        sessionStorage.setItem("3", this.state.moduls[3]._id);
        sessionStorage.setItem("4", this.state.moduls[4]._id);
        sessionStorage.setItem("5", this.state.moduls[5]._id);
        sessionStorage.setItem("6", this.state.moduls[6]._id);
        console.log(body[0].link)

        //  return <Redirect to='/recruting/learn'/>
    }

    choiceModulesHandler = () => {
        this.setState({
            showModuls: false,
            showBack: !this.state.showBack,
        })
    }
    choiceBackHandler = () => {
        const start = this.state.modulsStart;
        this.setState({
            moduls: start,
            showModuls: true,
            showBack: false,

        })
        return <Redirect to='/recruting/learn'/>
        //.then(()=> window.location.reload())
    }
    choiceHandler = () => {
        this.setState({
            showModuls: !this.state.link,
            showBack: !this.state.showBack,
        })
    };

    render() {
        const divStyle = {
            marginTop: "0",
            textAlign: 'center'
        }
        const back = this.state.showBack;
        let moduls = null
        if (this.state.showModuls) {
            moduls = this.state.moduls.map((moduls, index) => {
                //console.log(moduls)
                return (<>
                        <Link to={moduls.link}>
                            <Button style={{marginBottom: "1rem", fontSize: "1.5rem"}}
                                    onClick={this.choiceModulesHandler}
                            >
                                {moduls.name}<br/>
                                {moduls.title}<br/>
                                <br/>
                                <div>
                                    <RateRead
                                        modul={moduls._id}
                                        vote={moduls.vote}
                                    /></div>
                            </Button>
                        </Link>
                    </>
                )
            })
        }
        return (
            <div>
                <Row style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "#005BAA",
                    marginLeft: "10px"
                }}>
                    <Row className="linegloss" style={{}}/>
                    <div className="titlemodul" style={{}}>ОБЕРІТЬ ПОТРІБНИЙ РОЗДІЛ</div>
                    <img className="logo" src={logo} style={{
                        height: "auto",
                    }} alt="Generic placeholder"
                    />
                </Row>
                <div style={divStyle}>
                    {back ? <Link to="/recruting/learn">
                        <Button
                            className="btn" style={{
                            flexShrink: "1",
                            fontWeight: "bold",
                            marginBottom: "0"
                        }}
                            onClick={this.choiceBackHandler}
                        >ПОВЕРНУТИСЯ ДО ВИБОРУ МОДУЛІВ
                        </Button>
                    </Link> : ''}
                    {moduls}
                    <Switch>
                        <Route excat path="/recruting/learn/modul/" component={Modul}
                            /* render={(props) => (
                                 <Modul {...props} modul={this.state.moduls[0]._id}/>
                             )}*/
                        />
                        <Route excat path="/recruting/learn/modul2" component={Modul2}/>
                        <Route excat path="/recruting/learn/modul3" component={Modul3}/>
                        <Route excat path="/recruting/learn/modul4" component={Modul4}/>
                        <Route excat path="/recruting/learn/modul5" component={Modul5}/>
                        <Route excat path="/recruting/learn/modul6" component={Modul6}/>
                        <Route excat path="/recruting/learn/modul7" component={Modul7}/>

                        <Route excat path="/recruting/learn" component={this.ModulStart}/>

                    </Switch>

                </div>

            </div>
        );
    }
}
