import React, {useState} from "react";
import MUIDataTable from "mui-datatables";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "../../Google/Table.css";


//import VacCard from "../Google/VacCard.js;


export default function TableTest(props) {
    const [responsive, setResponsive] = useState("standard");
    const [showItem, setShowitem] = useState(true);
    const [id, setId] = useState([])
    const columns = ["Роли", "Детство (родительская семья)"," Собственная семья", "Сфера интимных отношений",
        "Профессиональная сфера","Друзья и неформальные группы","Творчество","Досуг","Другие сферы (какие):","Середне значення","Идеал Я"];

    const data = [
        ['Преследователь'],
        ['Грешник'],
        ['Художник'],
        ['Исполнитель'],
       ['Посредник'],
        [' Святой'],
        ['Комик'],
        ['Наблюдатель'],
        ['Умник'],
       [' Победитель'],
        ['Руководитель'],
        ['Проигравший'],
        ['Раненный'],
       [' Страдалец'],
        ['Козел отпущения'],
        ['Трудоголик'],
        ['Ипохондрик'],
        ['Эксплуататор'],
        ['Критик'],
        ['Не победитель'],
        ['Соблазнитель(ница)'],
        ['Исповедник'],
        ['Целитель'],
        ['Судья'],
        ['Консультант'],
        ['Бог / Богиня'],
        ['Проповедник'],
        ['Жертва'],
        ['Всезнайка'],
        ['Спасатель']


    ];


    const options = {
        filter: true,
        filterType: "dropdown",
        responsive: "simple",
pagination:false,
        rowsPerPage: 20,
        selectableRows: false,
        expandableRows: false,

        page: 1
    };




    return (<>
            <React.Fragment>

                <MUIDataTable
                    title={"Репертуар жизненных ролей"}
                    data={
                        data
                    }
                    columns={columns}
                    options={options}
                />




            </React.Fragment>
        </>
    );


}

