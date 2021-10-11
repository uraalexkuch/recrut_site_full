import React, {Component} from "react";
import Hero from "../Compoments/Hero/Hero";
import CardStart from "../Compoments/CardStart/CardStart";
import Count from "../Compoments/CountWork";
import Footer from "../Compoments/Footer/Footer";
import Confetti from "./Confettti/Confeti";
import Snow from "./Confettti/Snow";
import Own from "../Compoments/Hero/Own";




export default class Home extends Component {
    render() {
        return (
<div>

                <Hero/>
                <CardStart/>
                <Count/>
                <Footer/>
            </div>
        );
    }
}
