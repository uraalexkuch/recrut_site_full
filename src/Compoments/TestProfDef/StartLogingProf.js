import React, {Component} from "react";
import Hero from "../HeroTrennig";
import Footer from "../Footer/Footer";
import Button from "react-bootstrap/Button";
import RegisterFormik from ".././Login/RegisterFormik";
import LoginFormik from ".././Login/LoginFormik";
import StartDef from "./StartDef";


export default class StartLogingProf extends Component {

    constructor() {
        super();
        this.state = {
            isUser: false,
            authForms: true
        };
        this.checkUser = this.checkUser.bind(this);
        this.toggleAuthForms = this.toggleAuthForms.bind(this);
        this.changeUserState = this.changeUserState.bind(this);
        this.logout = this.logout.bind(this);
    }

    checkUser() {
        let userInfo = JSON.parse(localStorage.getItem("userInfo"));

        if (!userInfo) {
            console.log("user is NOT logged in");
            this.setState({isUser: false});
        } else {
            // let [info]=userInfo
            //let{surname}=info;
            //console.log({surname})
            this.setState({isUser: true});
            console.log(`${userInfo.surname} is logged IN`);
        }
    }

    changeUserState() {
        this.setState({
            isUser: true,

        });
    }

    toggleAuthForms(Show_Hide) {
        this.setState({authForms: Show_Hide});
    }

    logout() {
        this.setState({isUser: false});
        localStorage.removeItem("userInfo");
    }

    componentDidMount() {
        this.checkUser();
    }

    componentWillUnmount() {
        // fix Warning: Can't perform a React state update on an unmounted component
        this.setState = (state, callback) => {
        };
    }

    render() {
        const {isUser, authForms} = this.state;
       const userLabel = JSON.parse(localStorage.getItem("userInfo"));
        return (<><Hero/>
                <div>
                    {!isUser ? (
                            authForms ? (
                                    <div>
                                        <RegisterFormik toggleToSignIn={this.toggleAuthForms}/>
                                        <br/>
                                        <Button
                                            className="btn-success"
                                            onClick={this.toggleAuthForms.bind(this, false)}
                                        > ???????????? <i className="fa fa-sign-in"/>
                                        </Button>

                                    </div>
                                ) :
                                (
                                    <div>
                                        <LoginFormik changeUserState={this.changeUserState}/>
                                    </div>

                                )
                        ) :
                        (
                            <div>
                                <div>
                                <br/>
                                <button className="btn  pull-right"
                                        style={{
                                            width: "max-content",
                                            height: "auto",
                                            marginRight: "2rem",
                                            marginBottom:"1rem",
                                            marginTop:"0"
                                        }} onClick={this.logout}>??????????&nbsp;&nbsp;{  userLabel.surname}
                                </button>
                                </div>
                                <br/>
                        <div>
                                <StartDef/>
                        </div>
                        </div>
                        )}
                </div>
                <Footer/>
            </>
        );
    }
}
