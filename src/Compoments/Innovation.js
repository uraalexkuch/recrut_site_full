import React, {Component} from "react";
import "./News/News.css"


export default class Innovation extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inov: [],

        }
    }

    async componentDidMount() {
        const response = await fetch('https://donocz.pp.ua/api/innovation/');
        const body = await response.json()
        if (response.status !== 200) throw Error(body.message)
            .catch(err => console.log(err))
        this.setState({
                inov: body,
            }
        )
        console.log(this.state.inov)
    }

    render() {
        let inov = null
        // eslint-disable-next-line no-lone-blocks
        {
            inov = this.state.inov.map((inov, id) => {
                return (<div style={{
                        boxShadow: "0 0 10px #333333"
                    }} key={id}>
                        <a href={inov.url} target="_blank" rel="noopener noreferrer">
                            <div style={{
                                padding: "0.8rem",
                                whiteSpace: "pre-wrap",
                                fontSize: "1 rem",
                                fontWeight: "bold",
                                justifyContent: "stretch",
                                marginBottom: "0.5rem",
                                color: "#005BAA",
                            }}><i className="fa fa-android"/> {inov.title}</div>

                        </a></div>
                )
            })
        }
        return (
            <div className="inov">
                {inov}
            </div>

        );
    }
}
