import React, {Component} from "react";
import '../Css/HeroTrennig.css'
import Jumbotron from "react-bootstrap/Jumbotron";


export default class Hero extends Component {
    render() {
        return (
            <Jumbotron fluid className="hero-image-trennig">

                    <div className="hero-text-trennig">
                        <h1 className="hero-trennig" ><q className="hero-trennig" >Не той дурний, хто не знає… але той, хто знати не хоче. </q><br/><i>Григорій Сковорода</i>
                        </h1>


                    </div>

            </Jumbotron>


        );
    }
}

