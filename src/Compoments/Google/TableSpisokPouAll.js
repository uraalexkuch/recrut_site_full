import React, {useState} from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "../Google/Table.css";

import Text from "antd/lib/typography/Text";



export default function TableSpisokPouAll(props) {


    const [id] = useState([])


    const data0 = props.data.map((item) => {
        return item
    })
  //  console.log(data0)
    let filterUkomp;
    filterUkomp = () => {
        let filtredUkomp = data0.map((data) => {
                return (
                    data)
            }
        )
        let filterUkomp1 = filtredUkomp.flatMap((reviewObj) => {
            if (reviewObj.posad !== []) {
                return (
                    reviewObj.posad)
            } else {
                return [reviewObj];
            }
        })
        let filterUkomp2 = filterUkomp1.flatMap((reviewObj) => {
            if (reviewObj.vacukomp !== "Немає данних") {
                return (
                    reviewObj.vacukomp.vacukomp)
            } else {
                return [reviewObj];
            }
        })
        let filterUkomp3 = filterUkomp2.filter((data) => {
                //console.log(data)
                if (filterUkomp2 === null) {
                    return filterUkomp2
                } else if (data !== "Немає данних") {
                    // console.log(data)
                    return (
                        data)
                }
            }
        )
        // console.log(filterUkomp3)
        return (filterUkomp3.length)
    }

    let filterUkompNo;
    filterUkompNo = () => {
        let filtredUkomp = data0.map((data) => {
                return (
                    data)
            }
        )
        let filterUkomp1 = filtredUkomp.flatMap((reviewObj) => {
            if (reviewObj.posad !== []) {
                return (
                    reviewObj.posad)
            } else {
                return [reviewObj];
            }
        })
        let filterUkomp2 = filterUkomp1.flatMap((reviewObj) => {
            if (reviewObj.vacukomp === "Немає данних") {
                return (
                    reviewObj.vacukomp.vacukomp)
            } else {
                return [reviewObj];
            }
        })
        let filterUkomp3 = filterUkomp2.filter((data) => {
                //console.log(data)
                if (filterUkomp2 === null) {
                    return filterUkomp2
                } else if (data !== "Немає данних") {
                    // console.log(data)
                    return (
                        data)
                }
            }
        )
       // console.log(filterUkomp2)
      //   console.log(filterUkomp2.length)
       // console.log(filterUkomp3.length)
        return (filterUkomp3.length)
    }
    let filter3PN;
    filter3PN = () => {

        let filterTest2 = data0.flatMap((reviewObj) => {
            if (reviewObj.posad !== []) {
                return (
                    reviewObj.posad)
            } else {
                return [reviewObj];
            }
        })
        let filterTest4 = filterTest2.flatMap((reviewObj) => {
            if (reviewObj) {

                return (
                    reviewObj.zvit.zvit)
            } else {
                return [reviewObj];
            }
        })
        let filterTest3 = filterTest4.filter((data) => {
                //console.log(data)
                if (filterTest4 === null) {
                    return filterTest4
                } else if (data !== "Немає данних") {
                    // console.log(data)
                    return (
                        data)
                }
            }
        )


        // console.log(filterTest4)
        return (filterTest3.length)

    }
    let filter3PNNo;
    filter3PNNo = () => {

        let filterTest2 = data0.flatMap((reviewObj) => {
            if (reviewObj.posad !== []) {
                return (
                    reviewObj.posad)
            } else {
                return [reviewObj];
            }
        })
        let filterTest4 = filterTest2.flatMap((reviewObj) => {
            if (reviewObj) {

                return(
                    reviewObj.zvit.zvit)
            } else {
                return [reviewObj];
            }
        })
        let filterTest3 = filterTest4.filter((data) => {
                //console.log(data)
                if (filterTest4 === null) {
                    return filterTest4
                } else if (data === "Немає данних") {
                    // console.log(data)
                    return (
                        data)
                }
            }
        )
 //console.log(filterTest2)
      //  console.log(filterTest3)
        return (filterTest3.length)

    }

  //  console.log( filter3PN ().length)
    //console.log(filterUkompNo())
       // console.log(total())
    return (
            <tr key={id}>
                <td key={id} colSpan={6}>
                    <TableContainer style={{
                        width: "auto"
                    }} component={Paper}> <Text style={{
                        fontWeight:"bold"
                    }}> Кількість  3-ПН по центру: {filter3PN ()}.</Text>
                        <Text style={{
                            fontWeight:"bold"
                        }}> Кількість укомплектованих вакансий по центру: {filterUkomp () }.</Text>
                        <Text style={{
                            fontWeight:"bold"
                        }}> Кількість неукомплектованих поданих вакансий по центру: {filter3PN ()-filterUkomp ()}. Не надано 3ПН, але була потреба в опитуванні : {  filter3PNNo()}</Text>
                        <Table style={{width: "100%"}} aria-label="simple table">

                            <TableHead>

                                <TableRow key={id}>
                                    <TableCell align="left">Назва ЦЗ</TableCell>
                                    <TableCell align="left">ЄДРПОУ</TableCell>
                                    <TableCell align="left">Найменування роботодавця</TableCell>
                                    <TableCell>Посада (професія) за результатами анкетування</TableCell>
                                    <TableCell align="left">Прогнозний період надання вакансій
                                        (місяць)</TableCell>
                                    <TableCell align="left">Надано звіт 3-ПН (дата)</TableCell>

                                    <TableCell align="left">Направлено на навчання (дата)</TableCell>
                                    <TableCell align="left">Працевлаштовано після проходження профнавчання
                                        (кількість осіб)</TableCell>
                                    <TableCell align="left">Укомплектовано за сприяння СЗ (дата)</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody   >
                                {
                                    data0.map((item) => {
                                            //console.log(item.posad)
                                            return (
                                                item.posad.map((row) => (
                                                        <TableRow key={row.id} style={{
                                                            backgroundColor:
                                                                (row.vacukomp.vacukomp==="Немає данних"&& row.zvit.zvit==="Немає данних")? '#e20e55':(row.vacukomp.vacukomp==="Немає данних")? '#ffc836':'#ffffff'
                                                        }}>
                                                            <TableCell align="left">{data0.map((item) => {
                                                                if(item._id===row.nazvapou)
                                                                    return (
                                                                        item.center)})} </TableCell>
                                                            <TableCell align="left">{data0.map((item) => {
                                                                if(item._id===row.nazvapou)
                                                                    return (
                                                                        item.edrpou)})} </TableCell>
                                                            <TableCell align="left">{data0.map((item) => {
                                                                if(item._id===row.nazvapou)
                                                                    return (
                                                                        item.nazvapou)})} </TableCell>
                                                            <TableCell align="left" component="th" scope="row">
                                                                {row.titleposad}
                                                            </TableCell>

                                                            <TableCell align="left">{row.hiremonth.hiremonth}</TableCell>
                                                            <TableCell align="left">{row.zvit.zvit}</TableCell>
                                                            <TableCell align="left">{row.navch.navch}</TableCell>
                                                            <TableCell align="left">{row.praznavch.praznavch}</TableCell>
                                                            <TableCell align="left" >{row.vacukomp.vacukomp}</TableCell>

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


    );




}