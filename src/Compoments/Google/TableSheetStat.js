import React, {Component} from 'react';
import "../Analytics/Analyt.css"
import {Card, Col, Row} from "react-bootstrap";

import swal from "sweetalert";
import Button from "react-bootstrap/Button";
import API from "../Forum/utils/API";
import Select from "react-select";
import Pie from "./Pie";

import TableSpisokPou from "./TableSpisokPou"
import AnaliticProfes from "../Analytics/AnaliticProfes";


const options =
    [
        {value: null, label: 'Всі'},
        {value: 'Авдіївський МЦЗ', label: 'АВДІЇВСЬКИЙ МІСЬКИЙ ЦЕНТР ЗАЙНЯТОСТІ'},
        {value: 'Бахмутський МЦЗ', label: 'БАХМУТСЬКИЙ МІСЬКИЙ ЦЕНТР ЗАЙНЯТОСТІ'},
        {value: 'Торецький МЦЗ', label: 'ТОРЕЦЬКИЙ МІСЬКИЙ ЦЕНТР ЗАЙНЯТОСТІ'},
        {value: 'Мирноградський МЦЗ', label: 'МИРНОГРАДСЬКИЙ МІСЬКИЙ ЦЕНТР ЗАЙНЯТОСТІ'},
        {value: 'Добропільський МЦЗ', label: 'ДОБРОПІЛЬСЬКИЙ МІСЬКИЙ ЦЕНТР ЗАЙНЯТОСТІ'},
        {value: 'Дружківський МЦЗ', label: 'ДРУЖКІВСЬКИЙ МІСЬКИЙ ЦЕНТР ЗАЙНЯТОСТІ'},
        {value: 'Костянтинівський МЦЗ', label: 'КОСТЯНТИНІВСЬКИЙ МІСЬКИЙ ЦЕНТР ЗАЙНЯТОСТІ'},
        {value: 'Краматорський МЦЗ', label: 'КРАМАТОРСЬКИЙ МІСЬКИЙ ЦЕНТР ЗАЙНЯТОСТІ'},
        {value: 'Покровський  МЦЗ', label: 'ПОКРОВСЬКИЙ МІСЬКИЙ ЦЕНТР ЗАЙНЯТОСТІ'},
        {value: 'Лиманський МЦЗ', label: 'ЛИМАНСЬКИЙ МІСЬКИЙ ЦЕНТР ЗАЙНЯТОСТІ'},
        {value: 'Маріупольський МЦЗ', label: 'МАРІУПОЛЬСЬКИЙ  МІСЬКИЙ ЦЕНТР ЗАЙНЯТОСТІ'},
        {value: 'Селидівський МЦЗ', label: 'СЕЛИДІВСЬКИЙ МІСЬКИЙ ЦЕНТР ЗАЙНЯТОСТІ'},
        {value: 'Слов\'янський МЦЗ', label: 'СЛОВ\'ЯНСЬКИЙ МІСЬКИЙ ЦЕНТР ЗАЙНЯТОСТІ'},
        {value: 'Вугледарський МЦЗ', label: 'ВУГЛЕДАРСЬКИЙ МІСЬКИЙ ЦЕНТР ЗАЙНЯТОСТІ'},
        {value: 'Олександрівський РЦЗ', label: 'ОЛЕКСАНДРІВСЬКИЙ РАЙОННИЙ ЦЕНТР ЗАЙНЯТОСТІ '},
        {value: 'В.Новосілківський РЦЗ', label: 'ВЕЛИКОНОВОСІЛЬКІВСЬКИЙ РАЙОННИЙ ЦЕНТР ЗАЙНЯТОСТІ '},
        {value: 'Волноваський РЦЗ', label: 'ВОЛНОВАСЬКИЙ РАЙОННИЙ ЦЕНТР ЗАЙНЯТОСТІ '},
        {value: 'Нікольський РЦЗ', label: 'НІКОЛЬСЬКИЙ РАЙОННИЙ ЦЕНТР ЗАЙНЯТОСТІ'},
        {value: 'Мар\'їнський РЦЗ', label: 'МАР\'ЇНСЬКИЙ РАЙОННИЙ ЦЕНТР ЗАЙНЯТОСТІ'},
        {value: 'Мангушський РЦЗ', label: 'МАНГУШСЬКИЙ РАЙОННИЙ ЦЕНТР ЗАЙНЯТОСТІ'},
        {value: 'Новогродівський МЦЗ', label: 'НОВОГРОДІВСЬКИЙ МІСЬКИЙ ЦЕНТР ЗАЙНЯТОСТІ'},
    ]

