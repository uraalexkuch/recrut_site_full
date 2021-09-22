import React, {Component} from "react";

import './Hero.css'



export default class Hero extends Component {
    render() {
        return (

            <div className="hero-image">
                <div className="hero-text text-center col-auto">
                    <h1 className="flex-shrink-1">РЕКРУТИНГОВА ПЛАТФОРМА<br/>
                        ДОНЕЦЬКОЇ ОБЛАСНОЇ
                        СЛУЖБИ ЗАЙНЯТОСТІ
                    </h1>
                    <p>НЕ ЗУПИНЯЙСЯ В ПОШУКАХ КРАЩОГО!</p>

                </div>

            </div>
        );
    }
}

