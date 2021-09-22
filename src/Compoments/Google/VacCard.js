import React, {Component} from "react";
import API from "../Forum/utils/API";
import {Card} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'react-day-picker/lib/style.css';
import DatePicker, {registerLocale} from 'react-datepicker';
import swal from "sweetalert";
import uk from 'date-fns/locale/uk';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import Button from "react-bootstrap/Button"
import "../Google/VacCard.css"
import Select from "react-select";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
registerLocale('uk', uk)
const options =
    [
        {value: 'січень', label: 'січень'},
        {value: 'лютий', label: 'лютий'},
        {value: 'березень', label: 'березень'},
        {value: 'квітень', label: 'квітень'},
        {value: 'травень', label: 'травень'},
        {value: 'червень', label: 'червень'},
        {value: 'липень', label: 'липень'},
        {value: 'серпень', label: 'серпень'},
        {value: 'вересень', label: 'вересень'},
        {value: 'жовтень', label: 'жовтень'},
        {value: 'листопад', label: 'листопад'},
        {value: 'грудень', label: 'грудень'},

    ]
export default class VacCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: null,
            search0: null,
            id: this.props.id,
            pou: "",
            error_message: null,
            titleposad: "",
            datemeet: "",
            datemeet0: "",
            datatel: "",
            datatel0: "",
            posad: [],
            posad0: [],
            posadvac: "",
            zvit: [],
            vacpersp: [],
            vacreestr: [],
            vacukomp: [],
            praznavch: [],
            hiremonth: "",
            startDate: "",
            startDateVacpersp: "",
            startDateVacreestr: "",
            startDateVacukomp: "",
            startDateNavch: "",
            startDatePraznavch: "",
            startDateZvit: "",
            navch: "",
            navch0: "",
            posadid: "",
            vacid: "",
            showDate: true,
            showRow: true,
            load: false

        };
    }

    handleChange = (date) => {
        this.setState({
            datemeet0: new Date(date).toLocaleDateString(),
            startDate: date
        })
        console.log(this.state.datemeet0)
    }
    handleChangeVac = (event) => {

        let keyword = event.target.value !== "" ? event.target.value : null
        console.log(keyword)
        this.setState({
            titleposad: keyword
        })
        console.log(this.state.titleposad)
    }
    searchIDposad = (event) => {
        console.log(event)
        let test = this.state.posad.filter((data) => {
                if (this.state.posad === null) {
                    console.log(data._id)
                    return swal('Увага! ', "Оберіть вакансію", 'error').then(value => {
                    })
                } else if (data._id == event) {
                    console.log(data)
                    return data
                }
            }
        )
        this.setState({
            posad0: test,
            showRow: false
        })
        console.log(test)

    }
    searchID = (event) => {
        console.log(event)
        this.setState({
            vacid: event,
            showDate: false
        })
        console.log(this.state.vacid)

    }
    searchIDmeet = (event) => {
        console.log(event)
        let id = this.props.id
        const datemeet=this.state.datemeet.filter((_, i) => i !== event)
       API.patch("/table/meet/up/" + id,{datemeet} )
            .then(res => {
                console.log(res)
                if (res) {
                    swal('Успіх! ', "Дата видалена", 'success').then(value => {
                        this.getPou(id)
                    })}})
            .catch(error => {
                this.setState({error_message: error.message});
            });

    }
    searchIDtel = (event) => {
        console.log(event)
        let id = this.props.id
        const datatel=this.state.datatel.filter((_, i) => i !== event)
       API.patch("/table/tel/up/" + id,{datatel} )
            .then(res => {
                console.log(res)
                if (res) {
                    swal('Успіх! ', "Дата видалена", 'success').then(value => {
                        this.getPou(id)
                    })}})
            .catch(error => {
                this.setState({error_message: error.message});
            });

    }
    handleChangeNavch = (date) => {
        this.setState({
            navch: new Date(date).toLocaleDateString(),
            startDateNavch: date,

        })
        console.log(this.state.navch)
    }
    handleChangeZvit = (date) => {
        this.setState({
            zvit: new Date(date).toLocaleDateString(),
            startDateZvit: date,
        })
        console.log(this.state.zvit)
    }
    handleChangeVacpersp = (date) => {
        this.setState({
            vacpersp: new Date(date).toLocaleDateString(),
            startDateVacpersp: date,
        })
        console.log(this.state.vacpersp)
    }
    handleChangeVacreestr = (date) => {
        this.setState({
            vacreestr: new Date(date).toLocaleDateString(),
            startDateVacreestr: date,
        })
        console.log(this.state.vacreestr)
    }
    handleChangeVacukomp = (date) => {

        this.setState({
            vacukomp: new Date(date).toLocaleDateString(),
            startDateVacukomp: date,
        })
        console.log(this.state.vacukomp)
    }
    handleChangePrazNavchh = (date) => {
        this.setState({
            praznavch: new Date(date).toLocaleDateString(),
            startDatePrazNavch: date,

        })
        console.log(this.state.praznavch)
    }
    handleChangeTel = (date) => {
        this.setState({
            datatel0: new Date(date).toLocaleDateString(),
            startDateTel: date
        })
        console.log(this.state.datatel0)
    }
    handleChangeMonth = (search) => {
        this.setState(
            {
                search: search,
                hiremonth: search
            })
        console.log(`Option selected:`, this.state.hiremonth)
    };
    getPou = async (id) => {
        await API.get("/table/" + id)
            .then(response => {
                console.log(response.data.table);
                this.setState(
                    {
                        pou: response.data.table,
                        datemeet: response.data.table.datemeet,
                        datatel: response.data.table.datatel,
                        posad: response.data.table.posad,
                        posad0: response.data.table.posad
                    },
                );
            })
            .catch(error => {
                this.setState({error_message: error.message});
            });

        console.log(this.state.posad0)
        // console.log(posad)
    };
    getPouReload = () => {
       API.get("/table/" + this.props.id)
            .then(response => {
                console.log(response.data.table);

                this.setState(
                    {
                        pou: response.data.table,
                        datemeet: response.data.table.datemeet,
                        datatel: response.data.table.datatel,
                        posad: response.data.table.posad,
                        posad0: response.data.table.posad
                    },
                );
            })
            .catch(error => {
                this.setState({error_message: error.message});
            });
        console.log(this.state.posad0)
        // console.log(posad)
    };

    postDatemeet = async e => {
        e.preventDefault();
        let id = this.props.id
        const datemeet = this.state.datemeet0
       API.post('/table/meet/add/' + id, {datemeet})
            .then(res => {
                    console.log(res)
                    if (res) {
                        swal('Успіх! ', "Дата змінена", 'success').then(value => {
                            this.getPou(id)
                            this.setState(
                                {
                                    startDate: ""
                                }
                            )
                        })
                    }
                },
                error => {
                    swal("Error!", error.data.message, "error");
                }
            );
    }

    postDatatel = async e => {
        e.preventDefault();
        let id = this.props.id
        const datatel = this.state.datatel0
       API.post('/table/tel/add/' + id, {datatel})
            .then(res => {
                    console.log(res)
                    if (res) {
                        swal('Успіх! ', "Дата змінена", 'success').then(value => {
                            this.getPou(id)
                            this.setState(
                                {
                                    startDateTel: ""
                                }
                            )
                        })
                    }
                },
                error => {
                    swal("Error!", error.data.message, "error");
                }
            );
    }
    postVac = async () => {
        if (this.state.titleposad) {
            let nazvapou = this.props.id
            const titleposad = this.state.titleposad

           API.post('/posad/add/', {nazvapou, titleposad})
                .then(res => {
                        console.log(res)
                        if (res.status == 200) {
                            this.setState(
                                {
                                    posadvac: res.data.data._id,
                                    load: true,
                                }
                            )
                            this.postZvit()
                            this.postHiremonth()
                            this.postVacpersp()
                            this.postVacreestr()
                            this.postVacukomp()
                            this.postNavch()
                            this.postPraznavch()
                            swal('Успіх! ', "Вакансія додана!", 'success')
                        }
                    },
                    error => {
                        swal("Error!", error, "error");
                    }
                );

        } else {
            swal("Помилка!", "Заповніть назву вакансії ", "error");
        }
    }
    postZvit = async () => {
        let posad = this.state.posadvac
       API.post('/zvit/add/', {posad})
            .then(res => {
                    console.log(res)
                },
                error => {
                    swal("Error!", error, "error");
                }
            );
    }
    postHiremonth = async () => {
        let posad = this.state.posadvac
       API.post('/hiremonth/add/', {posad})
            .then(res => {
                    console.log(res)
                },
                error => {
                    swal("Error!", error, "error");
                }
            );
    }
    postVacpersp = async () => {
        let posad = this.state.posadvac
       API.post('/vacpersp/add/', {posad})
            .then(res => {
                    console.log(res)
                },
                error => {
                    swal("Error!", error, "error");
                }
            );
    }
    postVacreestr = async () => {
        let posad = this.state.posadvac
       API.post('/vacreestr/add/', {posad})
            .then(res => {
                    console.log(res)
                },
                error => {
                    swal("Error!", error, "error");
                }
            );
    }
    postVacukomp = async () => {
        let posad = this.state.posadvac
       API.post('/vacukomp/add/', {posad})
            .then(res => {
                    console.log(res)
                },
                error => {
                    swal("Error!", error, "error");
                }
            );
    }
    postNavch = async () => {
        let posad = this.state.posadvac
       API.post('/navch/add/', {posad})
            .then(res => {
                    console.log(res)
                },
                error => {
                    swal("Error!", error, "error");
                }
            );
    }
    postPraznavch = async () => {
        let posad = this.state.posadvac
       API.post('/praznavch/add/', {posad})
            .then(res => {
                    console.log(res)
                },
                error => {
                    swal("Error!", error, "error");
                }
            );
    }
    patchNavch = async () => {
        let idpou = this.props.id
        let id = this.state.vacid
        const navch = this.state.navch
       API.patch('/navch/' + id, {navch})
            .then(res => {
                    console.log(res)
                    if (res) {
                        swal('Успіх! ', "Дата змінена", 'success').then(value => {
                            this.setState(
                                {
                                    startDateNavch: "",
                                    showDate: true,
                                    showRow: !this.state.showRow
                                }
                            )
                            this.getPou(idpou)
                        })
                    }
                },
                error => {
                    swal("Error!", error.data, "error");
                }
            );
    }
    patchPrazNavch = async () => {
        let idpou = this.props.id
        let id = this.state.vacid
        const praznavch = this.state.praznavch
       API.patch('/praznavch/' + id, {praznavch})
            .then(res => {
                    console.log(res)
                    if (res) {
                        swal('Успіх! ', "Дата змінена", 'success').then(value => {
                            this.setState(
                                {
                                    startDatePrazNavch: "",
                                    showDate: true,
                                    showRow: !this.state.showRow
                                }
                            )
                            this.getPou(idpou)
                        })
                    }
                },
                error => {
                    swal("Error!", error.data, "error");
                }
            );
    }
    patchZvit = async () => {
        let idpou = this.props.id
        let id = this.state.vacid
        const zvit = this.state.zvit
        console.log(id)
        console.log(zvit)
       API.patch('/zvit/' + id, {zvit})
            .then(res => {
                    console.log(res)
                    if (res) {
                        swal('Успіх! ', "Дата оновлена", 'success').then(value => {
                            this.setState(
                                {
                                    startDateZvit: "",
                                    showDate: true,
                                    showRow: !this.state.showRow
                                }
                            )
                            this.getPou(idpou)
                        })
                    }
                },
                error => {
                    swal("Error!", error.data, "error");
                }
            );
    }
    patchVacpersp = async () => {
        let idpou = this.props.id
        let id = this.state.vacid
        const vacpersp = this.state.vacpersp

       API.patch('/vacpersp/' + id, {vacpersp})
            .then(res => {
                    console.log(res)
                    if (res) {
                        swal('Успіх! ', "Дата оновлена", 'success').then(value => {
                            this.setState(
                                {
                                    startDateVacpersp: "",
                                    showDate: true,
                                    showRow: !this.state.showRow
                                }
                            )
                            this.getPou(idpou)
                        })
                    }
                },
                error => {
                    swal("Error!", error.data, "error");
                }
            );
    }
    patchVacreestr = async () => {
        let idpou = this.props.id
        let id = this.state.vacid
        const vacreestr = this.state.vacreestr

       API.patch('/vacreestr/' + id, {vacreestr})
            .then(res => {
                    console.log(res)
                    if (res) {
                        swal('Успіх! ', "Дата оновлена", 'success').then(value => {
                            this.setState(
                                {
                                    startDateVacreestr: "",
                                    showDate: true,
                                    showRow: !this.state.showRow
                                }
                            )
                            this.getPou(idpou)
                        })
                    }
                },
                error => {
                    swal("Error!", error.data, "error");
                }
            );
    }
    patchVacukomp = async () => {
        let idpou = this.props.id
        let id = this.state.vacid
        const vacukomp = this.state.vacukomp
       API.patch('/vacukomp/' + id, {vacukomp})
            .then(res => {
                    console.log(res)
                    if (res) {
                        swal('Успіх! ', "Дата оновлена", 'success').then(value => {
                            this.setState(
                                {
                                    startDateVacukomp: "",
                                    showDate: true,
                                    showRow: !this.state.showRow
                                }
                            )
                            this.getPou(idpou)
                        })
                    }
                },
                error => {
                    swal("Error!", error.data, "error");
                }
            );
    }
    patchHiremonth = async () => {
        let idpou = this.props.id
        let id = this.state.vacid
        const hiremonth = this.state.hiremonth.value
        console.log(hiremonth)
        console.log(id)
       API.patch('/hiremonth/' + id, {hiremonth})
            .then(res => {
                    console.log(res)
                    if (res) {
                        swal('Успіх! ', "Місяць оновлений", 'success').then(value => {
                            this.setState(
                                {
                                    showDate: true,
                                    showRow: !this.state.showRow
                                }
                            )
                            this.getPou(idpou)
                        })
                    }
                },
                error => {
                    swal("Error!", error.data, "error");
                }
            );
    }
    patchVac = async () => {
        let nazvapou = this.props.id
        let id = this.state.vacid
        const titleposad = this.state.titleposad
        console.log(id)
        console.log(titleposad)
        console.log(nazvapou)
       API.patch('/posad/' + id, {nazvapou, titleposad})
            .then(res => {
                    console.log(res)
                    if (res) {
                        swal('Успіх! ', "Вакансія оновлена", 'success').then(value => {
                            this.setState(
                                {
                                    showDate: true,
                                    showRow: !this.state.showRow
                                }
                            )

                            this.getPou(nazvapou)
                        })
                    }
                },
                error => {
                    swal("Error!", error.data, "error");
                }
            );
    }

    componentDidMount() {
        let id = this.props.id;
        this.getPou(id)
        console.log(id)
    }

    render() {
        console.log(this.state.datatel)
        const showDate = this.state.showDate
        const showRow = this.state.showRow
        const {search} = this.state;
        return (
            <>
                <Card className="content-header" style={{
                    flexDirection: "column", margin: "0 auto",
                    padding: "1%"
                }}>
                    <h3 className="history col-10">Картка співпраці з роботодавцем
                    </h3>

                    <Row className="titletable">
                        <Col md={2} className="modulpouhead">
                            <label>Найменування роботодавця</label>
                        </Col>
                        <Col md={1}
                             className="modulpouhead">
                            <label>ЄДРПОУ</label>
                        </Col>
                        <Col md={2}
                             className="modulpouhead">
                            <label>Контакти</label>
                        </Col>
                        <Col md={2}
                             className="modulpouhead">
                            <label>Посада (професія) для укомплектування(анкетування)</label>
                        </Col>
                        <Col md={1}
                             className="modulpouhead">
                            <label>Прогнозний період надання вакансій(за анкетуванням)</label>
                        </Col>
                        <Col md={2}
                             className="modulpouhead">
                            <label>Дата зустрічі з роботодавцем</label>
                        </Col>
                        <Col md={2}
                             className="modulpouhead">
                            <label>Дата телефонної розмови</label>

                        </Col>
                    </Row>
                    <Row className="datting">
                        <Col  style={{paddingTop:"2%"}} md={2} className="modulpoudata">
                            <label>{this.state.pou.nazvapou}</label>
                        </Col>
                        <Col md={1} style={{paddingTop:"2%"}}
                             className="modulpoudata">
                            <label>{this.state.pou.edrpou}</label>
                        </Col>
                        <Col md={2} style={{paddingTop:"2%"}}
                             className="modulpoudata">
                            <label>{this.state.pou.contact}</label>
                        </Col>
                        <Col md={2} style={{paddingTop:"2%"}}
                             className="modulpoudata">
                            <label>{this.state.pou.amounthire}</label>
                        </Col>
                        <Col md={1} style={{paddingTop:"2%"}}
                             className="modulpoudata">
                            <label>{this.state.pou.datahire}</label>
                        </Col>
                        <Col md={2}
                             className="modulpoudata">
                            <div>{this.state.datemeet ?
                                this.state.datemeet.map((meet, id) => {
                                        return (
                                            <Row style={{
                                                marginLeft: "5%", marginRight: "7%", borderBottom: "solid",
                                                borderWidth: "3px",
                                                borderColor: "#005BAA",
                                                paddingTop: "2px", paddingBottom: "2px"
                                            }}>
                                                <Col key={id}>
                                                    {meet}</Col>
                                                <Col>
                                                    <Button className="btn datedel " style={{
                                                        width: "min-content"
                                                    }} onClick={() => this.searchIDmeet(id)}>

                                                        <FontAwesomeIcon
                                                            icon={faTrashAlt}
                                                            size="2x"/>
                                                    </Button>
                                                </Col>
                                            </Row>
                                        )
                                    }
                                ) : "Дзвінків ще не було"
                            }
                            </div>
                            <div>
                                <div>
                                    <div className="form-group">
                                        <DatePicker
                                            selected={this.state.startDate}
                                            onChange={this.handleChange}
                                            showDateSelect
                                            name="startDate"
                                            locale="uk"
                                            dateFormat="dd.MM.yyyy"
                                            placeholderText="Оберіть дату"
                                        />
                                        <button className="btn vaccard " style={{
                                            width: "min-content"
                                        }}
                                                onClick={this.postDatemeet}>Додати
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={2}
                             className="modulpoudata">
                            <div>
                                {this.state.datatel ?
                                    this.state.datatel.map((tel, id) => {
                                            return (
                                                <Row style={{
                                                    marginLeft: "5%", marginRight: "7%", borderBottom: "solid",
                                                    borderWidth: "3px",
                                                    borderColor: "#005BAA",
                                                    paddingTop: "2px", paddingBottom: "2px"
                                                }}>
                                                    <Col key={id}>
                                                        {tel}</Col>
                                                    <Col>
                                                        <Button className="btn datedel " style={{
                                                            width: "min-content"
                                                        }} onClick={() => this.searchIDtel(id)}>

                                                            <FontAwesomeIcon
                                                                icon={faTrashAlt}
                                                                size="2x"/>
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            )
                                        }
                                    )
                                    : "Дзвінків ще не було"}
                            </div>
                            <div>
                                <div>
                                    <div className="form-group">
                                        <DatePicker
                                            selected={this.state.startDateTel}
                                            onChange={this.handleChangeTel}
                                            showDateSelect
                                            name="startDate"
                                            locale="uk"
                                            dateFormat="dd.MM.yyyy"
                                            placeholderText="Оберіть дату"
                                        />
                                        <button className="btn vaccard " style={{
                                            width: "min-content"
                                        }}
                                                onClick={this.postDatatel}>Додати
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="linegloss" style={{
                        marginBottom: "10px"
                    }}/>
                    <label><h4>Додати вакансію</h4></label>
                    <Row>

                        <Col className="search-container">

                            <input className="search" type="text"
                                   placeholder="Найменування вакансії"
                                   onChange={(e) => this.handleChangeVac(e)}
                                   style={{
                                       width: "50%"
                                   }}
                            />
                            <Button className="btn vaccard" onClick={this.postVac} style={{
                                width: "min-content",
                                height: "auto",
                                marginTop: "0",
                                marginBottom: "0"
                            }}>Зберегти</Button>
                            <Button className="btn vaccard" onClick={this.getPouReload} style={{
                                width: "auto",
                                height: "auto",
                                marginTop: "0",
                                marginBottom: "0"
                            }}>Оновити список</Button>


                        </Col>
                    </Row>
                    <Row className="linegloss"/>
                    <Row style={{
                        marginLeft: "5%"
                    }}>
                        <Col md={1} className="modulpoudata">
                            <label>#</label>
                        </Col>
                        <Col md={2}
                             className="modulpouhead">
                            Посада (професія) для укомплектування
                        </Col>
                        <Col md={2}
                             className="modulpouhead">
                            Прогнозний період подання вакансій/фактично
                        </Col>
                        <Col md={1}
                             className="modulpouhead">
                            Надано звіт 3-ПН (дата)
                        </Col>
                        <Col md={1}
                             className="modulpouhead">
                            Внесено перспективну вакансію (дата)
                        </Col>
                        <Col md={1}
                             className="modulpouhead">
                            Внесено зареєстровану вакансію (дата)
                        </Col>
                        <Col md={1}
                             className="modulpouhead">
                            Направлено на навчання (дата)
                        </Col>
                        <Col md={1}
                             className="modulpouhead">
                            Працевлаштовано після проходження профнавчання (дата)
                        </Col>
                        <Col md={1}
                             className="modulpouhead">
                            Укомплектовано за сприряння СЗ (дата)
                        </Col>
                    </Row>
                    {this.state.posad0.map((vac) => {
                            console.log(vac)
                            return (<>
                                    <Row style={{
                                        marginLeft: "5%"
                                    }}>
                                        <Col md={1} className="modulpoudata">
                                            <Button className="btn vaccard " style={{
                                                width: "100%", fontSize: "10px", margin: '0', padding: "0"
                                            }}
                                                    onClick={() => this.searchIDposad(vac._id)}>
                                                <FontAwesomeIcon
                                                    icon={faEdit}
                                                    size="2x"/>
                                            </Button>
                                        </Col>
                                        <Col md={2} className="modulpoudata">
                                            {vac.titleposad}

                                        </Col>

                                        <Col md={2} className="modulpoudata">{vac.hiremonth.hiremonth}

                                        </Col>
                                        <Col md={1} className="modulpoudata">{vac.zvit.zvit}

                                        </Col>
                                        <Col md={1} className="modulpoudata">{vac.vacpersp.vacpersp}

                                        </Col>
                                        <Col md={1} className="modulpoudata">{vac.vacreestr.vacreestr}

                                        </Col>
                                        <Col md={1} className="modulpoudata">{vac.navch.navch}

                                        </Col>
                                        <Col md={1} className="modulpoudata">{vac.praznavch.praznavch}

                                        </Col>
                                        <Col md={1} className="modulpoudata">{vac.vacukomp.vacukomp}

                                        </Col>
                                    </Row>
                                    {!showRow ?
                                        <Row style={{
                                            marginLeft: "5%"
                                        }}>
                                            <Col className="modulpoudata" md={1}>
                                                <label>#</label>
                                            </Col>
                                            <Col md={2} className="modulpoudata">
                                                {showDate ?
                                                    <button className="btn vaccard " style={{
                                                        width: "min-content"
                                                    }}
                                                            onClick={() => this.searchID(vac._id)}>Редагувати
                                                    </button>
                                                    : <div className="form-group">
                                                        <input className="search" type="text"
                                                               placeholder="Найменування вакансії"
                                                               onChange={(e) => this.handleChangeVac(e)}
                                                               style={{
                                                                   width: "100%",
                                                                   fontSize: "13px",
                                                                   fontWeight: "bold",
                                                                   margin: "0"
                                                               }}
                                                        />
                                                        <button className="btn vaccard " style={{
                                                            width: "min-content"
                                                        }}
                                                                onClick={this.patchVac}>Змінити
                                                        </button>
                                                    </div>}
                                            </Col>
                                            <Col md={2} className="modulpoudata">
                                                {showDate ?
                                                    <button className="btn vaccard " style={{
                                                        width: "min-content"
                                                    }}
                                                            onClick={() => this.searchID(vac.hiremonth._id)}>Редагувати
                                                    </button>
                                                    : <div className="form-group">
                                                        <Select
                                                            style={{
                                                                width: "50%"
                                                            }}
                                                            value={search}
                                                            onChange={this.handleChangeMonth}
                                                            options={options}
                                                            placeholder="Оберіть місяць"
                                                        />
                                                        <button className="btn vaccard " style={{
                                                            width: "min-content"
                                                        }}
                                                                onClick={this.patchHiremonth}>Змінити
                                                        </button>
                                                    </div>}
                                            </Col>
                                            <Col md={1} className="modulpoudata">
                                                {showDate ?
                                                    <button className="btn vaccard " style={{
                                                        width: "min-content"
                                                    }}
                                                            onClick={() => this.searchID(vac.zvit._id)}>Редагувати
                                                    </button>
                                                    : <div className="form-group">
                                                        <DatePicker
                                                            selected={this.state.startDateZvit}
                                                            onChange={this.handleChangeZvit}
                                                            showDateSelect
                                                            name="startDate"
                                                            locale="uk"
                                                            dateFormat="dd.MM.yyyy"
                                                            placeholderText="Оберіть дату"
                                                        />
                                                        <button className="btn vaccard " style={{
                                                            width: "min-content"
                                                        }}
                                                                onClick={this.patchZvit}>Змінити
                                                        </button>
                                                    </div>}
                                            </Col>
                                            <Col md={1} className="modulpoudata">
                                                {showDate ?
                                                    <button className="btn vaccard " style={{
                                                        width: "min-content"
                                                    }}
                                                            onClick={() => this.searchID(vac.vacpersp._id)}>Редагувати
                                                    </button>
                                                    : <div className="form-group">
                                                        <DatePicker
                                                            selected={this.state.startDateVacpersp}
                                                            onChange={this.handleChangeVacpersp}
                                                            showDateSelect
                                                            name="startDate"
                                                            locale="uk"
                                                            dateFormat="dd.MM.yyyy"
                                                            placeholderText="Оберіть дату"
                                                        />
                                                        <button className="btn vaccard " style={{
                                                            width: "min-content"
                                                        }}
                                                                onClick={this.patchVacpersp}>Змінити
                                                        </button>
                                                    </div>}
                                            </Col>
                                            <Col md={1} className="modulpoudata">
                                                {showDate ?
                                                    <button className="btn vaccard " style={{
                                                        width: "min-content"
                                                    }}
                                                            onClick={() => this.searchID(vac.vacreestr._id)}>Редагувати
                                                    </button>
                                                    : <div className="form-group">
                                                        <DatePicker style={{
                                                            width: "auto"
                                                        }}
                                                                    selected={this.state.startDateVacreestr}
                                                                    onChange={this.handleChangeVacreestr}
                                                                    showDateSelect
                                                                    name="startDate"
                                                                    locale="uk"
                                                                    dateFormat="dd.MM.yyyy"
                                                                    placeholderText="Оберіть дату"

                                                        />
                                                        <button className="btn vaccard " style={{
                                                            width: "min-content"
                                                        }}
                                                                onClick={this.patchVacreestr}>Змінити
                                                        </button>
                                                    </div>}
                                            </Col>
                                            <Col md={1} className="modulpoudata">
                                                {showDate ?
                                                    <button className="btn vaccard " style={{
                                                        width: "min-content"
                                                    }}
                                                            onClick={() => this.searchID(vac.navch._id)}>Редагувати
                                                    </button>
                                                    : <div className="form-group">
                                                        <DatePicker
                                                            selected={this.state.startDateNavch}
                                                            onChange={this.handleChangeNavch}
                                                            showDateSelect
                                                            name="startDate"
                                                            locale="uk"
                                                            dateFormat="dd.MM.yyyy"
                                                            placeholderText="Оберіть дату"
                                                        />
                                                        <button className="btn vaccard " style={{
                                                            width: "min-content"
                                                        }}
                                                                onClick={this.patchNavch}>Змінити
                                                        </button>
                                                    </div>}
                                            </Col>
                                            <Col md={1} className="modulpoudata">
                                                {showDate ?
                                                    <button className="btn vaccard " style={{
                                                        width: "min-content"
                                                    }}
                                                            onClick={() => this.searchID(vac.praznavch._id)}>Редагувати
                                                    </button>
                                                    : <div className="form-group">
                                                        <DatePicker
                                                            selected={this.state.startDatePrazNavch}
                                                            onChange={this.handleChangePrazNavchh}
                                                            showDateSelect
                                                            name="startDate"
                                                            locale="uk"
                                                            dateFormat="dd.MM.yyyy"
                                                            placeholderText="Оберіть дату"
                                                        />
                                                        <button className="btn vaccard " style={{
                                                            width: "min-content"
                                                        }}
                                                                onClick={this.patchPrazNavch}>Змінити
                                                        </button>
                                                    </div>}
                                            </Col>
                                            <Col md={1} className="modulpoudata">
                                                {showDate ?
                                                    <button className="btn vaccard " style={{
                                                        width: "min-content"
                                                    }}
                                                            onClick={() => this.searchID(vac.vacukomp._id)}>Редагувати
                                                    </button>
                                                    : <div className="form-group">
                                                        <DatePicker
                                                            selected={this.state.startDateVacukomp}
                                                            onChange={this.handleChangeVacukomp}
                                                            showDateSelect
                                                            name="startDate"
                                                            locale="uk"
                                                            dateFormat="dd.MM.yyyy"
                                                            placeholderText="Оберіть дату"
                                                        />
                                                        <button className="btn vaccard " style={{
                                                            width: "min-content"
                                                        }}
                                                                onClick={this.patchVacukomp}>Змінити
                                                        </button>
                                                    </div>}
                                            </Col>
                                        </Row> : ""
                                    }
                                </>
                            )
                        }
                    )
                    }
                </Card>
            </>
        )
    }
}


