import React, {useState} from "react";
import MUIDataTable from "mui-datatables";
import "../../Google/Table.css";
import Select from "react-select";


//import VacCard from "../Google/VacCard.js;
let option =
    [
        {value: 0, label: '0'},
        {value: 1, label: '1'},
        {value: 2, label: '2'},
        {value: 3, label: '3'},
        {value: 4, label: '4'},

    ]
        const average=()=>{
    return 5 + 2 / 8
};

export default function TableTest(props) {
    const onCellClick = (rowindex, cellindex) => {
        console.log('click',rowindex,cellindex)

    };

    const handleChangeMonth = (search,  rowIndex) => {
        const onCellClick = (rowindex, cellindex) => {
            console.log('click2',rowindex,cellindex)
return [rowindex, cellindex]
        };

        const handleCat = (rowIndex, dataIndex) => {
            const rowTo = rowIndex;
           console.log(rowTo)
        };
        setTable(data[1][1]=search.value)
       // setTable(data => data[onCellClick.rowindex][ onCellClick.cellindex]=search.value)

        console.log(`Option selected:`,rowIndex, )
        console.log(`Option :`,data)
    };

  const input=()=>{

      return <Select
             options={option}

            // value={option.values}
             onChange={handleChangeMonth}



      />

  }







    //const [responsive, setResponsive] = useState("standard");
    const [data, setTable] = useState( [
        ['Преследователь',input(),input(),input(),input(),input(),input(),input(),input(),average(),input(),],
        ['Грешник',input(),input(),input(),input(),input(),input(),input(),input(),average(),input(),],
        ['Художник',input(),input(),input(),input(),input(),input(),input(),input(),average(),input(),],
        ['Исполнитель',input(),input(),input(),input(),input(),input(),input(),input(),average(),input(),],
        ['Посредник',input(),input(),input(),input(),input(),input(),input(),input(),average(),input(),],
        [' Святой',input(),input(),input(),input(),input(),input(),input(),input(),average(),input(),],
        ['Комик',input(),input(),input(),input(),input(),input(),input(),input(),average(),input(),],
        ['Наблюдатель',input(),input(),input(),input(),input(),input(),input(),input(),average(),input(),],
        ['Умник',input(),input(),input(),input(),input(),input(),input(),input(),average(),input(),],
        [' Победитель',input(),input(),input(),input(),input(),input(),input(),input(),average(),input(),],
        ['Руководитель',input(),input(),input(),input(),input(),input(),input(),input(),average(),input(),],
        ['Проигравший',input(),input(),input(),input(),input(),input(),input(),input(),average(),input(),],
        ['Раненный',input(),input(),input(),input(),input(),input(),input(),input(),average(),input(),],
        [' Страдалец',input(),input(),input(),input(),input(),input(),input(),input(),average(),input(),],
        ['Козел отпущения',input(),input(),input(),input(),input(),input(),input(),input(),average(),input(),],
        ['Трудоголик',input(),input(),input(),input(),input(),input(),input(),input(),average(),input(),],
        ['Ипохондрик',input(),input(),input(),input(),input(),input(),input(),input(),average(),input(),],
        ['Эксплуататор',input(),input(),input(),input(),input(),input(),input(),input(),average(),input(),],
        ['Критик',input(),input(),input(),input(),input(),input(),input(),input(),average(),input(),],
        ['Не победитель',input(),input(),input(),input(),input(),input(),input(),input(),average(),input(),],
        ['Соблазнитель(ница)',input(),input(),input(),input(),input(),input(),input(),input(),average(),input(),],
        ['Исповедник',input(),input(),input(),input(),input(),input(),input(),input(),average(),input(),],
        ['Целитель',input(),input(),input(),input(),input(),input(),input(),input(),average(),input(),],
        ['Судья',input(),input(),input(),input(),input(),input(),input(),input(),average(),input(),],
        ['Консультант',input(),input(),input(),input(),input(),input(),input(),input(),average(),input(),],
        ['Бог / Богиня',input(),input(),input(),input(),input(),input(),input(),input(),average(),input(),],
        ['Проповедник',input(),input(),input(),input(),input(),input(),input(),input(),average(),input(),],
        ['Жертва',input(),input(),input(),input(),input(),input(),input(),input(),average(),input(),],
        ['Всезнайка',input(),input(),input(),input(),input(),input(),input(),input(),average(),input(),],
        ['Спасатель',input(),input(),input(),input(),input(),input(),input(),input(),average(),input(),]


    ]);


    const columns = ["Роли", "Детство (родительская семья)"," Собственная семья", "Сфера интимных отношений",
        "Профессиональная сфера","Друзья и неформальные группы","Творчество","Досуг","Другие сферы (какие):","Середне значення","Идеал Я"];




    const options = {
        filter: true,
        //setCellProps:e,
        filterType: "dropdown",
        responsive: "simple",
        selectableRows: false,
        onCellClick
    };


    return (<>

            <React.Fragment>

                <MUIDataTable

                    title={"Репертуар жизненных ролей. "}
                    data={
                          data
                    }
                    columns={columns}
                    options={options}
                />

            </React.Fragment>

        </>
    )}

