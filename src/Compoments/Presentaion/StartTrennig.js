import React, {Component} from "react";
import ReactPlayer from "react-player";
import video from "../../Img/NewPositiv.mp4"
import Communication from "./Communication";



export default class StartTrennig extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModuls: false,
            showBack: true,
        }
    }
    choiceBackHandler = () => {
        this.setState({
            showModuls: !this.state.showModuls,
            showBack: !this.state.showBack,
        })
    }
    render() {
        const trennig = this.state.showModuls;
        let userInfo = JSON.parse(localStorage.getItem("userInfo"));
        return (
            <div>
                { (trennig ? <Communication/> :
                    <div>
                    <div style={{
                    marginLeft: "20%",
                    marginRight: "20%"
                }}>
                    <span style={{
                    textAlign: "justify",
                    justifyContent: "stretch",
                    color:  "#005BAA",
                    fontWeight:"bold"
                }}>
                    <h3 className="text-center" >
                    Вітаємо, {userInfo.name}!
                    </h3>
                    <h4 className="text-center">Ви готові пройти тренніг з набуття навичок коммунікації?<br/> Трохи позитивної мотивації з початку!</h4>
                    </span>
                    <ReactPlayer className="embed-responsive-16by9" url={video} playing controls={true}
                    width="100%" height="auto"
                    />
                    <span style={{
                    marginLeft: "20%",
                    marginRight: "20%"
                }}>
                    <button
                    className="btn centered" style={{
                    flexShrink: "1",
                    fontWeight: "bold",
                    marginLeft: "25%",
                    width:"auto"
                }}
                    onClick={this.choiceBackHandler}
                    >Перейти до треннігу
                    </button></span>
                    </div>
                </div> )}
            </div>
        );
    }
}
