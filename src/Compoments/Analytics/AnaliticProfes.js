import React, {useState} from "react";
import MUIDataTable from "mui-datatables";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "../Google/Table.css";
import Button from "react-bootstrap/Button";
import VacCard from "../Google/VacCard";

//import VacCard from "../Google/VacCard.js;


export default function AnaliticProfes(props) {
    const [responsive, setResponsive] = useState("standard");
    const [showItem, setShowitem] = useState(true);
    const [id, setId] = useState([])
    const columns = [
        {
            name: "posad",
            label: "Посада (професія) за результатами анкетування",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "vacreestr",
            label: "Внесено зареєстровану вакансію (дата)",
            options: {
                filter: true,
                sort: true,
            },
        }, {
            name: "vacukomp",
            label: "Укомплектовано за сприряння СЗ (дата)",
            options: {
                filter: true,
                sort: true,
            },
        },
        /*{
            name: "datemeet",
            label: "Дата зустрічі з роботодавцем",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "datatel",
            label: "Телефонна розмова (дата)",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "note",
            label: "Примітка",
            options: {
                filter: true,
                sort: false,
            }
        }
         {
               name: "posad",
               label: "Посада (професія) за результатами анкетування",
               options: {
                   filter: true,
                   sort: true,
               },
           },
             {
               name: "hiremonth",
               label: "Прогнозний період надання вакансій (місяць)",
               options: {
                   filter: true,
                   sort: true,
               },
           },
           {           name: "zvit",
               label: "Надано звіт 3-ПН (дата)",
               options: {
                   filter: true,
                   sort: true,
               },
           },
           {
               name: "vacpersp",
               label: "Внесено перспективну вакансію (дата)",
               options: {
                   filter: true,
                   sort: true,
               },
           },
           {
               name: "vacreestr",
               label: "Внесено зареєстровану вакансію (дата)",
               options: {
                   filter: true,
                   sort: true,
               },
           },
           {
               name: "navch",
               label: "Направлено на навчання (кількість осіб)",
               options: {
                   filter: true,
                   sort: true,
               },
           },
           {
               name: "praznavch",
               label: "Працевлаштовано після проходження профнавчання (кількість осіб)",
               options: {
                   filter: true,
                   sort: true,
               },
           },
           {
               name: "vacukomp",
               label: "Укомплектовано за сприряння СЗ (дата)",
               options: {
                   filter: true,
                   sort: true,
               },
           },

           }*/
    ]


    const data0 = props.data.map((item) => {
        return item
    })
    const data00 = props.data.map((item) => {
        return item.posad.map((rows) => {
            return [rows.titleposad,rows.vacreestr.vacreestr, rows.vacukomp.vacukomp].map((row) => {
                return [row]
            })
        })
    })
console.log(data00)
    const data1 = [data0.map((item) => {
       // console.log(item.posad)
        return (item.posad

        )

    })]



    const options = {
        filter: true,
        filterType: "dropdown",
        responsive: "standard",

        rowsPerPage: 20,
        selectableRows: false,
        expandableRows: false,

        page: 1
    };
    let filterTest = [];
    let filterTest0 = [];
    let filterTest1 = [];
    let filterTest2 = [];
    let filter = [];
    filterTest = props.data.map((reviewObj, index) => {

        if (reviewObj.posad !== []) {
            return (
                reviewObj.posad.map((row) => (
                    row.titleposad
                      )
                )

            )
        } else {
            return [reviewObj];
        }
    });
    filterTest0 = props.data.map((reviewObj, index) => {
        if (reviewObj.posad !== []) {
            return (
                reviewObj.posad.map((row) => (
                    row)
                ))
        } else {
            return [reviewObj];
        }
    });
    filterTest1 = filterTest0.map((reviewObj, _idx) => {
        if (reviewObj !== []) {

            return (
                reviewObj.map((row) => (
                    row.vacreestr.vacreestr)
                ))
        } else {
            return [reviewObj];
        }
    });
    filterTest2 = filterTest0.map((reviewObj, _idx) => {
        if (reviewObj !== []) {

            return (
                reviewObj.map((row) => (
                    row.vacukomp.vacukomp)
                ))
        } else {
            return [reviewObj];
        }
    });
    filter = filterTest.map((item) => {
        return (
            item.map((row) => {
                return (
                    [row].map((rows) => {
                        return (
                            [rows])}))
            })
        )

    })
    let filteredData = filter.flatMap((data) => {
       // console.log(data)
            if (props.data === null) {
                return data
            } else if (data != null) {
                return (
                    data )
            }
        }
    )
    let filtredTest = filteredData.filter((data) => {
            if (filteredData === null) {
                return data0
            } else if (data == "водій автотранспортних засобів"&&"8322(1), водій автотранспортних засобів") {
                return (
                    data)
            }
        }
    )
    const result = filteredData.reduce((acc, rec, index) => {
        return (typeof acc[rec] !== 'undefined')
            ? { ...acc, [rec]: acc[rec] + 1 }
            : { ...acc, [rec]: 1 }
    }, {})

    let uniqueCollection = new Set(filteredData);

    let uniqueCollection0 = [...new Set(filteredData)];
  //  console.log("shag0 "+filtredTest)
   console.log(result)
    //console.log(uniqueCollection0)

        console.log(filteredData)
    return (<>
            <React.Fragment>

                <MUIDataTable
                    title={"Моніторинг опрацювання результатів 7 етапу Інтернет-анкетування роботодавців з використанням «Google Forms» "}
                    data={
                        filteredData
                    }
                    columns={columns}
                    options={options}
                />


                <h3>Моніторинг опрацювання результатів 7 етапу Інтернет-анкетування роботодавців з використанням «Google
                    Forms» </h3>
                <tr key={id}>
                    <td key={props.data._id} >
                        <TableContainer style={{
                            width: "auto"
                        }} component={Paper}>
                            <Table style={{width: "100%"}} aria-label="simple table">
                                <TableHead>
                                    <TableRow key={props.data._idx}>
                                        <TableCell>Посада (професія) за результатами анкетування</TableCell>
                                        <TableCell>Кількість посад,одиниць</TableCell>
                                        <TableCell align="left">Внесено зареєстровану вакансію (дата)</TableCell>
                                        <TableCell>Частка ,%</TableCell>
                                        <TableCell align="left">Укомплектовано за сприяння СЗ (дата)</TableCell>
                                        <TableCell>Частка ,%</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        data0.map((item) => {
                                                //console.log(item.posad)
                                                return (
                                                    item.posad.map((row) => (
                                                            <TableRow key={row.titleposad}>
                                                                <TableCell align="left" component="th" scope="row">
                                                                    {row.titleposad}
                                                                </TableCell>
                                                                <TableCell align="left" component="th" scope="row">
                                                                    {10}
                                                                </TableCell>
                                                                <TableCell
                                                                    align="left">{row.vacreestr.vacreestr}</TableCell>
                                                                <TableCell
                                                                    align="left">{'10%'}</TableCell>
                                                                <TableCell align="left">{row.vacukomp.vacukomp}</TableCell>
                                                                <TableCell
                                                                    align="left">{'10%'}</TableCell>
                                                            </TableRow>

                                                        )
                                                    )
                                                )
                                            }
                                        )
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </td>
                </tr>

            </React.Fragment>
        </>
    );


}

