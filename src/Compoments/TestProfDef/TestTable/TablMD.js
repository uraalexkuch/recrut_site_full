import React, {useEffect, useState} from "react";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory, {Type} from "react-bootstrap-table2-editor";
import API from "../../Forum/utils/API";
import swal from "sweetalert";
import {Button} from "react-bootstrap";
import "../TestTable/Table.css"

export default function TabMD() {
    function parseJwt() {
        localStorage.getItem('userInfo')
        const user = JSON.parse(localStorage.getItem('userInfo'));
        let token = user.accessToken;
        let base64Url = token.split(".")[1];
        let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        let jsonPayload = decodeURIComponent(
            atob(base64)
                .split("")
                .map(function (c) {
                    return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
                })
                .join("")
        );
        console.log(JSON.parse(jsonPayload).id)
        return JSON.parse(jsonPayload).id;

    }
    const [products, setNew] = useState([

        {
            id: 1,
            roli: 'Преследователь',
            text0: 0,
            text1: 0,
            text2: 0,
            text3: 0,
            text4: 0,
            text5: 0,
            text6: 0,
            text7: 0,
            text8: 0,
            text9: 0,
        },
        {
            id: 2,
            roli: 'Грешник',
            text0: 0,
            text1: 0,
            text2: 0,
            text3: 0,
            text4: 0,
            text5: 0,
            text6: 0,
            text7: 0,

            text8: 0,
            text9: 0,
        },
        {
            id: 3,
            roli: 'Художник',
            text0: 0,
            text1: 0,
            text2: 0,
            text3: 0,
            text4: 0,
            text5: 0,
            text6: 0,
            text7: 0,
            text8: 0,
            text9: 0,
        },
        {
            id: 4,
            roli: 'Исполнитель',
            text0: 0,
            text1: 0,
            text2: 0,
            text3: 0,
            text4: 0,
            text5: 0,
            text6: 0,
            text7: 0,
            text8: 0,
            text9: 0,
        },
        {
            id: 5,
            roli: 'Посредник',
            text0: 0,
            text1: 0,
            text2: 0,
            text3: 0,
            text4: 0,
            text5: 0,
            text6: 0,
            text7: 0,
            text8: 0,
            text9: 0,
        },
        {
            id: 6,
            roli: 'Святой',
            text0: 0,
            text1: 0,
            text2: 0,
            text3: 0,
            text4: 0,
            text5: 0,
            text6: 0,
            text7: 0,
            text8: 0,
            text9: 0,
        },
        {
            id: 7,
            roli: 'Комик',
            text0: 0,
            text1: 0,
            text2: 0,
            text3: 0,
            text4: 0,
            text5: 0,
            text6: 0,
            text7: 0,
            text8: 0,
            text9: 0,
        },
        {
            id: 8,
            roli: 'Наблюдатель',
            text0: 0,
            text1: 0,
            text2: 0,
            text3: 0,
            text4: 0,
            text5: 0,
            text6: 0,
            text7: 0,
            text8: 0,
            text9: 0,
        },
        {
            id: 9,
            roli: 'Умник',
            text0: 0,
            text1: 0,
            text2: 0,
            text3: 0,
            text4: 0,
            text5: 0,
            text6: 0,
            text7: 0,
            text8: 0,
            text9: 0,
        },
        {
            id: 10,
            roli: 'Победитель',
            text0: 0,
            text1: 0,
            text2: 0,
            text3: 0,
            text4: 0,
            text5: 0,
            text6: 0,
            text7: 0,
            text8: 0,
            text9: 0,
        },
        {
            id: 11,
            roli: 'Руководитель',
            text0: 0,
            text1: 0,
            text2: 0,
            text3: 0,
            text4: 0,
            text5: 0,
            text6: 0,
            text7: 0,
            text8: 0,
            text9: 0,
        },
        {
            id: 12,
            roli: 'Проигравший',
            text0: 0,
            text1: 0,
            text2: 0,
            text3: 0,
            text4: 0,
            text5: 0,
            text6: 0,
            text7: 0,
            text8: 0,
            text9: 0,
        },
        {
            id: 13,
            roli: 'Раненный',
            text0: 0,
            text1: 0,
            text2: 0,
            text3: 0,
            text4: 0,
            text5: 0,
            text6: 0,
            text7: 0,
            text8: 0,
            text9: 0,
        },
        {
            id: 14,
            roli: 'Страдалец',
            text0: 0,
            text1: 0,
            text2: 0,
            text3: 0,
            text4: 0,
            text5: 0,
            text6: 0,
            text7: 0,
            text8: 0,
            text9: 0,
        },
        {
            id: 15,
            roli: 'Козел отпущения',
            text0: 0,
            text1: 0,
            text2: 0,
            text3: 0,
            text4: 0,
            text5: 0,
            text6: 0,
            text7: 0,
            text8: 0,
            text9: 0,
        },
        {
            id: 16,
            roli: 'Трудоголик',
            text0: 0,
            text1: 0,
            text2: 0,
            text3: 0,
            text4: 0,
            text5: 0,
            text6: 0,
            text7: 0,
            text8: 0,
            text9: 0,
        },
        {
            id: 17,
            roli: 'Ипохондрик',
            text0: 0,
            text1: 0,
            text2: 0,
            text3: 0,
            text4: 0,
            text5: 0,
            text6: 0,
            text7: 0,
            text8: 0,
            text9: 0,
        },
        {
            id: 18,
            roli: 'Эксплуататор',
            text0: 0,
            text1: 0,
            text2: 0,
            text3: 0,
            text4: 0,
            text5: 0,
            text6: 0,
            text7: 0,
            text8: 0,
            text9: 0,
        },
        {
            id: 19,
            roli: 'Критик',
            text0: 0,
            text1: 0,
            text2: 0,
            text3: 0,
            text4: 0,
            text5: 0,
            text6: 0,
            text7: 0,
            text8: 0,
            text9: 0,
        },
        {
            id: 20,
            roli: 'Не победитель',
            text0: 0,
            text1: 0,
            text2: 0,
            text3: 0,
            text4: 0,
            text5: 0,
            text6: 0,
            text7: 0,
            text8: 0,
            text9: 0,
        },
        {
            id: 21,
            roli: 'Соблазнитель(ница)',
            text0: 0,
            text1: 0,
            text2: 0,
            text3: 0,
            text4: 0,
            text5: 0,
            text6: 0,
            text7: 0,
            text8: 0,
            text9: 0,
        },
        {
            id: 22,
            roli: 'Исповедник',
            text0: 0,
            text1: 0,
            text2: 0,
            text3: 0,
            text4: 0,
            text5: 0,
            text6: 0,
            text7: 0,
            text8: 0,
            text9: 0,
        },
        {
            id: 23,
            roli: 'Целитель',
            text0: 0,
            text1: 0,
            text2: 0,
            text3: 0,
            text4: 0,
            text5: 0,
            text6: 0,
            text7: 0,
            text8: 0,
            text9: 0,
        },
        {
            id: 24,
            roli: 'Судья',
            text0: 0,
            text1: 0,
            text2: 0,
            text3: 0,
            text4: 0,
            text5: 0,
            text6: 0,
            text7: 0,
            text8: 0,
            text9: 0,
        },
        {
            id: 25,
            roli: 'Консультант',
            text0: 0,
            text1: 0,
            text2: 0,
            text3: 0,
            text4: 0,
            text5: 0,
            text6: 0,
            text7: 0,
            text8: 0,
            text9: 0,
        },
        {
            id: 26,
            roli: 'Бог / Богиня',
            text0: 0,
            text1: 0,
            text2: 0,
            text3: 0,
            text4: 0,
            text5: 0,
            text6: 0,
            text7: 0,
            text8: 0,
            text9: 0,
        },
        {
            id: 27,
            roli: 'Проповедник',
            text0: 0,
            text1: 0,
            text2: 0,
            text3: 0,
            text4: 0,
            text5: 0,
            text6: 0,
            text7: 0,
            text8: 0,
            text9: 0,
        },
        {
            id: 28,
            roli: 'Жертва',
            text0: 0,
            text1: 0,
            text2: 0,
            text3: 0,
            text4: 0,
            text5: 0,
            text6: 0,
            text7: 0,
            text8: 0,
            text9: 0,
        },
        {
            id: 29,
            roli: 'Всезнайка',
            text0: 0,
            text1: 0,
            text2: 0,
            text3: 0,
            text4: 0,
            text5: 0,
            text6: 0,
            text7: 0,
            text8: 0,
            text9: 0,
        },
        {
            id: 30,
            roli: 'Спасатель',
            text0: 0,
            text1: 0,
            text2: 0,
            text3: 0,
            text4: 0,
            text5: 0,
            text6: 0,
            text7: 0,
            text8: 0,
            text9: 0,
        },
    ]);
    const columns = [
        {
            dataField: "id",
            text: "id"
        },
        {
            dataField: "roli",
            text: "Роли",
            editable: false,

        },
        {
            dataField: "text0",
            text: "Детство (родительская семья)",
            editor: {
                type: Type.SELECT,
                options: [
                    {
                        value: 0,
                        label: "0"
                    },
                    {
                        value: 1,
                        label: "1"
                    },
                    {
                        value: 2,
                        label: "2"
                    },
                    {
                        value: 3,
                        label: "3"
                    },
                    {
                        value: 4,
                        label: "4"
                    }
                ]
            }
        },
        {
            dataField: "text1",
            text: "Собственная семья",
            editor: {
                type: Type.SELECT,
                options: [
                    {
                        value: 0,
                        label: "0"
                    },
                    {
                        value: 1,
                        label: "1"
                    },
                    {
                        value: 2,
                        label: "2"
                    },
                    {
                        value: 3,
                        label: "3"
                    },
                    {
                        value: 4,
                        label: "4"
                    }
                ]
            }
        }, {
            dataField: "text2",
            text: "Сфера интимных отношений",
            editor: {
                type: Type.SELECT,
                options: [
                    {
                        value: 0,
                        label: "0"
                    },
                    {
                        value: 1,
                        label: "1"
                    },
                    {
                        value: 2,
                        label: "2"
                    },
                    {
                        value: 3,
                        label: "3"
                    },
                    {
                        value: 4,
                        label: "4"
                    }
                ]
            }
        }, {
            dataField: "text3",
            text: "Профессиональная сфера",
            editor: {
                type: Type.SELECT,
                options: [
                    {
                        value: 0,
                        label: "0"
                    },
                    {
                        value: 1,
                        label: "1"
                    },
                    {
                        value: 2,
                        label: "2"
                    },
                    {
                        value: 3,
                        label: "3"
                    },
                    {
                        value: 4,
                        label: "4"
                    }
                ]
            }
        }, {
            dataField: "text4",
            text: "Друзья и неформальные группы",
            editor: {
                type: Type.SELECT,
                options: [
                    {
                        value: 0,
                        label: "0"
                    },
                    {
                        value: 1,
                        label: "1"
                    },
                    {
                        value: 2,
                        label: "2"
                    },
                    {
                        value: 3,
                        label: "3"
                    },
                    {
                        value: 4,
                        label: "4"
                    }
                ]
            }
        }, {
            dataField: "text5",
            text: "Творчество",
            editor: {
                type: Type.SELECT,
                options: [
                    {
                        value: 0,
                        label: "0"
                    },
                    {
                        value: 1,
                        label: "1"
                    },
                    {
                        value: 2,
                        label: "2"
                    },
                    {
                        value: 3,
                        label: "3"
                    },
                    {
                        value: 4,
                        label: "4"
                    }
                ]
            }
        }, {
            dataField: "text6",
            text: "Досуг",
            editor: {
                type: Type.SELECT,
                options: [
                    {
                        value: 0,
                        label: "0"
                    },
                    {
                        value: 1,
                        label: "1"
                    },
                    {
                        value: 2,
                        label: "2"
                    },
                    {
                        value: 3,
                        label: "3"
                    },
                    {
                        value: 4,
                        label: "4"
                    }
                ]
            }
        }, {
            dataField: "text7",
            text: "Другие сферы (какие):",
            editor: {
                type: Type.SELECT,
                options: [
                    {
                        value: 0,
                        label: "0"
                    },
                    {
                        value: 1,
                        label: "1"
                    },
                    {
                        value: 2,
                        label: "2"
                    },
                    {
                        value: 3,
                        label: "3"
                    },
                    {
                        value: 4,
                        label: "4"
                    }
                ]
            }
        }, {
            dataField: "text8",
            text: "Среднее значення",
            editable: false,
            // events:(rowIndex.text0+ text1 + text2 + text3 + text4 + text5 + text6 + text7) / 8
        }, {
            dataField: "text9",
            text: "Идеал Я",
            editor: {
                type: Type.SELECT,
                options: [
                    {
                        value: 0,
                        label: "0"
                    },
                    {
                        value: 1,
                        label: "1"
                    },
                    {
                        value: 2,
                        label: "2"
                    },
                    {
                        value: 3,
                        label: "3"
                    },
                    {
                        value: 4,
                        label: "4"
                    }
                ]
            }
        }
    ];

    function updateCell(newValue, oldValue, row, column,) {
        const field = column.dataField;
        const newData = products.map(item => {
            if (item.id === row.id) {
                const av = (parseInt(row.text0) + parseInt(row.text1) + parseInt(row.text2) + parseInt(row.text3) + parseInt(row.text4) + parseInt(row.text5) + parseInt(row.text6) + parseInt(row.text7)) / 8
                console.log(av)
                return {
                    ...item,
                    field: newValue !== oldValue ? newValue : oldValue,
                    text8: av
                }
            }
            return item
        })
             setNew(newData)
        console.log(products)
        return newData
    }

    function setResult() {
        let id = parseJwt();
        let res1 =
            'Преследователь : ' + products[0].text8 + '\nГрешник:  ' + products[1].text8 + '\nХудожник : ' + products[2].text8 +
            '\nИсполнитель:  ' + products[3].text8 + '\nПосредник:  ' + products[4].text8 +
            '\nСвятой:  ' + products[5].text8 + '\nКомик:  ' + products[6].text8 +
            '\nНаблюдатель:  ' + products[7].text8 + '\nУмник:  ' + products[8].text8 +
            '\nПобедитель:  ' + products[9].text8 + '\nРуководитель:  ' + products[10].text8 +
            '\nПроигравший' + products[11].text8 + '\nРаненный' + products[12].text8 +
            '\nСтрадалец:  ' + products[13].text8 + '\nКозел отпущения:  ' + products[14].text8 +
            '\nТрудоголик:  ' + products[15].text8 + '\nИпохондрик:  ' + products[16].text8 +
            '\nЭксплуататор:  ' + products[17].text8 + '\nКритик:  ' + products[18].text8 +
            '\nНе победитель:  ' + products[19].text8 + '\nСоблазнитель(ница):  ' + products[20].text8 +
            '\nИсповедник:  ' + products[21].text8 + '\nЦелитель:  ' + products[22].text8 +
            '\nСудья:  ' + products[23].text8 + '\nКонсультант:  ' + products[24].text8 +
            '\nБог / Богиня:  ' + products[25].text8 + '\nПроповедник:  ' + products[26].text8 +
            '\nЖертва' + products[27].text8 + '\nВсезнайка:  ' + products[28].text8 +
            '\nСпасатель:  ' + products[29].text8

        console.log(res1)
        const full = {
            nameTest: "Репертуар жизненных ролей",
            author: id,
            result: res1
        }
        console.log(full)
        setData(full)
    }

    const setData = async (full) => {
        console.log(full)

        API.post('/testing/add/', full)
            .then(response => {
                    console.log(response)
                    if (response) {
                        swal("Ваш результат збережено!",)
                    }
                },
                error => {
                    swal("Error!");
                }
            );

    }
    return (
        <div className="App">
            <h4 className='text-center' style={{
                border: "3px solid #8bc53f"
            }}> Репертуар жизненных ролей </h4>
            <span className="text-justify">Инструкция: <br/> Просмотрите список ролей, играемых человеком в его жизни. Оцените, насколько они свойственны Вам в разных сферах жизнедеятельности, поставив балл от 0 до 4, ориентируясь на следующие критерии:
                            0 – никогда не проявлялась данная роль; 1 – были единичные случаи, где я выступал в этой роли; 2 – иногда случается; 3 – случается довольно часто; 4 – практически всегда выступаю в этой роли. Отдельно оцените, насколько эти роли должны быть свойственны идеальному образу вашего Я.
                        </span>
            <BootstrapTable
                bootstrap4={true}
                wrapperClasses="table-responsive"

                keyField="id"
                data={products}
                columns={columns}
                cellEdit={cellEditFactory({
                    mode: "click",
                    blurToSave: true,
                    afterSaveCell: updateCell,
                })}
            />
            <Button onClick={() => setResult()}
                    style={
                        {
                            width: "50%",
                            height: "auto",
                            borderRadius: "25px",
                            marginTop: "0",
                            marginBottom: "1rem",
                            marginLeft: "25rem"
                        }
                    }>
                Зберегти результати
            </Button>
        </div>
    );
}


