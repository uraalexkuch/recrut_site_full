import React, {Component} from "react";
import PaginationStepPresent from "./PaginationStepPresent";
import Card from "react-bootstrap/Card";
import data from "../../data/historyData.json";
import "./Presentaion.css"

export default class PresentaionBlock0 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            presentation: data,
            pageOfItems: [],
            showModuls: false,
        }
        this.onChangePage = this.onChangePage.bind(this);
    }
    onChangePage(pageOfItems) {

        this.setState({ pageOfItems: pageOfItems });
    }

    render() {
        //const fullUrl="https://www.bing.com/images/"
        return (
            <>

                <div style={{
                   marginRight:"1%",
                    marginLeft:"1%",
                    marginBottom:"5%",
                    height: "auto"
                }}>
                   {this.state.pageOfItems.map(( presentation, id) => {
                        console.log( presentation)
                        return(
                            <div  key={presentation.id}
                                 style={{
                                borderRadius: "15px",
                                width: "100%",
                                maxHeight: "50%",

                            }}>
                                <Card >
                                    <Card.Body className="col-md-6" >
                                        <h3 className="history">{presentation.title}</h3>
                                        <Card.Text  >
                                            {presentation.text}
                                        </Card.Text>

                                    </Card.Body>
                                    <img  className="history col-md-6"
                                              src={process.env.PUBLIC_URL+presentation.imageUrl}
                                              alt="Card image cap"
                                    />
                                </Card>
                            </div>
                        )
                    })
                    }
                    <PaginationStepPresent items={this.state.presentation} onChangePage={this.onChangePage} />
                </div>

            </>

        );
    }
}