export default class TableSheetStat extends Component {
    constructor() {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        super();
        this.state = {
            showModuls: true,
            showProf:false,
            showBack: false,
            table: [],
            table0: [],
            tablhire: [],
            tablzv: [],
            tablyurid: [],
            tablfiz: [],
            tablemeet: [],
            tableposad:[],
            tablshtatyes: [],
            tablshtatzv: [],
            search: userInfo.center == 500 ? null : userInfo.center == 503 ? 'Авдіївський МЦЗ' : userInfo.center == 505 ? 'Бахмутський МЦЗ' :
                userInfo.center == 511 ? 'Торецький МЦЗ' : userInfo.center == 513 ? 'Мирноградський МЦЗ' : userInfo.center == 515 ? 'Добропільський МЦЗ' :
                    userInfo.center == 517 ? 'Дружківський МЦЗ' : userInfo.center == 523 ? 'Костянтинівський МЦЗ' : userInfo.center == 525 ?
                        'Краматорський МЦЗ' : userInfo.center == 527 ? 'Покровський  МЦЗ' : userInfo.center == 529 ? 'Лиманський МЦЗ' : userInfo.center == 533 ? 'Маріупольський МЦЗ' :
                            userInfo.center == 535 ? 'Селидівський МЦЗ' : userInfo.center == 537 ? 'Слов\'янський МЦЗ' : userInfo.center == 543 ? 'Вугледарський МЦЗ' : userInfo.center == 551 ?
                                'Олександрівський РЦЗ' : userInfo.center == 559 ? 'Волноваський РЦЗ' : userInfo.center == 561 ? 'Нікольський РЦЗ' : userInfo.center == 569 ? 'Мар\'їнський РЦЗ'
                                    : userInfo.center == 573 ? 'Мангушський РЦЗ' : userInfo.center == 585 ? 'Новогродівський МЦЗ' : null
        }
        //console.log(this.state.search)

    }

