import React, {Component} from "react";
import  "../Google/config"
import TableData from "./TableData";

const API = 'https://sheets.googleapis.com/v4/spreadsheets/1KgGqcvPjoMcLuHxKp_MJt-4_eNP58Doqyojo3hs3iQ4/values:batchGet?ranges=a1:LE3200&majorDimension=ROWS&key=AIzaSyChpbzgVwXmWhim54rbWR9p3LY0xDXE8uo'

export  default class  Sheets  extends Component{
    constructor() {
        super();
        this.state = {
            table: [],
            load:false
        };
    }
setTable=()=>{

}
    componentDidMount() {
        fetch(API).then(response => response.json()).then(data => {
            let batchRowValues = data.valueRanges[0].values;
            const rows = [];
            for (let i = 1; i < batchRowValues.length; i++) {
                let rowObject = {};
                for (let j = 0; j < batchRowValues[i].length; j++) {
                    rowObject[batchRowValues[0][j]] = batchRowValues[i][j];
                }
                rows.push(rowObject);
            }
            this.setState({
                table: rows ,
                load:true
            },);
            console.log(this.state.table);
            console.log(this.state.load);
        });
    }

    render() {
         const load=this.state.load
        return (
            <div>
                {load?<TableData data={this.state.table} />:"Waiting"}
            </div>
        );
    }
}
