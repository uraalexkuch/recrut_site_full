import React, {Component} from 'react';
import "../Analytics/Analyt.css"
import {Card, Col, Row} from "react-bootstrap";
import HeroAbout from "../HeroAbout";
import swal from "sweetalert";
import Button from "react-bootstrap/Button";
import API from "../Forum/utils/API";
import API2 from "./API2";

export default class TableData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            table: this.props.data,
            table1: [
                {
                    edrpou: "",
                    vudpou: "",
                    nazvapou: "",
                    shtat: "",
                    datahire: "",
                    amounthire: "",
                    center: '',
                    contact: ""
                }
            ],
        }
    }

    filterTable = () => {
        const data0 = this.state.table;
        let filtredTest = this.state.table.filter((data) => {
                if (this.state.table === null) {
                    return data0
                } else if (data["Чи передбачається потреба у працівниках у 2021 році? "] == "Так") {
                    return (
                        data)
                }

            }
        )
        this.setState({
            table: this.state.table === null ? data0 : filtredTest,
        })
        console.log(filtredTest)

    }

    setFieldsTable = () => {
          const FieldsTable = this.state.table.map((table) => {
              console.log(table[" [водій автотранспортних засобів]"])

                return {
                    edrpou: table["Вкажіть Ваш код ЄДРПОУ"],
                    vudpou: table["Ви:"],
                    nazvapou: table["Повна назва"],
                    shtat: table["Чисельність працівників на Вашому підприємстві"],
                    datahire: table["Період, у якому передбачається потреба:"],
                    amounthire: table["Якщо у переліку не знайшли потрібне, зазначте необхідне (назва та кількість):"],
                    center: table["Центр зайнятості, який Вас обслуговує"],
                    contact: table["Для зворотнього зв'язку залиште, будь ласка, Ваші контактні дані (контактна особа, телефон або e-mail) "],
                    hireneed:table["Чи передбачається потреба у працівниках у 2021 році? "],
                    shtatzvil :table["Чи передбачається скорочення на Вашому підприємстві у 2021 році?"]


                }
            }
        )
        this.setState({
                table1: FieldsTable
            }
        )
        console.log(this.state.table1)
        console.log(FieldsTable)
    }
    setData = async () => {
        const resultfull = this.state.table1
        API.post('/table/add/', resultfull)
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
        console.log(this.state.table1)
    }

    componentDidMount() {
        this.setFieldsTable()

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.table !== this.state.table) {
            this.setFieldsTable()
            console.log('фильтер таки поменялся)).')
        }
    }

    render() {
        console.log(this.state.table)
        console.log(this.state.table1)
        return (
            <>
                <HeroAbout/>
                <Button
                    className="btn" style={{
                    flexShrink: "1",
                    fontWeight: "bold",
                    marginBottom: "0"
                }}
                    onClick={this.setData}
                >Добавити до бази
                </Button>
                <div className="content-wrapper"
                     style={{
                         padding: "1%"
                     }}>
                    <Card className="content-header" style={{
                        flexDirection: "column"
                    }}>
                        <h3 className="history col-10">Моніторинг опрацювання результатів 7 етапу Інтернет-анкетування
                            роботодавців з використанням «Google Forms»
                        </h3>
                        <div style={{
                            marginLeft: "1%"
                        }}>
                            <Row>
                                <Col style={{
                                    padding: "0"
                                }}>
                                    <Row className="titletable">
                                        <Col className="modulstat">
                                            <label>Назва ЦЗ</label>
                                        </Col>
                                        <Col
                                            className="modulstat">
                                            <label>Найменування роботодавця</label>
                                        </Col>
                                        <Col
                                            className="modulstat">
                                            <label>ЄДРПОУ</label>
                                        </Col>
                                        <Col
                                            className="modulstat">
                                            <label>Дата зустрічі з роботодавцем</label>
                                        </Col>

                                        <Col
                                            className="modulstat">
                                            <label>Телефонна розмова(Дата )</label>
                                        </Col>

                                        <Col
                                            className="modulstat">
                                            <label>Посада (професія) за результатами анкетування</label>
                                        </Col>
                                        <Col
                                            className="modulstat">
                                            <label>кількість</label>
                                        </Col>
                                        <Col
                                            className="modulstat">
                                            <label>Прогнозний період надання вакансій</label>
                                        </Col>
                                        <Col
                                            className="modulstat">
                                            <label>Надано звіт 3-ПН(дата)</label>
                                        </Col> <Col
                                        className="modulstat">
                                        <label>Внесено перспективну вакансію (дата)</label>
                                    </Col>
                                        <Col
                                            className="modulstat">
                                            <label>Прогнозний період надання вакансій</label>
                                        </Col>
                                        <Col
                                            className="modulstat">
                                            <label>Внесено зареєстровану вакансію (дата)</label>
                                        </Col>
                                        <Col
                                            className="modulstat">
                                            <label>Направлено на навчання (кількість осіб)</label>
                                        </Col>

                                    </Row><Row/>
                                    <Row>
                                        {this.state.table1.map((table, id) => {

                                                return (
                                                    <div key={id}>
                                                        <Row className="titletable">
                                                            <Col className="modulstat">
                                                                <label>{table.center}</label>
                                                            </Col>
                                                            <Col
                                                                className="modulstat">
                                                                <label>{table.nazvapou}</label>
                                                            </Col>
                                                            <Col
                                                                className="modulstat">
                                                                <label>{table.edrpou}</label>
                                                            </Col>
                                                            <Col
                                                                className="modulstat">
                                                                <label>{table.datemeet}</label>
                                                            </Col>

                                                            <Col
                                                                className="modulstat">
                                                                <label>Телефонна розмова(Дата )</label>
                                                            </Col>

                                                            <Col
                                                                className="modulstat">
                                                                <label>Посада (професія) за результатами анкетування</label>
                                                            </Col>
                                                            <Col
                                                                className="modulstat">
                                                                <label>кількість</label>
                                                            </Col>
                                                            <Col
                                                                className="modulstat">
                                                                <label>Прогнозний період надання вакансій</label>
                                                            </Col>
                                                            <Col
                                                                className="modulstat">
                                                                <label>Надано звіт 3-ПН(дата)</label>
                                                            </Col> <Col
                                                            className="modulstat">
                                                            <label>Внесено перспективну вакансію (дата)</label>
                                                        </Col>
                                                            <Col
                                                                className="modulstat">
                                                                <label>Прогнозний період надання вакансій</label>
                                                            </Col>
                                                            <Col
                                                                className="modulstat">
                                                                <label>Внесено зареєстровану вакансію (дата)</label>
                                                            </Col>
                                                            <Col
                                                                className="modulstat">
                                                                <label>Направлено на навчання (кількість осіб)</label>
                                                            </Col>

                                                        </Row><Row/>
                                                    </div>
                                                )
                                            }
                                        )
                                        }
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </div>

            </>
        )
    }


    }

