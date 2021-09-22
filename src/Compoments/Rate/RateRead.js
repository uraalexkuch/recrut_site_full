import React, {Component} from "react";
import StarRatingComponent from 'react-star-rating-component';
import "./styles.css";

export default class RateRead extends Component {
    constructor() {
        super();
        this.state = {
            vote: this.vote,

        }
console.log(this.state.vote)
    }

    setResult = (vote) => {

        this.setState({
                vote: this.props.vote
            },

        );

    }
     getStarRating = () => {
          const sum = (accumulator, currentValue) => accumulator + currentValue;
          const ratingsArr = this.props.vote.map(reviewObj => reviewObj)
          return Math.ceil(ratingsArr.reduce(sum) / ratingsArr.length)

      }
    componentDidMount() {
        let id = this.props.modul;
        let vote= this.props.vote;
        this.setResult(vote)
                console.log(id)
        console.log(vote)
    }

    render() {
        const vote = this.state.vote
        console.log({vote})
        return (
            <div>
                <h6>Рейтинг :{this.getStarRating() }</h6>
                <h6>Кількість оцінок :{ this.props.vote.map(reviewObj => reviewObj).length }</h6>
                <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={this.getStarRating() }
                    editing={false}

                /><br/>

            </div>
        );
    }
}
