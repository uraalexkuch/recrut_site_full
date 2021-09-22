import React, {Component} from "react";
import API from '../Forum/utils/API';
import StarRatingComponent from 'react-star-rating-component';
import "./styles.css";
import swal from "sweetalert";
import Button from "react-bootstrap/Button";

export default class Rate extends Component {
    constructor()
    {
        super();
        this.state = {
            setrate:
                {
                    vote: '',
                    modul: ''
                }
        }

    }

    onStarClick(nextValue) {
        this.setState({vote: nextValue});
    }

    setRate = async () => {
        const id=this.props.modul
        const setrate = this.state.setrate
        API.post('/modul/rate/'+id, setrate)
            .then(response => {
                    console.log(response)
                    if (response) {
                        swal("Дякуємо за оцінку!",)
                    }
                },
                error => {
                    swal("Error!");
                }
            );
        console.log(this.state.setrate)
    }
    setResult = () => {
        let vote = this.state.vote;
        if(vote){
        this.setState({
                setrate: {
                    modul: this.props.modul,
                    vote: vote
                }
            },
            this.setRate
        )} else
        {
            swal("Оцініть модуль!");
        }
    }
    render() {
        const {vote} = this.state;
         console.log(this.props.modul)
        return (
            <div >
                <p>Рейтинг : {vote}</p>

                    <StarRatingComponent
                        name="app6"
                        value={this.state.vote}
                        onStarClick={this.onStarClick.bind(this)}
                        />
               <br/>
                <Button  style={{
                    width:"auto"
                }} onClick={this.setResult.bind(this)}>Оцініти</Button>
            </div>
        );
    }
}
