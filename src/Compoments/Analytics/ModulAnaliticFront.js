import React, {Component} from 'react';
import API from "../Forum/utils/API";
import {Card} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Analytics/Analyt.css"
import Bar from "./Bar";



export default class ModulAnaliticFront extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: [],
            search: this.props.data,
            number: this.props.number,
            test0: [],
            modul1: [],
            modul2: [],
            modul3: [],
            modul4: [],
            modul5: [],
            modul6: [],
            final: []
        }

    }

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
           //     console.log(this.state.search)
                if (this.state.search === null) {
                  //  console.log(data.author.center)
                    return data0
                } else if (data.author.center == this.state.search) {
                   // console.log(data.author.center)
                    return data
                }
            }
        )
        this.setState({
            test0: this.state.search === null ? data0 : filtredTest,
        })
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
        console.log(ratingsArr)
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
        const ratingsSat = this.state.number
        const ratingsArr = this.state.modul1.length
        console.log(ratingsArr)
        console.log(ratingsSat)
        return ((ratingsArr / ratingsSat) * 100).toFixed(2)
    }
    getTestStat1 = () => {
        const ratingsSat = this.state.number
        const ratingsArr = this.state.modul2.length
        console.log(ratingsArr)
        console.log(ratingsSat)
        return ((ratingsArr / ratingsSat) * 100).toFixed(2)
    }
    getTestStat2 = () => {
        const ratingsSat = this.state.number
        const ratingsArr = this.state.modul3.length
        console.log(ratingsArr)
        console.log(ratingsSat)
        return ((ratingsArr / ratingsSat) * 100).toFixed(2)
    }
    getTestStat3 = () => {
        const ratingsSat = this.state.number
        const ratingsArr = this.state.modul4.length
        console.log(ratingsArr)
        console.log(ratingsSat)
        return ((ratingsArr / ratingsSat) * 100).toFixed(2)
    }
    getTestStat4 = () => {
        const ratingsSat = this.state.number
        const ratingsArr = this.state.modul5.length
        console.log(ratingsArr)
        console.log(ratingsSat)
        return ((ratingsArr / ratingsSat) * 100).toFixed(2)
    }
    getTestStat5 = () => {
        const ratingsSat = this.state.number
        const ratingsArr = this.state.modul6.length
        console.log(ratingsArr)
        console.log(ratingsSat)
        return ((ratingsArr / ratingsSat) * 100).toFixed(2)
    }
    getTestStatFin = () => {
        const ratingsSat = this.state.number
        const ratingsArr = this.state.final.length
        console.log(ratingsArr)
        console.log(ratingsSat)
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
        const data0 = this.state.test0;
        let test = this.state.test0.filter((data) => {
                if (this.state.test0 === null) {
                    //console.log(data.nameTest)
                    return data0
                } else if (data.nameTest == "Тест до модуля 1") {
                    // console.log(data)
                    return data
                }
            }
        )
        this.setState({
            modul1: test,
        })
        console.log(test)
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
        console.log(test)
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
        console.log(test)
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
        console.log(test)
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
        console.log(test)
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
        console.log(test)
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
        console.log(test)
    }

    componentDidMount() {
        this.getTest()
    }
    renderResult() {
        return <Bar  data0={this.getTestStat()}
                     data1={this.getTestStat1()}
                     data2={this.getTestStat2()}
                     data3={this.getTestStat3()}
                     data4={this.getTestStat4()}
                     data5={this.getTestStat5()}
                     data6={this.getTestStatFin()} />;

    }
    render() {
                return (
            <>
                <div className="content-wrapper"
                style={{
                    padding:"1%"
                }}>
                    <Card className="content-header" style={{
                        flexDirection: "column"
                    }}>
                        <h3 className="history col-10">Статистика - результати тестування ЦЗ
                        </h3>
                        <div style={{
                            marginLeft: "1%"
                        }}>
                            <Row>
                                <Col md={7}  style={{
                                    padding:"0"
                                }}>
                                <Row  className="titletable">
                                    <Col className="modulstat" >
                                        <label>Назва модулю</label>
                                    </Col>
                                    <Col
                                         className="modulstat">
                                        <label>Кількість тестів</label>
                                    </Col>
                                    <Col
                                         className="modulstat">
                                        <label>Середня результативність</label>
                                    </Col>
                                    <Col
                                         className="modulstat">
                                        <label>Охоплення ЦЗ тестуванням </label>
                                    </Col>
                                </Row>
                                <Row className="datting">
                                    <Col className="modulstat" >
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
                                <Row  className="datting">
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
                                <Row className="datting" >
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
                                <Row  className="datting">
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
                                <Row  className="datting">
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
                                <Row className="datting" >
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
                                <Row className="datting" >
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
                                <Col   md={5} >
                                    <label className="bar"> Охоплення тестуванням ЦЗ</label>
                                    {this.renderResult()}
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </div>

            </>
        );
    }
}

