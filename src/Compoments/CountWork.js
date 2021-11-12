import React, {Component} from 'react';
import "../Css/count.css"
//import indexLabor from "../data/indexData.json"
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


export default class CountWork extends Component {
    constructor(props) {
        super(props)
        this.state = {
            response: [],

        }
    }

    async componentDidMount() {
        const response = await fetch('https://donocz.pp.ua/api/count/5fb2d8b302d2915ec61c70e7');
        const body = await response.json()
        if (response.status !== 200) throw Error(body.message)
            .catch(err => console.log(err))
        this.setState({
                response: [body],
            }
        )
        console.log(this.state.response)
    }
    render() {
        return (

            <div className="fun-facts">
                {this.state.response.map((indexLabor) => {
                                           return (
                            <div key= {indexLabor._id}>
                                <div className="row">
                                    <div className="col-lg-5 col-md-5 ">
                                        <div className="content">
                                            <h2>
                                                Наші результати з початку року
                                            </h2>
                                            <p >
                                                Ми націлені на пошук нових можливостей та розширення кордонів взаємовигідних
                                                партнерських відносин на засадах рекрутингу!
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-md-7 col-lg-7 align-self-center">
                                        <div className="row countrow">
                                            <div className="col-md-6 col-sm-5">
                                                <div className="count-area-content">
                                                    <div className="count-digit">
                                                        <CountUp end={indexLabor.robotodav}
                                                                                          redraw={true}>
                                                        {({countUpRef, start}) => (
                                                            <VisibilitySensor onChange={start} delayedCall>
                                                                <span ref={countUpRef}/>
                                                            </VisibilitySensor>
                                                        )}
                                                    </CountUp></div>
                                                    <div className="count-title">Кількість роботодавців</div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-5">
                                                <div className="count-area-content">
                                                    <div className="count-digit"><CountUp end={indexLabor.vacancy}
                                                                                          redraw={true}>
                                                        {({countUpRef, start}) => (
                                                            <VisibilitySensor onChange={start} delayedCall>
                                                                <span ref={countUpRef}/>
                                                            </VisibilitySensor>
                                                        )}
                                                    </CountUp></div>
                                                    <div className="count-title">Подано вакансій</div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-4" >
                                                <div className="count-area-content">
                                                    <div className="count-digit"><CountUp end={indexLabor.working}
                                                                                          redraw={true}>
                                                        {({countUpRef, start}) => (
                                                            <VisibilitySensor onChange={start} delayedCall>
                                                                <span ref={countUpRef}/>
                                                            </VisibilitySensor>
                                                        )}
                                                    </CountUp></div>
                                                    <div className="count-title">Працевлаштовано, осіб</div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="count-area-content">
                                                    <div className="count-digit"><CountUp end={indexLabor.vacancyNow}
                                                                                          redraw={true}>
                                                        {({countUpRef, start}) => (
                                                            <VisibilitySensor onChange={start} delayedCall>
                                                                <span ref={countUpRef}/>
                                                            </VisibilitySensor>
                                                        )}
                                                    </CountUp></div>
                                                    <div className="count-title">Рівень задоволенності,%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>


                            </div>)
                    }
                )}</div>

        );
    }
}
