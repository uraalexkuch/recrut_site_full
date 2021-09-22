import React, {Component} from "react";
import YouTube from "@u-wave/react-youtube";
import porad from "../../data/poradnikData.json";

const poradnik = porad.slice(3, 4)

export default class VideoFour extends Component {
    constructor(props) {
        super(props)
        this.state = {
            poradnik: poradnik,
            label: "текстова версія",
            showModuls: true,

        }
    }

    choiceBackHandler = () => {
        this.setState({
            showModuls: !this.state.showModuls,
            label: this.state.showModuls ? "відеоверсія" : "текстова версія",

        })
    }

    render() {
        const porad = this.state.showModuls;
        return (
            porad ?
                <div>
                <span>
                    <button
                        className="btn right" style={{
                        flexShrink: "1",
                        fontWeight: "bold",
                        marginLeft: "70%",
                        marginBottom: "1rem",
                        marginTop: "0",
                        width: "auto"
                    }}
                        onClick={this.choiceBackHandler}
                    >{this.state.label}
                </button>
                </span>
                    <YouTube className="embed-responsive-16by9" style={{
                        width: "100%",
                        height: "600px"
                    }}
                             video="Sl6HIE7IZw0"
                    />

                </div>
                :
                <div>
           <span>
    <button
        className="btn right" style={{
        flexShrink: "1",
        fontWeight: "bold",
        marginLeft: "75%",
        marginBottom: "1rem",
        marginTop: "0",
        width: "auto"
    }}
        onClick={this.choiceBackHandler}
    >{this.state.label}
                        </button>
                      </span>
                    {poradnik.map((poradnik, idx) => {
                            return (<div style={{
                                whiteSpace: "pre-wrap",
                                textAlign: "justify"
                            }}   key={idx}>
                                {poradnik.title}
                            </div>)
                        }
                    )}
                </div>

        );


    }
}
