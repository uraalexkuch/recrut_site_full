import React, {Component} from "react";
import {Card} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Select from 'react-select';
import Button from "react-bootstrap/Button";
import {Link, Redirect} from "react-router-dom";
import ProfileTest from "./ProfileTest";
import "../Analytics/Analyt.css"

import swal from "sweetalert";
import AnaliticUsers from "./AnaliticUsers";
import API from "../Forum/utils/API";
import Bar from "./Bar";


const options =
    [
        {value: null, label: 'Всі'},
        {value: '500', label: 'Донецький  ОЦЗ'},
        {value: '503', label: 'АВДІЇВСЬКИЙ МІСЬКИЙ ЦЕНТР ЗАЙНЯТОСТІ'},
        {value: '505', label: 'БАХМУТСЬКИЙ МІСЬКИЙ ЦЕНТР ЗАЙНЯТОСТІ'},
        {value: '511', label: 'ТОРЕЦЬКИЙ МІСЬКИЙ ЦЕНТР ЗАЙНЯТОСТІ'},
        {value: '513', label: 'МИРНОГРАДСЬКИЙ МІСЬКИЙ ЦЕНТР ЗАЙНЯТОСТІ'},
        {value: '515', label: 'ДОБРОПІЛЬСЬКИЙ МІСЬКИЙ ЦЕНТР ЗАЙНЯТОСТІ'},
        {value: '517', label: 'ДРУЖКІВСЬКИЙ МІСЬКИЙ ЦЕНТР ЗАЙНЯТОСТІ'},
        {value: '523', label: 'КОСТЯНТИНІВСЬКИЙ МІСЬКИЙ ЦЕНТР ЗАЙНЯТОСТІ'},
        {value: '525', label: 'КРАМАТОРСЬКИЙ МІСЬКИЙ ЦЕНТР ЗАЙНЯТОСТІ'},
        {value: '527', label: 'ПОКРОВСЬКИЙ МІСЬКИЙ ЦЕНТР ЗАЙНЯТОСТІ'},
        {value: '529', label: 'ЛИМАНСЬКИЙ МІСЬКИЙ ЦЕНТР ЗАЙНЯТОСТІ'},
        {value: '533', label: 'МАРІУПОЛЬСЬКИЙ  МІСЬКИЙ ЦЕНТР ЗАЙНЯТОСТІ'},
        {value: '535', label: 'СЕЛИДІВСЬКИЙ МІСЬКИЙ ЦЕНТР ЗАЙНЯТОСТІ'},
        {value: '537', label: 'СЛОВ\'ЯНСЬКИЙ МІСЬКИЙ ЦЕНТР ЗАЙНЯТОСТІ'},
        {value: '543', label: 'ВУГЛЕДАРСЬКИЙ МІСЬКИЙ ЦЕНТР ЗАЙНЯТОСТІ'},
        {value: '551', label: 'ОЛЕКСАНДРІВСЬКИЙ РАЙОННИЙ ЦЕНТР ЗАЙНЯТОСТІ '},
        {value: '557', label: 'ВЕЛИКОНОВОСІЛКІВСЬКИЙ РАЙОННИЙ ЦЕНТР ЗАЙНЯТОСТІ '},
        {value: '559', label: 'ВОЛНОВАСЬКИЙ РАЙОННИЙ ЦЕНТР ЗАЙНЯТОСТІ '},
        {value: '561', label: 'НІКОЛЬСЬКИЙ РАЙОННИЙ ЦЕНТР ЗАЙНЯТОСТІ'},
        {value: '569', label: 'МАР\'ЇНСЬКИЙ РАЙОННИЙ ЦЕНТР ЗАЙНЯТОСТІ'},
        {value: '573', label: 'МАНГУШСЬКИЙ РАЙОННИЙ ЦЕНТР ЗАЙНЯТОСТІ'},
        {value: '585', label: 'НОВОГРОДІВСЬКИЙ МІСЬКИЙ ЦЕНТР ЗАЙНЯТОСТІ'},
    ]

