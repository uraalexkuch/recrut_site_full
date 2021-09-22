import React, {Component} from "react";
import YouTube from "@u-wave/react-youtube";
import porad from "../../data/poradnikData.json";
const poradnik = porad.slice(0, 1)

export default class VideoOne extends Component {
    constructor(props) {
        super(props)
        this.state = {
            poradnik: poradnik,
            label: "текстова версія",
            showModuls: true ,

        }
    }

    choiceBackHandler = () => {
        this.setState({
            showModuls: !this.state.showModuls,
            label: this.state.showModuls ? "відеоверсія" : "текстова версія",
            // showBack: !this.state.showBack,
        })
    }
    render() {
        const porad = this.state.showModuls;
        return (porad ?
                <div>
                <span>
                    <button
                        className="btn right" style={{
                        flexShrink: "1",
                        fontWeight: "bold",
                        marginLeft: "70%",
                        marginBottom:"1rem",
                        marginTop:"0",
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
                         video="https://www.youtube.com/watch?v=U2HCky-fRxM&list=PLDvU9FqxDqG3zfYF00uA9J7Hdcb83xTxh&index=1"

                />

                </div> :
                <div>
           <span>
    <button
        className="btn right" style={{
        flexShrink: "1",
        fontWeight: "bold",
        marginLeft: "75%",
        marginBottom:"1rem",
        marginTop:"0",
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
                            }}>

                                {poradnik.title}
                            </div>)
                        }
                    )}
                </div>

        );


    }
}
