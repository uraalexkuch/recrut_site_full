import React from 'react'
import { Bar } from  'react-chartjs-2';

function Result(props) {
    console.log(props)
    const data = {
        labels: ['Модуль 1', 'Модуль 2', 'Модуль 3', 'Модуль 4', 'Модуль 5', 'Модуль 6', 'Фінальний іспит'],
        datasets: [
            {
                label: 'Охоплення тестуванням',
                data: [props.data0, props.data1, props.data2, props.data3, props.data4, props.data5, props.data6],
                backgroundColor: [
                    '#800000',
                    '#0000FF',
                    '#FFD947',
                    '#008B8B',
                    '#4B0082',
                    '#D2691E',
                    '#000080',
                ],
                borderColor: [
                    '#005BAA',
                    '#FFD947',
                    '#005BAA',
                    '#005BAA',
                    '#FFD947',
                    '#005BAA',
                    '#FFD947',
                ],
                borderWidth: 3,
            },
        ],
    }

    const options = {
        legend: {
            display: false,
        },
        responsive: true,
        type:'bar',
        scales: {
           xAxes: [
                {
                    ticks: {
                        beginAtZero: true,

                    },
                },
            ],
            yAxes: [
                {
                    ticks: {
                        max: 100,
                        min: 0,
                        stepSize: 10
                    },
                },
            ],
        },
    }
    return (
    <Bar data={data} options={options} />)
}


export default Result
