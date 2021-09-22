import React, {Component} from "react";

import './HeroNews.css'

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

export default class Hero extends Component {
    render() {
        return (

            <Jumbotron fluid className="hero-image-news">
                <Container className="hero-text text-center "  >
                    <div >
                        <h1>Актуально! Цікаво! Інноваційно!
                        </h1>


                    </div>
                </Container>
            </Jumbotron>
        );
    }
}

