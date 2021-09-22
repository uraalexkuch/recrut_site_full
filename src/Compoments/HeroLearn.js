import React, {Component} from "react";
import '../Css/HeroLearn.css'



export default class HeroLearn extends Component {
    render() {
        return (
            <div className="page-heading_learn header-text">
                <div className="container">
                    <div className="row">
                        <div className="text-center col-auto">
                            <h1>Наші відеокурси</h1>
                            <span style={{
                                fontWeight:"bold0",
                                color: "#FFD947"
                            }}>Ми націлені на пошук нових можливостей!</span>
                        </div>
                    </div>
                </div>
            </div>
        )
            ;
    }
}