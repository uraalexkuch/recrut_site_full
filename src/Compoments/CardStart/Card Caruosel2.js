import React, {Component} from "react";
import Card from "react-bootstrap/Card";
import b from "../../Img/b1.webp";
import "./cardcarousel.css"
export default class CardCaruosel extends Component {

    render() {
               return (
            <>

                <div style={{
                    height: "100vh",
                    width: "80vw",
                }}>

                    <Card className="carousel">
                        <Card.Body className="col-md-7" >
                            <h1 className="title">{"Білл Гейтс"}</h1>
                            <Card.Text className="text" >
                                { "Білл Гейтс, який з легкістю прогнозує майбутнє на десятиліття вперед, і має відповіді на багато складних життєвих питань, наймання співробітників вважає однією з найскладніших завдань.  Білл Гейтс говорить так: «Щоб залучити й утримати на роботі розумних людей, необхідно забезпечити їм можливість спілкуватися з іншими розумними людьми». Якось він зазначив: «Люди можуть виконувати ваші завдання зовсім іншим способом, і при цьому отримувати відмінний результат. У вас не повинно бути упередження, що всі повинні робити те ж саме, що і ви»! \n" +
                                "      Розумні люди - це рекрутери Гейтса. Не тільки розумні, а й веселі. Як вам таке питання на співбесіді в Microsoft: «Чому б вам не влаштуватися в Google?». Широта думки - також ключова якість для тих, хто мріє отримати свій робочий стіл в компанії Microsoft. \n"}
                            </Card.Text>

                        </Card.Body>
                        <img  className=" col-md-5"
                              src={b}
                              alt="Card image cap"
                        />
                    </Card>
                </div>

            </>

        );
    }
}
