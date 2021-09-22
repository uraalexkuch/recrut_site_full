import React from 'react';
import { Pie} from 'react-chartjs-2';

function Result1(props) {
   // console.log(props)
const data = {
    labels: [
        props.label0, props.label1, props.label2
    ],
    datasets: [{
        data: [props.data0, props.data1, props.data2],
        backgroundColor: [
            '#36A2EB',
            '#FF6384',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#36A2EB',
            '#FF6384',
            '#FFCE56'
        ]
    }]
};
    return (
        <div >
        <Pie
            data={data}
            width='auto'
             height='100%'
        />
        </div>
    )
}


export default Result1