export default class Analytics extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            search: null,
            users0: [],
            showModuls: true,
            showCard: true,
            showBack: false,
            id: "",
            dataTest: "",
            cod: null,
            test: [],
            test0: [],
            modul1: [],
            modul2: [],
            modul3: [],
            modul4: [],
            modul5: [],
            modul6: [],
            final: []

        }
        this.searchUsers = this.searchUsers.bind(this);
    }

    handleChange = search => {
        this.setState(
            {search},
            () => console.log(`Option selected:`, this.state.search.value)
        );
    };
    searchUsers = () => {
        if (this.state.search) {
            const data0 = this.state.users0;
            let filtred = this.state.users0.filter((data) => {
                    //console.log(data)
                    if (this.state.search.value === null)
                        return data0
                    else if (data.center == (this.state.search.value)) {
                        //   console.log(data)
                        return data
                    }
                }
            )
            this.setState({
                users: this.state.search.value === null ? data0 : filtred,
                cod: this.state.search.value,
                filtered: true
            })
            console.log(filtred);
            console.log(this.state.cod)

        } else {
            swal("Помилка!", "Оберіть ЦЗ!", "error");
        }
//this.forceUpdate(this.filterCenter)
        this.filterCenter()
    }
    searchID = (event) => {
        let selectId = event
        console.log(selectId)
        this.setState({
            id: selectId,
            showCard: !this.state.showCard,
            showBack: !this.state.showBack,
        })
        console.log(this.state.id)

    }
    choiceModulesHandler = () => {
        this.setState({
            showModuls: false,
            showBack: !this.state.showBack,
        })
    }
    selectStat = () => {
        this.setState({
            showModuls: !this.state.showModuls,
            showBack: !this.state.showBack,
        })
    }
    choiceBackHandler = () => {
        const start = this.state.users;
        this.setState({
            users: start,
            showModuls: true,
            showCard: true,
            search: null,
            showBack: false,
        })
        return <Redirect to='/recruting/analytics'/>

    }
    getUser = async () => {
        await API.get("/users/")
            .then(response => {
                console.log(response.data);
                this.setState({
                        users: response.data,
                        users0: response.data,
                        search: null,
                    },
                )
            })
            .catch(error => {
                this.setState({error_message: error.message});
            });
        console.log(this.state.test)
        console.log(this.state.test0)
        this.getTest()

    };
    getTest = async () => {
        await API.get("/testing/")
            .then(response => {
                console.log(response.data);
                this.setState(
                    {
                        test: response.data,
                        test0: response.data,
                    },
                );
            })
            .catch(error => {
                this.setState({error_message: error.message});
            });
        console.log(this.state.test)
        console.log(this.state.test0)
        this.filterCenter()

    };
    filterCenter = () => {
        const data0 = this.state.test;
        let filtredTest = this.state.test.filter((data) => {
            //    console.log(this.state.search)
                if (this.state.search === null) {
                    console.log(data.author.center)
                    return data0
                } else if (data.author.center == this.state.search.value) {
                 //   console.log(data.author.center)
                    return data
                }
            }
        )
        this.setState({
            test0: this.state.search === null ? data0 : filtredTest,
        })
        console.log(this.state.search)
        console.log(this.state.test0)
        this.filterModul1()
        this.filterModul2()
        this.filterModul3()
        this.filterModul4()
        this.filterModul5()
        this.filterModul6()
        this.filterFinality()
        this.getTestRating()
        this.getTestRating1()
        this.getTestRating2()
        this.getTestRating3()
        this.getTestRating4()
        this.getTestRating5()
        this.getTestRatingFin()
    }
    getTestRating = () => {
        const sum = (accumulator, currentValue) => accumulator + currentValue;
        const ratingsArr = this.state.modul1.map((reviewObj) => {
            return (
                reviewObj.resultNumber)
        })
      //  console.log(ratingsArr)
        return (ratingsArr.reduce(sum, 0) / ratingsArr.length).toFixed(2)
    }
    getTestRating1 = () => {
        const sum = (accumulator, currentValue) => accumulator + currentValue;
        const ratingsArr = this.state.modul2.map((reviewObj) => {
            return (
                reviewObj.resultNumber)
        })
        // console.log(ratingsArr)
        return (ratingsArr.reduce(sum, 0) / ratingsArr.length).toFixed(2)
    }
    getTestRating2 = () => {
        const sum = (accumulator, currentValue) => accumulator + currentValue;
        const ratingsArr = this.state.modul3.map((reviewObj) => {
            return (
                reviewObj.resultNumber)
        })
        //console.log(ratingsArr)
        return (ratingsArr.reduce(sum, 0) / ratingsArr.length).toFixed(2)
    }
    getTestRating3 = () => {
        const sum = (accumulator, currentValue) => accumulator + currentValue;
        const ratingsArr = this.state.modul4.map((reviewObj) => {
            return (
                reviewObj.resultNumber)
        })
        //console.log(ratingsArr)
        return (ratingsArr.reduce(sum, 0) / ratingsArr.length).toFixed(2)
    }
    getTestRating4 = () => {
        const sum = (accumulator, currentValue) => accumulator + currentValue;
        const ratingsArr = this.state.modul5.map((reviewObj) => {
            return (
                reviewObj.resultNumber)
        })
        // console.log(ratingsArr)
        return (ratingsArr.reduce(sum, 0) / ratingsArr.length).toFixed(2)
    }
    getTestRating5 = () => {
        const sum = (accumulator, currentValue) => accumulator + currentValue;
        const ratingsArr = this.state.modul6.map((reviewObj) => {
            return (
                reviewObj.resultNumber)
        })
        //console.log(ratingsArr)
        return (ratingsArr.reduce(sum, 0) / ratingsArr.length).toFixed(2)
    }
    getTestStat = () => {
        const ratingsSat = this.state.users.length
        const ratingsArr = this.state.modul1.length
        //console.log(ratingsArr)
       // console.log(ratingsSat)
        return ((ratingsArr / ratingsSat) * 100).toFixed(2)
    }
    getTestStat1 = () => {
        const ratingsSat = this.state.users.length
        const ratingsArr = this.state.modul2.length
       // console.log(ratingsArr)
      //  console.log(ratingsSat)
        return ((ratingsArr / ratingsSat) * 100).toFixed(2)
    }
    getTestStat2 = () => {
        const ratingsSat = this.state.users.length
        const ratingsArr = this.state.modul3.length
       // console.log(ratingsArr)
       // console.log(ratingsSat)
        return ((ratingsArr / ratingsSat) * 100).toFixed(2)
    }
    getTestStat3 = () => {
        const ratingsSat = this.state.users.length
        const ratingsArr = this.state.modul4.length
        //console.log(ratingsArr)
        //console.log(ratingsSat)
        return ((ratingsArr / ratingsSat) * 100).toFixed(2)
    }
    getTestStat4 = () => {
        const ratingsSat = this.state.users.length
        const ratingsArr = this.state.modul5.length
        //console.log(ratingsArr)
        //console.log(ratingsSat)
        return ((ratingsArr / ratingsSat) * 100).toFixed(2)
    }
    getTestStat5 = () => {
        const ratingsSat = this.state.users.length
        const ratingsArr = this.state.modul6.length
        //console.log(ratingsArr)
        //console.log(ratingsSat)
        return ((ratingsArr / ratingsSat) * 100).toFixed(2)
    }
    getTestStatFin = () => {
        const ratingsSat = this.state.users.length
        const ratingsArr = this.state.final.length
       // console.log(ratingsArr)
        //console.log(ratingsSat)
        return ((ratingsArr / ratingsSat) * 100).toFixed(2)
    }
    getTestRatingFin = () => {
        const sum = (accumulator, currentValue) => accumulator + currentValue;
        const ratingsArr = this.state.final.map((reviewObj) => {
            return (
                reviewObj.resultNumber)
        })
        //console.log(ratingsArr)
        return (ratingsArr.reduce(sum, 0) / ratingsArr.length).toFixed(2)
    }

    filterModul1 = () => {
        const data0 = this.state.test;
        let test = this.state.test0.filter((data) => {
                if (this.state.test0 === null) {
                    //console.log(data.nameTest)
                    return data0
                } else if (data.nameTest == "Тест до модуля 1") {
                    console.log(data)
                    return data
                }
            }
        )
        this.setState({
            modul1: test,
        })
       // console.log(test)
    }
    filterModul2 = () => {
        const data0 = this.state.test0;
        let test = this.state.test0.filter((data) => {
                if (this.state.test0 === null) {
                    // console.log(data.nameTest)
                    return data0
                } else if (data.nameTest == "Тест до модуля 2") {
                    //console.log(data)
                    return data
                }
            }
        )
        this.setState({
            modul2: test,
        })
        //console.log(test)
    }
    filterModul3 = () => {
        const data0 = this.state.test0;
        let test = this.state.test0.filter((data) => {
                if (this.state.test0 === null) {
                    //  console.log(data.nameTest)
                    return data0
                } else if (data.nameTest == "Тест до модуля 3") {
                    // console.log(data)
                    return data
                }
            }
        )
        this.setState({
            modul3: test,
        })
       // console.log(test)
    }
    filterModul4 = () => {
        const data0 = this.state.test0;
        let test = this.state.test0.filter((data) => {
                if (this.state.test0 === null) {
                    //  console.log(data.nameTest)
                    return data0
                } else if (data.nameTest == "Тест до модуля 4") {
                    //console.log(data)
                    return data
                }
            }
        )
        this.setState({
            modul4: test,
        })
      //  console.log(test)
    }
    filterModul5 = () => {
        const data0 = this.state.test0;
        let test = this.state.test0.filter((data) => {
                if (this.state.test0 === null) {
                    //   console.log(data.nameTest)
                    return data0
                } else if (data.nameTest == "Тест до модуля 5") {
                    //  console.log(data)
                    return data
                }
            }
        )
        this.setState({
            modul5: test,
        })
       // console.log(test)
    }
    filterModul6 = () => {
        const data0 = this.state.test0;
        let test = this.state.test0.filter((data) => {
                if (this.state.test0 === null) {
                    //console.log(data.nameTest)
                    return data0
                } else if (data.nameTest == "Тест до модуля 6") {
                    //console.log(data)
                    return data
                }
            }
        )
        this.setState({
            modul6: test,
        })
        //console.log(test)
    }
    filterFinality = () => {
        const data0 = this.state.test0;
        let test = this.state.test0.filter((data) => {
                if (this.state.test0 === null) {
                    // console.log(data.nameTest)
                    return data0
                } else if (data.nameTest == "Фінальний іспит") {
                    // console.log(data)
                    return data
                }
            }
        )
        this.setState({
            final: test,
        })
        //console.log(test)
    }

    componentDidMount() {
        // this.searchUsers()
        this.getUser()
        this.filterCenter()
    }

    renderResult() {
        return <Bar data0={this.getTestStat()}
                    data1={this.getTestStat1()}
                    data2={this.getTestStat2()}
                    data3={this.getTestStat3()}
                    data4={this.getTestStat4()}
                    data5={this.getTestStat5()}
                    data6={this.getTestStatFin()}/>;

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.users !== this.state.users) {
            this.filterCenter()
            console.log('фильтер таки поменялся)).')
        }
    }

    render() {
        console.log(this.state.test0)
        console.log(this.state.search)
        console.log(this.state.filtered)
        const stat = this.state.showModuls
        const show = this.state.showCard
        const back = this.state.showBack

        const {search} = this.state;
        let userInfo = JSON.parse(localStorage.getItem("userInfo"));
        return (
            <>
                {
                    userInfo.center == 500 ?
                        <div>
                            <div className="content-wrapper"
                                 style={{
                                     marginLeft: "1%",
                                     marginRight: "1%"
                                 }}>
                                {
                                    back ? <Link to="/recruting/analytics">
                                        <Button
                                            className="btn" style={{
                                            flexShrink: "1",
                                            fontWeight: "bold",
                                            marginBottom: "0"
                                        }}
                                            onClick={this.choiceBackHandler}
                                        >ПОВЕРНУТИСЯ
                                        </Button>
                                    </Link> : ''
                                }
                                {stat ?
                                    show ?
                                        <Card className="content-header" style={{
                                            flexDirection: "column"
                                        }}>
                                            <h4 style={{
                                                marginTop: "1rem",
                                                marginLeft: "40%"
                                            }}>Дані користувачів
                                            </h4>
                                            <>
                                                <Row>
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
                                                        <Button className="btn" onClick={this.searchUsers} style={{
                                                            width: "auto",
                                                            height: "auto",
                                                            marginTop: "2.5rem",
                                                        }}> Шукати</Button>
                                                    </Col>
                                                    <Col md={3}>
                                                        <Button className="btn" onClick={this.selectStat} style={{
                                                            width: "auto",
                                                            height: "auto",
                                                            marginTop: "2.5rem",
                                                            marginBottom: "1rem",
                                                            marginLeft: "1rem",
                                                        }}>Переглянути список осіб</Button>
                                                    </Col>
                                                </Row>
                                                <div style={{
                                                    marginLeft: "30%",
                                                    marginRight: "20%"
                                                }}>

                                                    <Row><h4>Кількість користувачів</h4>
                                                        <Col md={2} style={{
                                                            fontSize: "18 px",
                                                            fontWeight: "bold",
                                                            borderStyle: "solid",
                                                            borderWidth: "5px",
                                                            borderColor: "#005BAA",
                                                            borderRadius: "25px",
                                                            padding: "5px",
                                                            marginBottom: "0.5rem",
                                                            width: "5rem",
                                                            textAlign: "center",
                                                            marginLeft: "5%",
                                                            marginRight: "20%"
                                                        }}>
                                                            {this.state.users.length}
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <Row className="linegloss"/>
                                            </>
                                            <div
                                                style={{
                                                    borderRadius: "15px",
                                                    width: "100%",
                                                    maxHeight: "50%",
                                                }}>
                                                <div className="content-wrapper"
                                                     style={{
                                                         padding: "1%"
                                                     }}>
                                                    <Card className="content-header" style={{
                                                        flexDirection: "column"
                                                    }}>
                                                        <h3 className="history col-10">Статистика - результати
                                                            тестування ЦЗ
                                                        </h3>

                                                        <div style={{
                                                            marginLeft: "1%"
                                                        }}>

                                                            <Row>
                                                                <Col md={7} style={{
                                                                    padding: "0"
                                                                }}>
                                                                    <Row className="titletable">
                                                                        <Col className="modulstat">
                                                                            <label>Назва модулю</label>
                                                                        </Col>
                                                                        <Col
                                                                            className="modulstat">
                                                                            <label>Кількість тестів</label>
                                                                        </Col>
                                                                        <Col
                                                                            className="modulstat">
                                                                            <label>Середня
                                                                                результативність</label>
                                                                        </Col>
                                                                        <Col
                                                                            className="modulstat">
                                                                            <label>Охоплення ЦЗ
                                                                                тестуванням </label>
                                                                        </Col>
                                                                    </Row>
                                                                    <Row className="datting">
                                                                        <Col className="modulstat">
                                                                            <label>Модуль 1</label>
                                                                        </Col>
                                                                        <Col
                                                                            className="modulstat">
                                                                            <label>{this.state.modul1.length}</label>
                                                                        </Col>
                                                                        <Col
                                                                            className="modulstat">
                                                                            <label>{this.getTestRating()}%</label>
                                                                        </Col>
                                                                        <Col
                                                                            className="modulstat">
                                                                            <label>{this.getTestStat()}%</label>
                                                                        </Col>
                                                                    </Row>

                                                                    <Row className="datting">
                                                                        <Col
                                                                            className="modulstat">
                                                                            <label>Модуль 2</label>
                                                                        </Col>
                                                                        <Col
                                                                            className="modulstat">
                                                                            <label>{this.state.modul2.length}</label>

                                                                        </Col>
                                                                        <Col
                                                                            className="modulstat">
                                                                            <label>{this.getTestRating1()}%</label>
                                                                        </Col>
                                                                        <Col
                                                                            className="modulstat">
                                                                            <label>{this.getTestStat1()}%</label>
                                                                        </Col>
                                                                    </Row>
                                                                    <Row className="datting">
                                                                        <Col
                                                                            className="modulstat">
                                                                            <label>Модуль 3</label>
                                                                        </Col>
                                                                        <Col
                                                                            className="modulstat">
                                                                            <label>{this.state.modul3.length}</label>
                                                                        </Col>
                                                                        <Col
                                                                            className="modulstat">
                                                                            <label>{this.getTestRating2()}%</label>
                                                                        </Col>
                                                                        <Col
                                                                            className="modulstat">
                                                                            <label>{this.getTestStat2()}%</label>
                                                                        </Col>
                                                                    </Row>
                                                                    <Row className="datting">
                                                                        <Col
                                                                            className="modulstat">
                                                                            <label>Модуль 4</label>
                                                                        </Col>
                                                                        <Col
                                                                            className="modulstat">
                                                                            <label>{this.state.modul4.length}</label>

                                                                        </Col>
                                                                        <Col
                                                                            className="modulstat">
                                                                            <label>{this.getTestRating3()}%</label>
                                                                        </Col>
                                                                        <Col
                                                                            className="modulstat">
                                                                            <label>{this.getTestStat3()}%</label>
                                                                        </Col>
                                                                    </Row>
                                                                    <Row className="datting">
                                                                        <Col
                                                                            className="modulstat">
                                                                            <label>Модуль 5</label>
                                                                        </Col>
                                                                        <Col
                                                                            className="modulstat">
                                                                            <label>{this.state.modul5.length}</label>
                                                                        </Col>
                                                                        <Col
                                                                            className="modulstat">
                                                                            <label>{this.getTestRating4()}%</label>
                                                                        </Col>
                                                                        <Col
                                                                            className="modulstat">
                                                                            <label>{this.getTestStat4()}%</label>
                                                                        </Col>
                                                                    </Row>
                                                                    <Row className="datting">
                                                                        <Col
                                                                            className="modulstat">
                                                                            <label>Модуль 6</label>
                                                                        </Col>
                                                                        <Col
                                                                            className="modulstat">
                                                                            <label>{this.state.modul6.length}</label>
                                                                        </Col>
                                                                        <Col
                                                                            className="modulstat">
                                                                            <label>{this.getTestRating5()}%</label>
                                                                        </Col>
                                                                        <Col
                                                                            className="modulstat">
                                                                            <label>{this.getTestStat5()}%</label>
                                                                        </Col>
                                                                    </Row>
                                                                    <Row className="datting">
                                                                        <Col
                                                                            className="modulstat">
                                                                            <label>Фінальний тест</label>
                                                                        </Col>
                                                                        <Col
                                                                            className="modulstat">
                                                                            <label>{this.state.final.length}</label>

                                                                        </Col>
                                                                        <Col
                                                                            className="modulstat">
                                                                            <label>{this.getTestRatingFin()}%</label>
                                                                        </Col>
                                                                        <Col
                                                                            className="modulstat">
                                                                            <label>{this.getTestStatFin()}%</label>
                                                                        </Col>
                                                                    </Row>
                                                                </Col>
                                                                <Col md={5}>
                                                                    <label className="bar"> Охоплення
                                                                        тестуванням ЦЗ</label>
                                                                    {this.renderResult()}
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </Card>

                                                </div>
                                            </div>
                                        </Card>
                                        : <ProfileTest id={this.state.id}/> :
                                    <AnaliticUsers data={this.state.users}/>
                                }
                            </div>
                        </div> :
                        <h3 className="history col-10">Вибачте , розділ доступний лише для працівників Донецького
                            обласного центру зайнятості
                        </h3>}
            </>
        )
    }

}
