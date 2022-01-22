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

import VacCard1 from "./VacCard1";


export default function TableSpisokPou(props) {
    const [responsive, setResponsive] = useState("standard");
    const [showItem, setShowitem] = useState(true);
    const [id, setId] = useState([])
    const columns = [
        {
            name: "_id",
            label: "Id",
            options: {
                filter: false,
                sort: false,
                display: false
            }
        },
        {
            name: "edrpou",
            label: "ЄДРПОУ",
            options: {
                filter: true,
                sort: true,

            }
        },
        {
            name: "nazvapou",
            label: "Назва",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
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
        },
       /*  {
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
*/

    ]

    const data0 = props.data.map((item) => {
        return item
    })

    console.log(data0)

    function createData(edrpou,nazvapou,posad,  zvit, vacpersp, vacreestr, navch, praznavch, vacukomp) {
        return {edrpou,nazvapou,posad, zvit, vacpersp, vacreestr, navch, praznavch, vacukomp};
    }


    const onRowClick = (data) => {
        let selectId = data[0]
        setShowitem(false)
        setId(selectId)
       // console.log(id)
    };
    const data1 = data0.map((row) => {
           // console.log(row.posad)
            return (
                row.posad.map((item)=>{
                //    console.log(item)
                    return (
                        item
                    )
            })
                )}
            )

   // console.log("vxod "+data0)
    //console.log('vuxod '+data1)

    const options = {
        filter: true,
        filterType: "dropdown",
        responsive: "vertical",
        onRowClick,
        rowsPerPage: 20,
        selectableRows: false,
        expandableRows: true,
        renderExpandableRow: (rowData, rowMeta) => {
            console.log(rowData[0], rowMeta);
            const data01=data0.filter((data) => {
                    if (data0 === null) {
                        // console.log(data.nameTest)
                        return data0
                    } else if (data._id== rowData[0]) {
                        //console.log(data)
                        return data
                    }
                }
            )
            return (
                <React.Fragment>
                    <tr key={id}>
                        <td key={id} colSpan={6}>
                            <TableContainer style={{
                                width: "auto"
                            }} component={Paper}>
                                <Table style={{width: "100%"}} aria-label="simple table">
                                    <TableHead>
                                        <TableRow key={id}>

                                            <TableCell>Посада (професія) за результатами анкетування</TableCell>

                                            <TableCell align="left">Надано звіт 3-ПН (дата)</TableCell>
                                            <TableCell align="left">Внесено перспективну вакансію (дата)</TableCell>
                                            <TableCell align="left">Внесено зареєстровану вакансію (дата)</TableCell>
                                            <TableCell align="left">Направлено на навчання (кількість осіб)</TableCell>
                                            <TableCell align="left">Працевлаштовано після проходження профнавчання
                                                (кількість осіб)</TableCell>
                                            <TableCell align="left">Укомплектовано за сприяння СЗ (дата)</TableCell>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            data01.map((item) => {
                                                //console.log(item.posad)
                                                return (
                                                    item.posad.map((row) => (
                                                            <TableRow key={row.titleposad}>

                                                                <TableCell align="left" component="th" scope="row">
                                                                    {row.titleposad}
                                                                </TableCell>

                                                                <TableCell align="left">{row.zvit.zvit}</TableCell>
                                                                <TableCell align="left">{row.vacpersp.vacpersp}</TableCell>
                                                                <TableCell align="left">{row.vacreestr.vacreestr}</TableCell>
                                                                <TableCell align="left">{row.navch.navch}</TableCell>
                                                                <TableCell align="left">{row.praznavch.praznavch}</TableCell>
                                                                <TableCell align="left">{row.vacukomp.vacukomp}</TableCell>

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
            );
        },
        page: 1
    };


    return (<>
            {showItem ?
                <React.Fragment style={{
                    marginRight: "1%",
                    marginLeft: "2%",
                    padding: "2rem"
                }}>

                    <MUIDataTable
                        title={"Моніторинг опрацювання результатів  етапу Інтернет-анкетування роботодавців з використанням «Google Forms» "}
                        data={
                            data0.map((item) => {

                                    return (
                                        [
                                            item._id,
                                            item.edrpou,
                                            item.nazvapou,
                                            item.datatel,
                                            item.datemeet,


                                        ]
                                    )
                                }, <Button
                                    onClick={() => this.onRowClick()}
                                    style={{
                                        width: "min-content",
                                        height: "min-content",
                                        borderRadius: "25px",
                                        marginTop: "0",
                                        marginBottom: "1rem"
                                    }}>
                                    Редагувати
                                </Button>
                            )
                        }
                        columns={columns}
                        options={options}
                    />

                </React.Fragment> : <VacCard1 id={id}/>}
        </>
    );


}

