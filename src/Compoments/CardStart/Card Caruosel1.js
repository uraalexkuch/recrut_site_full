import React, {Component} from "react";
import Card from "react-bootstrap/Card";
import m from "../../Img/m.webp";
import "./cardcarousel.css"
export default class CardCaruosel extends Component {

    render() {
        //const fullUrl="https://www.bing.com/images/"
        return (
            <>

                <div style={{
                    //height: "100vh",
                    width: "80vw",
                }}>

                    <Card className="carousel">
                        <Card.Body className="col-md-7" >
                            <h1 className="title">{"Ілон Маск"}</h1>
                            <Card.Text className="text" >
                                {"До слова, про те, як влаштуватися на роботу до Ілона Маска, ходять суперечливі чутки… \n" +
                                "     Багато хто впевнений, що можна стати співробітником Маска і без вищої освіти. Він підбирає людей на посади, не орієнтуючись на наукові ступені або успішність. Навіть якщо мова йде про інженерів і фахівців з бізнес-процесів. Якщо хтось закінчив престижний університет, то це не обов'язково означає, що він здатний на великі справи… \n"}
                            </Card.Text>

                        </Card.Body>
                        <img  className=" col-md-5"
                              src={m}
                              alt="Card image cap"
                        />
                    </Card>
                </div>

            </>

        );
    }
}
