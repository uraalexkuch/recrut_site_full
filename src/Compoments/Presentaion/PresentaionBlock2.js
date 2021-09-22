import React, {Component} from "react";
import PaginationStepPresent from "./PaginationStepPresent";
import Card from "react-bootstrap/Card";
import dataFull from "../../data/presentationData.json";
import ReactPlayer from "react-player";
import "./Presentaion.css"

const data = dataFull.slice(10, 17)


export default class PresentaionBlock2 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            presentation: data,
            pageOfItems: [],
            showModuls: false,
            showBack: true
        }
        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage(pageOfItems) {

        this.setState({pageOfItems: pageOfItems});
    }

    choiceBackHandler = () => {
        this.setState({
            showModuls: !this.state.showModuls,
            showBack: !this.state.showBack,
        })
    }

    render() {
        //const fullUrl="https://www.bing.com/images/"
        const trennig = this.state.showModuls;

        return (
            trennig ?
                <div style={{
                    marginRight: "1%",
                    marginLeft: "1%",
                    marginBottom: "5%",
                    height: "auto"
                }}><span style={{
                    marginLeft: "20%",
                    marginRight: "20%"
                }}><button
                    className="btn " style={{
                    flexShrink: "1",
                    fontWeight: "bold",
                    marginLeft: "20%",
                    marginRight: "20%",
                    marginBottom: "1rem",
                    marginTop: "1rem",
                    width: "auto",
                }}
                    onClick={this.choiceBackHandler}
                >Переглянути відео ще раз
                </button></span>
                    {this.state.pageOfItems.map((presentation, id) => {
                        console.log(presentation)
                        return (
                            <div key={presentation.id}
                                 style={{
                                     borderRadius: "15px",
                                     width: "100%",
                                     maxHeight: "50%",

                                 }}>
                                <Card>
                                    <Card.Body className="col-md-6" style={{}}>
                                        <h3 className="history">{presentation.title}</h3>
                                        <Card.Text style={{}}>
                                            {presentation.text}
                                        </Card.Text>

                                    </Card.Body>
                                    <img className="history col-md-6"
                                         src={process.env.PUBLIC_URL + presentation.imageUrl}
                                         alt='image'
                                    />
                                </Card>
                            </div>
                        )
                    })
                    }
                    <PaginationStepPresent items={this.state.presentation} onChangePage={this.onChangePage}/>
                </div> :
                <div style={{
                    marginLeft: "15%",
                    marginRight: "15%"
                }}>
                        <span style={{
                            textAlign: "justify",
                            justifyContent: "stretch",
                            color: "#005BAA",
                            fontWeight: "bold"
                        }}>
                            <h4 className="text-center">Для ліпшого засвоєння подальшого матеріалу просимо перглянути  відео:<br/><br/>Приклад активного слухання </h4>

                    </span>

                    <ReactPlayer className="embed-responsive-16by9" url="https://youtu.be/kk621vKJcss" playing={false}
                                 controls={true}
                                 width="100%" height="500px"
                    /><br/>
                    <span><h4 className="text-center">Приклад багатозначності точки зору: Дивитися та бачити</h4></span><br/>
                    <ReactPlayer className="embed-responsive-16by9" url="https://youtu.be/yDF3v_P6RHo" playing={false}
                                 controls={true}
                                 width="100%" height="500px"
                    />
                    <span style={{
                        marginLeft: "20%",
                        marginRight: "20%"
                    }}><button
                        className="btn centered" style={{
                        flexShrink: "1",
                        fontWeight: "bold",
                        marginLeft: "25%",

                        width: "auto"
                    }}
                        onClick={this.choiceBackHandler}
                    >Перейти до треннігу
                        </button></span>
                </div>


        );
    }
}