    selectStat = () => {
        this.setState({
            showModuls: !this.state.showModuls,
            showBack: !this.state.showBack,
        })
    }
    selectStatProf = () => {
        this.setState({showModuls: !this.state.showModuls,
            showProf: !this.state.showProf,
            showBack: !this.state.showBack,
        })
    }
    choiceBack = () => {
        const start = this.state.table;
        this.setState({
            table: start,
            showModuls: true,
            showCard: true,
            search: null,
            showBack: false,
        })

    }
    getTable = async () => {

        await API.get("/table/")
            .then(response => {
                const {table} = response.data
                //    console.log( {table}.table);
                this.setState(
                    {
                        table: {table}.table,
                        table0: {table}.table,
                    },
                );
            })
            .catch(error => {
                this.setState({error_message: error.message});
            });
        let userInfo = JSON.parse(localStorage.getItem("userInfo"));
        let user = userInfo.center
        this.searchCenterStart()
        this.filterYurid()
        this.filterFiz()
        this.filterHire()
        this.filterHireMeetyes()
        this.filterNavch()
        this.filterPraznavch()
        //this.getPosad()
    };
    handleChange = search => {
        this.setState(
            {search},
            () => console.log(`Option selected:`, this.state.search.value)
        );
    };
    searchCenter = () => {
        if (this.state.search) {
            const data0 = this.state.table0;
            let filtred = this.state.table0.filter((data) => {
                    // console.log(this.state.search.value)
                    if (this.state.search.value === null)
                        return data0
                    else if (data.center == (this.state.search.value)) {
                        // console.log(data.center)
                        return data
                    }
                }
            )
            this.setState({
                table: this.state.search.value === null ? data0 : filtred,
            })
            //  console.log(this.state.table);

        } else {
            swal("Помилка!", "Оберіть ЦЗ!", "error");
        }
        this.filterHire()
        this.filterZv()
        this.filterYurid()
        this.filterFiz()
        this.filterStatYurid()
        this.filterStatFiz()
        this.filterHireMeetyes()

    }
    searchCenterStart = () => {
        if (this.state.search) {
            const data0 = this.state.table0;
            let filtred = this.state.table0.filter((data) => {
                   // console.log(this.state.search)
                    if (this.state.search === null)
                        return data0
                    else if (data.center == this.state.search) {
                        // console.log(data.center)
                        return data
                    }
                }
            )
            this.setState({
                table: this.state.search === null ? data0 : filtred,
            })
            //  console.log(this.state.table);

        }
        this.filterHire()
        this.filterZv()
        this.filterYurid()
        this.filterFiz()
        this.filterStatYurid()
        this.filterStatFiz()
        this.filterHireMeetyes()
    }
    filterHire = () => {
        const data0 = this.state.table;
        let filtredTest = this.state.table.filter((data) => {
                if (this.state.table === null) {
                    return data0
                } else if (data.hireneed == "Так") {
                    return (
                        data)
                }
            }
        )
        this.setState({
            tablhire: this.state.table === null ? data0 : filtredTest,
        })
        //console.log(this.state.tablhire)

        this.filterHireMeetyes()
    }
    filterHireMeetyes = () => {
        let filtredTest = this.state.tablhire.map((data) => {
                //console.log(data.datemeet)
                return (
                    data)
            }
        )
        const telArr = filtredTest.map((reviewObj) => {
            return (
                [reviewObj.datatel.length, reviewObj.datemeet.length])
        })
        const telArr1 = telArr.map((reviewObj) => {
            return (
                reviewObj[0] + reviewObj[1])
        })
        const tel = telArr1.filter((data) => {
                //console.log(data.datemeet)
                if (telArr1 === null) {
                    return telArr1
                } else if (data > 0) {
                    //  console.log(data)
                    return (
                        data)
                }
            }
        )
        this.filter3PN()
        return (
            tel.length)

    }
    filter3PN = () => {

        let filterTest2 = this.state.tablhire.flatMap((reviewObj) => {
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
        this.filterUkomp()
        this.filter3PNPou()

       // console.log(filterTest4)
        return (filterTest3.length)

    }
    filterNavch = () => {

        let filterNavch1 = this.state.tablhire.flatMap((reviewObj) => {
            if (reviewObj.posad !== []) {
                return (
                    reviewObj.posad)
            } else {
                return [reviewObj];
            }
        })
        let filterNavch2 = filterNavch1.flatMap((reviewObj) => {
            if (reviewObj) {
        //  console.log(reviewObj.navch)
                return (
                    reviewObj.navch)
            } else {
                return [reviewObj];
            }
        })
        let filterNavch3 = filterNavch2.flatMap((reviewObj) => {
            if (reviewObj) {
                //  console.log(reviewObj.navch)
                return (
                    reviewObj.navch)
            } else {
                return [reviewObj];
            }
        })

        let filterNavch4 = filterNavch3.filter((data) => {
                //console.log(data)
                if (filterNavch3 === null) {
                    return filterNavch3
                } else if (data !== "Немає данних") {
                    // console.log(data)
                    return (
                        data)
                }
            }
        )
       // console.log(filterNavch1)
       // console.log(filterNavch2)
       // console.log(filterNavch3)
       // console.log(filterNavch4)

        return (filterNavch4.length)
    }
    filterPraznavch = () => {

        let filterPrazNavch1 = this.state.tablhire.flatMap((reviewObj) => {
            if (reviewObj.posad !== []) {
                return (
                    reviewObj.posad)
            } else {
                return [reviewObj];
            }
        })
        let filterPrazNavch2 = filterPrazNavch1.flatMap((reviewObj) => {
            if (reviewObj) {
                //console.log(reviewObj.praznavch)
                return (
                    reviewObj.praznavch)
            } else {
                return [reviewObj];
            }
        })
        let filterPrazNavch3 = filterPrazNavch2.flatMap((reviewObj) => {
            if (reviewObj) {
                //console.log(reviewObj.praznavch)
                return (
                    reviewObj.praznavch)
            } else {
                return [reviewObj];
            }
        })
        let filterPrazNavch4 = filterPrazNavch3.filter((data) => {
                //console.log(data)
                if (filterPrazNavch3 === null) {
                    return filterPrazNavch3
                } else if (data !== "Немає данних") {
                    // console.log(data)
                    return (
                        data)
                }
            }
        )
       // console.log(filterPrazNavch1)
        //console.log(filterPrazNavch1)
        //console.log(filterPrazNavch2)
       // console.log(filterPrazNavch3)

        return (filterPrazNavch4.length)

    }
    filter3PNPou = () => {
        let filtredPou = this.state.tablhire.map((data) => {
                return (
                    data)
            }
        )
        let filterPou2 = filtredPou.flatMap((reviewObj) => {
            if (reviewObj.zvit !== "Немає данних") {
                return (
                    reviewObj.posad)
            } else {
                return [reviewObj];
            }
        })
        let filterPou4 = filterPou2.map((reviewObj) => {
            if (reviewObj.zvit !== "Немає данних") {
                return (
                    [reviewObj.nazvapou, reviewObj.zvit.zvit])
            } else {
                return [reviewObj];
            }
        })
        let filterPou3 = filterPou4.filter((data) => {
                //console.log(data)
                if (filterPou4 === null) {
                    return filterPou4
                } else if (data[1] !== "Немає данних") {
                    // console.log(data)
                    return (
                        data[0])
                }
            }
        )
        let filterPou5 = filterPou3.map((reviewObj) => {
            return (
                reviewObj[0]
            )
        })
        const count = filterPou5.reduce((acc, n) => (acc[n] = (acc[n] || 0) + 1, acc), {});
        const duplicateCount1 = Object.values(count).filter(n => n = 1).length;
        // console.log(filterPou2)
        // console.log(filterPou3)
        // console.log(filterPou4)
        return (duplicateCount1)

    }
    filterUkomp = () => {
        let filtredUkomp = this.state.tablhire.map((data) => {
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
        return (filterUkomp3.length)
    }
    getTableStatUkomp = () => {
        const ratingsSat = this.filter3PN()
        const ratingsArr = this.filterUkomp()
        return ((ratingsArr / ratingsSat) * 100).toFixed(2)
    }
    getTableStatMeet = () => {
        const ratingsSat = this.state.tablhire.length
        const ratingsArr = this.filterHireMeetyes()
        return ((ratingsArr / ratingsSat) * 100).toFixed(2)
    }
    getTableStatPou = () => {
        const ratingsSat = this.state.tablhire.length
        const ratingsArr = this.filter3PNPou()
        return ((ratingsArr / ratingsSat) * 100).toFixed(2)
    }
    filterZv = () => {
        const data0 = this.state.table;
        let filtredTest = this.state.table.filter((data) => {
                if (this.state.table === null) {
                    return data0
                } else if (data.shtatzvil == "Так") {
                    return (
                        data)
                }
            }
        )
        this.setState({
            tablzv: this.state.table === null ? data0 : filtredTest,
        })
        //  console.log(this.state.tablzv)
    }
    filterYurid = () => {
        const data0 = this.state.table;
        // console.log(data0)
        let filtredTest = this.state.table.filter((data) => {
                if (this.state.table === null) {
                    return data0
                } else if (data.vudpou == "Юридична особа") {
                    return (
                        data)
                }
            }
        )
        this.setState({
            tablyurid: this.state.table === null ? data0 : filtredTest,
        })
    }
    filterFiz = () => {
        const data0 = this.state.table;
        let filtredTest = this.state.table.filter((data) => {
                if (this.state.table === null) {
                    return data0
                } else if (data.vudpou == "Фізична особа-підприємець") {
                    return (
                        data)
                }
            }
        )
        this.setState({
            tablfiz: this.state.table === null ? data0 : filtredTest,
        })
    }
    getTableStat = () => {
        const ratingsSat = this.state.table.length
        const ratingsArr = this.state.tablhire.length
        return ((ratingsArr / ratingsSat) * 100).toFixed(2)
    }
    getTableStat1 = () => {
        const ratingsSat = this.state.table.length
        const ratingsArr = this.state.tablzv.length
        return ((ratingsArr / ratingsSat) * 100).toFixed(2)
    }
    getTableStat2 = () => {
        const ratingsSat = this.state.table.length
        const ratingsArr = (this.state.table.length - this.state.tablhire.length - this.state.tablzv.length)
        return ((ratingsArr / ratingsSat) * 100).toFixed(2)
    }
    filterStatYurid = () => {
        const ratingsSat = this.state.table.length
        const ratingsArr = this.state.tablyurid.length
        return ((ratingsArr / ratingsSat) * 100).toFixed(2)
    }
    filterStatFiz = () => {
        const ratingsSat = this.state.table.length
        const ratingsArr = this.state.tablfiz.length
        return ((ratingsArr / ratingsSat) * 100).toFixed(2)
    }
    getPosad = () => {
        let filtredProf =this.state.tablhire.map((reviewObj) => {

            return ( reviewObj.posad.map((row) => (
                row
            )))
        }
        )

        this.setState({
            tablposad:  filtredProf,
        })

      //  console.log("posad:"+this.state.tablposad)
      //  console.log("posad0:"+ this.state.tablhire.length)

    }

    renderResult() {
        return <Pie data0={this.getTableStat()}
                    data1={this.getTableStat1()}
                    data2={this.getTableStat2()}
                    label0={'Найм'}
                    label1={'Звільнення'}
                    label2={'Інші'}
        />;
    }

    renderResult1() {
        return <Pie data0={this.filterStatYurid()}
                    data1={this.filterStatFiz()}
                    data2={null}
                    label0={'Юридична особа'}
                    label1={'Фізична особа-підприємець'}
                    label2={''}
        />;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.table !== this.state.table) {
            this.filterHire()
            this.filterHireMeetyes()
            this.filterZv()
            this.filterYurid()
            this.filterFiz()
            this.getTableStatMeet()
            this.getTableStatUkomp()
            this.filterHireMeetyes()
            this.getPosad()

            console.log('фильтер таки поменялся)).')
        }
    }

    componentDidMount() {
        this.getTable()
       // this.getPosad()
       // console.log( this.state.tablposad)
    }

    render() {
        // console.log(this.state.search)
        //  console.log(this.state.tablhire)
        const stat = this.state.showModuls
        const prof=this.state.showProf
        const back = this.state.showBack

        const {search} = this.state;
        let userInfo = JSON.parse(localStorage.getItem("userInfo"));
        return (
            <div>

                <div>
                    <div>
                        {
                            back ?
                                <Button
                                    className="btn" style={{
                                    flexShrink: "1",
                                    fontWeight: "bold",
                                    marginBottom: "0"
                                }}
                                    onClick={this.choiceBack}
                                >ПОВЕРНУТИСЯ
                                </Button>
                                : ''
                        }
                    </div>
                    {stat ?<Row>
                            {
                                userInfo.center == 500 ?
                                    <Row style={{
                                        width: "90%"
                                    }}>
                                        <Col className="searchComponent">
                                            <Col className="search-container " style={{
                                                paddingLeft: "20%", width: "100%"
                                            }}><h4>
                                                Пошук за ЦЗ</h4>
                                                <Select
                                                    style={{
                                                        width: "50%"
                                                    }}
                                                    value={search}
                                                    onChange={this.handleChange}
                                                    options={options}
                                                    placeholder="Оберіть ЦЗ"
                                                />
                                            </Col>

                                        </Col>

                                        <Col md={1}>
                                            <Button className="btn" onClick={this.searchCenter} style={{
                                                width: "auto",
                                                height: "auto",
                                                marginTop: "2.5rem",
                                            }}> Шукати</Button>
                                        </Col>
                                    </Row> : ""}
                            <Card className="content-header" style={{
                                flexDirection: "column",
                                marginRight: "1%",
                                marginLeft: "2%",
                                padding: "2rem"
                            }}>
                                <h3 className="history col-10"style={{
                                    flex:0,
                                }}>Моніторинг опрацювання результатів 7 етапу
                                    Інтернет-анкетування
                                    роботодавців з використанням «Google Forms»
                                </h3>
                                <div style={{
                                    marginLeft: "1%"
                                }}>
                                   <Row> <Col md={3}>
                                        <Button className="btn" onClick={this.selectStat} style={{
                                            width: "auto",
                                            height: "auto",
                                            marginTop: "2.5rem",
                                            marginBottom: "1rem",
                                            marginLeft: "1rem",
                                        }}>Переглянути список роботодавців</Button>
                                    </Col>
                                 </Row>
                                    <Row style={{
                                        height: "min-content"
                                    }}>
                                        <Col md={7} style={{
                                            padding: "0"
                                        }}>
                                            <Row className="titletable"
                                                 style={{
                                                     paddingTop: "2rem"
                                                 }}>
                                                <Col className="modulstat">
                                                    <label>Загальна кількість опитаних роботодавців</label>
                                                </Col>
                                                <Col
                                                    className="modulstat">
                                                    <label>Кількість роботодавців,які мають потребу в
                                                        кадрах,од./</label>
                                                </Col>
                                                <Col
                                                    className="modulstat">
                                                    <label>Кількість роботодавців,які мають потребу в кадрах,%</label>
                                                </Col>
                                                <Col
                                                    className="modulstat">
                                                    <label>Кількість роботодавців,які планують скорочення
                                                        чисельності,од.</label>
                                                </Col>
                                                <Col
                                                    className="modulstat">
                                                    <label>Кількість роботодавців,які планують скорочення
                                                        чисельності,%</label>
                                                </Col>
                                            </Row>
                                            <Row className="datting">
                                                <Col className="modulstat">
                                                    <label>{this.state.table.length}</label>
                                                </Col>
                                                <Col
                                                    className="modulstat">
                                                    <label>{this.state.tablhire.length}</label>
                                                </Col>
                                                <Col
                                                    className="modulstat">
                                                    <label>{this.getTableStat()}%</label>
                                                </Col>
                                                <Col
                                                    className="modulstat">
                                                    <label>{this.state.tablzv.length}</label>
                                                </Col>
                                                <Col
                                                    className="modulstat">
                                                    <label>{this.getTableStat1()}%</label>
                                                </Col>
                                            </Row>


                                        </Col>
                                        <Col md={5}>
                                            <label className="pie"> Охоплення
                                                опитуванням
                                            </label>
                                            {this.renderResult()}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={7} style={{
                                            padding: "0"
                                        }}>
                                            <Row className="titletable"
                                                 style={{
                                                     paddingTop: "2rem"
                                                 }}>
                                                <Col className="modulstat">
                                                    <label>Загальна кількість опитаних роботодавців</label>
                                                </Col>
                                                <Col
                                                    className="modulstat">
                                                    <label>Кількість роботодавців,юридичні особи,од.</label>
                                                </Col>
                                                <Col
                                                    className="modulstat">
                                                    <label>Кількість роботодавців,юридичні особи,%</label>
                                                </Col>
                                                <Col
                                                    className="modulstat">
                                                    <label>Кількість роботодавців,фізичні особи,од.</label>
                                                </Col>
                                                <Col
                                                    className="modulstat">
                                                    <label>Кількість роботодавців,фізичні особи,%</label>
                                                </Col>
                                            </Row>
                                            <Row className="datting">
                                                <Col className="modulstat">
                                                    <label>{this.state.table.length}</label>
                                                </Col>
                                                <Col
                                                    className="modulstat">
                                                    <label>{this.state.tablyurid.length}</label>
                                                </Col>
                                                <Col
                                                    className="modulstat">
                                                    <label>{this.filterStatYurid()}%</label>
                                                </Col>
                                                <Col
                                                    className="modulstat">
                                                    <label>{this.state.tablfiz.length}</label>
                                                </Col>
                                                <Col
                                                    className="modulstat">
                                                    <label>{this.filterStatFiz()}%</label>
                                                </Col>
                                            </Row>

                                        </Col>
                                        <Col md={5}>
                                            <label className="pie"> Охоплення
                                                опитуванням
                                            </label>
                                            {this.renderResult1()}
                                        </Col>
                                    </Row>
                                    <h3 className="history col-10">Робота з роботодавцями</h3>
                                    <Row className="titletable"
                                         style={{
                                             paddingTop: "2rem"
                                         }}>
                                        <Col className="modulstat">
                                            <label>Кількість роботодавців,які мають потребу в
                                                кадрах,од./</label>
                                        </Col>
                                        <Col
                                            className="modulstat">
                                            <label>Кількість роботодавців,з якими відбулись зустрічі/телефоні
                                                переговори./</label>
                                        </Col>
                                        <Col
                                            className="modulstat">
                                            <label>%,від загальної чисельності, які мають
                                                потребу</label>
                                        </Col>
                                        <Col
                                            className="modulstat">
                                            <label>Кількість роботодавців,які подали 3ПН,од.</label>
                                        </Col>
                                        <Col
                                            className="modulstat">
                                            <label>%,від загальної чисельності, які мають
                                                потребу</label>
                                        </Col>


                                    </Row>
                                    <Row className="datting">
                                        <Col className="modulstat">
                                            <label>{this.state.tablhire.length}</label>
                                        </Col>
                                        <Col
                                            className="modulstat">
                                            <label>{this.filterHireMeetyes()}</label>
                                        </Col>
                                        <Col
                                            className="modulstat">
                                            <label>{this.getTableStatMeet()}%</label>
                                        </Col>
                                        <Col
                                            className="modulstat">
                                            <label>{this.filter3PNPou()}</label>
                                        </Col>
                                        <Col
                                            className="modulstat">
                                            <label>{this.getTableStatPou()}%</label>
                                        </Col>


                                    </Row>
                                    <Row className="titletable"
                                         style={{
                                             paddingTop: "2rem"
                                         }}>
                                        <Col md={3} className="modulstat">
                                            <label>Кількість вакансій за 3ПН,од.</label>
                                        </Col>
                                        <Col md={2}
                                             className="modulstat">
                                            <label>Рівень укомплектування,% </label>
                                        </Col>
                                        <Col md={3} className="modulstat">
                                            <label>Направлено на навчання,осіб</label>
                                        </Col>
                                        <Col md={2}
                                             className="modulstat">
                                            <label>Працевлаштовано після навчання, осіб </label>
                                        </Col>
                                        <Col md={2}
                                             className="modulstat">
                                            <label>Рівень працевлаштування,% </label>
                                        </Col>
                                    </Row>
                                    <Row className="datting">
                                        <Col md={3} className="modulstat">
                                            <label>{this.filter3PN()}</label>
                                        </Col>
                                        <Col md={2}
                                             className="modulstat">
                                            <label>{this.getTableStatUkomp()}</label>
                                        </Col>
                                        <Col md={3} className="modulstat">
                                            <label>{this.filterNavch()}</label>
                                        </Col>
                                        <Col md={2}
                                             className="modulstat">
                                            <label>{this.filterPraznavch()}</label>
                                        </Col> <Col md={2}
                                                    className="modulstat">
                                        <label>{((this.filterPraznavch()/ this.filterNavch()) * 100).toFixed(2)}</label>
                                    </Col>
                                    </Row>

                                </div>

                            </Card>
                        </Row>:prof ?
                            <AnaliticProfes data={this.state.tablhire}/>:
                         <TableSpisokPou data={this.state.tablhire}/>

                    }

                </div>

            </div>
        )
    }
}

