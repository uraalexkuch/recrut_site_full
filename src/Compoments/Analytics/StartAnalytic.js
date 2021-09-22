import React, {Component} from "react";
import Button from "react-bootstrap/Button";
import RegisterFormik from "../../Compoments/Login/RegisterFormik";
import LoginFormik from "../../Compoments/Login/LoginFormik";
import Footer from "../Footer/Footer";
import Analytics from "./Analytics";
import HeroAbout from "../HeroAbout";



export default class StartAnalytic extends Component {

    constructor() {
        super();
        this.state = {
            isUser: false,
            authForms: true,
            user: "",
            token: "",
            test: [],
            test0: [],
            modul1: [],
            modul2: [],
            modul3: [],
            modul4: [],
            modul5: [],
            modul6: [],
            final: []
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
            const user = userInfo.surname;
            const token = userInfo.accessToken;
            this.setState(
                {
                    isUser: true,
                    user: user,
                    token: token
                });
            console.log(`${user} is logged IN`);
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
        const {isUser, authForms, user} = this.state;
        return (
            <div>
                <HeroAbout/>
                <div>
                    {!isUser ? (
                            authForms ? (
                                    <div>
                                        <RegisterFormik toggleToSignIn={this.toggleAuthForms}/>
                                        <br/>
                                        <Button
                                            className="btn-success"
                                            onClick={this.toggleAuthForms.bind(this, false)}
                                        > Увійти <i className="fa fa-sign-in"/>
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
                                <br/>
                                <button className="btn  pull-right"
                                        style={{
                                            width: "max-content",
                                            height: "auto",
                                            marginRight: "2rem",
                                            marginBottom:"1rem",
                                            marginTop:"0"
                                        }} onClick={this.logout}>Вийти&nbsp;&nbsp;{user}
                                </button>
                                <Analytics/>
                            </div>
                        )}
                </div>
                <Footer/>
            </div>
        );
    }
}
