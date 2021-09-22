import React, {Component} from 'react';
import "../Footer/footer.css"
import logo from "../../Img/logo_don.webp"



export default class Footer extends Component {
    render() {
        return (
            <footer style={{
                borderTop:" 20px #FFD947 solid"
            }}>
                <div>

                    <div className="row">
                        <div className="col-lg-3 footer-item" style={{
                            marginLeft:"2rem",
                            marginRight:"2rem"
                        }}>
                          <div> <img className="logo-img"
                                 src={logo}
                                 height="auto"
                                 width="100"
                                 alt="logo" style={{
                              marginLeft:"2rem",
                              marginRight:"2rem"
                          }}
                            /></div> <br/>
                            <h4>Донецький обласний центр зайнятості</h4>
                            <p>
                                84331, м. Краматорськ, бульвар Краматорський, 41, тел. "гарячої лінії": (0626)485752, (0626)485784, e-mail: resept@donocz.gov.ua

                            <a
                                rel="nofollow"
                                href="https://www.google.com.ua/maps/place/%D0%B1%D1%83%D0%BB.+%D0%9A%D1%80%D0%B0%D0%BC%D0%B0%D1%82%D0%BE%D1%80%D1%81%D0%BA%D0%B8%D0%B9,+41,+%D0%9A%D1%80%D0%B0%D0%BC%D0%B0%D1%82%D0%BE%D1%80%D1%81%D0%BA,+%D0%94%D0%BE%D0%BD%D0%B5%D1%86%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+84300/@48.7184992,37.5997334,17z/data=!3m1!4b1!4m5!3m4!1s0x40df965eddd48bef:0x95cb9aa77a64e9d4!8m2!3d48.7185318!4d37.6019069"
                                target="_blank">(переглянути на карті)</a>
                            </p>

                        </div>
                        <div className="col-lg-3  footer-item" style={{
                            marginLeft:"2rem"
                        }} >
                            <h4>Корисні посилання</h4>
                            <ul className="menu-list">
                                <li>
                                    <a  rel="nofollow"
                                        href="https://skills.dcz.gov.ua/"
                                        target="_blank">Освітній портал Державної служби зайнятості</a>
                                </li>
                                <li>
                                    <a  rel="nofollow"
                                        href="https://www.dcz.gov.ua/storinka/elektronne-podannya-dokumentiv"
                                        target="_blank">Електронне подання документів</a>
                                </li>
                                <li>
                                    <a  rel="nofollow"
                                        href="https://www.dcz.gov.ua/storinka/vidkryti-dani"
                                        target="_blank">Відкриті дані</a>
                                </li>

                            </ul>
                        </div>
                        <div className="col-lg-3  footer-item" style={{
                            marginLeft:"2rem"
                        }} >
                            <h4>Державні інформаційні ресурси</h4>
                            <ul className="menu-list">
                                <li>
                                    <a
                                        rel="nofollow"
                                        href="https://www.president.gov.ua/"
                                        target="_blank">Президент України</a>
                                </li>
                                <li>
                                    <a
                                        rel="nofollow"
                                        href="https://rada.gov.ua/"
                                        target="_blank">Верховна Рада України</a>
                                </li>
                                <li>
                                    <a rel="nofollow"
                                       href="https://www.me.gov.ua/?lang=uk-UA"
                                       target="_blank">Міністерство розвитку економіки, торгівлі та сільського господарства</a>
                                </li>
                                <li>
                                    <a rel="nofollow"
                                       href="https://www.msp.gov.ua/"
                                       target="_blank">Міністерство соціальної політики</a>
                                </li>
                                <li>
                                    <a rel="nofollow"
                                       href="https://www.dcz.gov.ua/"
                                       target="_blank">Державний центр зайнятості</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div style={{
                        marginRight:"45%",
                        marginLeft:"3%",
                        marginTop:"3rem",
                        color:"#FFD947",
                        fontSize:"0.8rem",

                    }}>Product of Yuriy Kucherenko@2020</div>
                </div>
            </footer>

        );
    }
}
