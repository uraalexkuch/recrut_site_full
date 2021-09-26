import React, {Component} from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import convertDate from "../../Compoments/Forum/utils/convertDate";
import API from '../../Compoments/Forum/utils/API';
import Button from "react-bootstrap/Button";
import swal from "sweetalert";

export default class ProfileTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultfull: [
                {
                    nameTest: '',
                    author: '',
                    result: '',
                    data: ''
                }
            ],
        }
        console.log(this.state.resultfull)
    }

    getTest = async (id) => {
        //const id=this.props.id
        await API.get("/testing/" + id)
            .then(response => {
                console.log(response.data);
                this.setState(
                    {
                        resultfull: response.data
                    },
                );
                console.log(this.state.resultfull);
            })
            .catch(error => {
                this.setState({error_message: error.message});
            });
        console.log(this.state.resultfull)
    };
   delTest = async (idtest) => {
console.log(idtest)
       API.delete  ('/testing/'+idtest)
            .then(res => {
                if(res){swal('Успіх! ', "Тест видалений", 'success')}
                    console.log(res)
                },
                error => {
                    swal("Error!", error, "error");
                }
            );
    }
    componentDidMount() {
        let id = this.props.id[0];
        this.getTest(id)
        console.log(id)
    }
    /*componentDidUpdate(prevProps, prevState) {
        if (prevState.resultfull !== this.state.resultfull) {
            let id = this.props.id[0];
            this.getTest(id)
            console.log('фильтер таки поменялся)).')
        }
    }*/
    render() {
        let test = this.state.resultfull;
        let userInfo = JSON.parse(localStorage.getItem("userInfo"));
        console.log(userInfo)
        console.log(test)
        return (
            <>
                <div className="content-wrapper">
                    <div className="content-header" style={{
                        flexDirection: "column"
                    }}>
                        <h3 className="history col-10">{this.props.id[1]} - результати тестування
                        </h3>
                        {test.map((testing, id) => {
                              //  console.log({testing})
                                return (
                                    <div key={id}
                                         style={{
                                             borderRadius: "15px",
                                             width: "100%",
                                            // maxHeight: "50%",
                                         }}>
                                        <Row fluid style={{
                                            maxWidth: "100%",
                                            height: "auto",
                                            marginLeft: "5%",
                                            marginRight: "5%",
                                        }}>
                                            <Col md={2} style={{
                                                fontSize: "18 px",
                                                fontWeight: "bold",
                                                borderStyle: "solid",
                                                borderWidth: "5px",
                                                borderColor: "#005BAA",
                                                borderRadius: "25px",
                                                padding: "5px",
                                                marginBottom: "1rem"
                                            }}>
                                                <label>{testing.nameTest}</label>
                                            </Col>
                                            <hr/>
                                            <Col  style={{
                                                fontSize: "18 px",
                                                fontWeight: "bold",
                                                borderStyle: "solid",
                                                borderWidth: "5px",
                                                borderColor: "#FFD947",
                                                padding: "5px",
                                                marginBottom: "1rem"
                                            }}>
                                                <label>Результат тестування: </label>
                                            </Col>
                                            <Col md={2} style={{
                                                fontSize: "18 px",
                                                fontWeight: "bold",
                                                borderStyle: "solid",
                                                borderWidth: "5px",
                                                borderColor: "#005BAA",
                                                borderRadius: "25px",
                                                padding: "5px",
                                                marginBottom: "1rem"
                                            }}>
                                                {testing.result}

                                            </Col>
                                            <Col md={2} style={{
                                                fontSize: "18 px",
                                                fontWeight: "bold",
                                                borderStyle: "solid",
                                                borderWidth: "5px",
                                                borderColor: "#FFD947",
                                                padding: "5px",
                                                marginBottom: "1rem"
                                            }}>
                                                <label>Дата тестування:
                                                </label>
                                            </Col>
                                            <Col md={2} style={{
                                                fontSize: "18 px",
                                                fontWeight: "bold",
                                                borderStyle: "solid",
                                                borderWidth: "5px",
                                                borderColor: "#005BAA",
                                                borderRadius: "25px",
                                                padding: "5px",
                                                marginBottom: "1rem"
                                            }}>
                                                {convertDate(testing.testingDate)}
                                            </Col >
                                            {
                                                userInfo.surname == "Кучеренко" ?
                                        <Col >
                                            <Button className="btn" onClick={() => this.delTest(testing._id)} style={{
                                                width: "auto",
                                                height: "auto",
                                                marginTop: "2.5rem",
                                                marginBottom: "1rem",
                                                marginLeft: "1rem",
                                            }}>Видалити тест</Button>
                                        </Col >:""}

                                        </Row>

                                    </div>)
                            }
                        )
                        }
                    </div>
                </div>

            </>
        );
    }
}

