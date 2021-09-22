import React, { Component } from "react";

import ReactCardCarousel from "react-card-carousel";
import CardCaruosel from "./Card Caruosel";
import CardCaruosel1 from "./Card Caruosel1";
import CardCaruosel2 from "./Card Caruosel2";
export default class MyCarousel extends Component {
    static get CONTAINER_STYLE() {
        return {
            position: "relative",
            height: "70vh",
            width: "40%",
            display: "flex",
            flex:0.7,
            justifyContent: "stretch",
            alignItems: "middle",
            paddingTop:0,
            marginTop:0
        };
    }

    static get CARD_STYLE() {
        return {
            height: "62vh",
            maxWidth: "50vw",
            paddingTop: "1rem",
            textAlign: "center",
            fontSize: "1 rem",
            textTransform: "uppercase",
            borderRadius: "10px",
            boxSizing: "border-box"
        };
    }

    render() {
        return (
            <div style={MyCarousel.CONTAINER_STYLE}>
                <ReactCardCarousel autoplay={true} autoplay_speed={4500} spread="narrow">
                    <div style={MyCarousel.CARD_STYLE}><CardCaruosel/></div>
                    <div style={MyCarousel.CARD_STYLE}><CardCaruosel1/></div>
                    <div style={MyCarousel.CARD_STYLE}><CardCaruosel2/></div>
                </ReactCardCarousel>
            </div>
        );
    }
}
