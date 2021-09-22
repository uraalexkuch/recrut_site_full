import React, {Component} from "react";
import "../News/News.css"
import PaginationStepZacon from "./PaginationStepZacon";


export default class Zacon extends Component {

    constructor(props) {
        super(props)
        this.state = {
            zacon: [],
            pageOfItems: [],
        }
        this.onChangePage = this.onChangePage.bind(this);
    }
    onChangePage(pageOfItems) {

        this.setState({ pageOfItems: pageOfItems });
    }
    async componentDidMount() {
        const response = await fetch('https://donocz.pp.ua/api/zacon/');
        const data = await response.json()
        if (response.status !== 200) throw Error(data.message)
            .catch(err => console.log(err))
        this.setState({
            zacon: data,
            pageOfItems: [],

            }
        )
        console.log(this.state.zacon)
           }
    render() {
        return (
        <div>
            <div className="container-news">
            {this.state.pageOfItems.map((zacon, id) => {
                    return(
                        <div style={{
                            boxShadow:  "0 0 10px #333333"
                        }}  key={zacon.id}>
                    <a href={zacon.url} target="_blank" rel="noopener noreferrer">
                      <div style={{
                          padding:"1em",
                          whiteSpace: "pre-wrap"
                      }}>{zacon.title}</div>
                         <hr/>
                    </a></div>
                )
            })
        }
        <PaginationStepZacon items={this.state.zacon} onChangePage={this.onChangePage} />
            </div>
        </div>
    );
}
}
