import React, {Component} from "react";
import Card from "react-bootstrap/Card";
import "./News.css"
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

import PaginationStep from "./PaginationStep";


export default class NewsPagination extends Component {


    constructor() {

        super();
        this.state = {
            news: [],
            pageOfItems: [],
            showBack: false,
            search: null,
            news0: []
        };
        this.onChangePage = this.onChangePage.bind(this);
        this.searchNews = this.searchNews.bind(this);
        this.sorted = {id: true};

    }

    changeNews = (id) => {
        console.log(id)
        this.setState(({news}) => {
            const idx = news.find((el) => el.id == id);
            console.log(idx);
            const newNews = [idx];
            return {
                news: newNews,
                showBack: true,

            }
        })
    }

    searchSpace = (event) => {
        let keyword = event.target.value !== "" ? event.target.value : null
        console.log(keyword)
        this.setState({
            search: keyword

        })
    }

    searchNews = (e) => {
        const data0 = this.state.news0;
        // eslint-disable-next-line array-callback-return
        let filtred = this.state.news.filter((data) => {
                console.log(data0)
                if (this.state.search === null)
                    return data0
                else if (data.title.toLowerCase().includes(this.state.search.toLowerCase()) || data.title.toLowerCase().includes(this.state.search.toLowerCase())) {
                    return data
                } else if (data.date.toLowerCase().includes(this.state.search.toLowerCase()) || data.date.toLowerCase().includes(this.state.search.toLowerCase())) {
                    return data

                }

            }
        )
        this.setState({
            news: this.state.search === null ? data0 : filtred
        })
        console.log(filtred);
    }

    sort() {
        const sorted = this.state.news.reverse().map((data, i) => {
            return data;
        })
        console.log(sorted);
        this.setState({
            news: sorted,
        });
    }

    choiceBackHandler = () => {
        const data0 = this.state.news0;
        this.setState({
            pageOfItems: [],
            showBack: false,
            search: null,
            news: data0,
        });
    }

    onChangePage(pageOfItems) {
        this.setState({pageOfItems: pageOfItems});
    }

    async componentDidMount() {
        const response = await fetch('https://donocz.pp.ua/api/news/');
        const data = await response.json()
        if (response.status !== 200) throw Error(data.message)
            .catch(err => console.log(err))
        this.setState({
                news: data,
                pageOfItems: [],
                showBack: false,
                search: null,
                news0: data
            }
        )
        console.log(this.state.news)
        this.sort();

    }

    render() {
        console.log(this.state.news)
        const back = this.state.showBack;
        return (
            <div>
                <div className="searchComponent">
                    <div className="search-container">
                        <span>Пошук за назвою або датою
                            <input className="search" type="text"
                                   placeholder="Введіть критерій"
                                   onChange={(e) => this.searchSpace(e)}
                            />
                            <Button className="btn" onClick={this.searchNews} style={{
                                width: "auto",
                                height: "auto",
                                marginTop: "0",
                                marginBottom: "0"
                            }}> Шукати</Button>
                        </span>
                    </div>
                </div>
                <hr/>
                <div className="container-news">
                    <div className="text-center">
                        {/* eslint-disable-next-line react/no-direct-mutation-state */}
                        {this.state.pageOfItems.map(news => {
                            return (
                                back ?
                                    <div className=" flex-fill flex-wrap " key={news.id}>

                                        <div style={{
                                            borderRadius: "15px",
                                            width: "100%",
                                            padding: "5px",
                                            //marginRight: "15px",
                                            height: "auto"
                                        }}>
                                            <img className="img embed-responsive-16by9" style={{
                                                flexShrink: "1",
                                                borderRadius: "25px",
                                                height: "50%",
                                                width: "100%"
                                            }}
                                                 src={news.imageUrl}
                                                 alt="Card image cap"
                                            />
                                            <div className="flex-grow-1" style={{
                                                flexGrow: "1",
                                                borderRadius: "25px",
                                                paddingLeft: "10px",
                                                paddingRight: "10px",
                                                paddingTop: "10px",
                                                paddingBottom: "10px",
                                                height: "auto",

                                            }}>
                                               <div className="data">{news.date}</div>
                                                <div className="card-title">{news.title}</div>
                                                <div className="news" style={{
                                                    flexGrow: "1",
                                                    height: "auto",
                                                    width: "100%",
                                                    //fontSize: "1.2rem",
                                                    textAlign: "justify",
                                                    marginLeft: "10px",
                                                    marginRight: "10px",
                                                    justifyContent: "stretch",
                                                    whiteSpace: "pre-wrap"
                                                }}>
                                                    {news.text}
                                                </div>
                                                <hr/>
                                                <Button className="btn" onClick={this.choiceBackHandler} style={{
                                                    width: "auto",
                                                    height: "auto",
                                                    marginTop: "0",
                                                    marginBottom: "0"
                                                }}> Повернутися</Button>
                                            </div>
                                        </div>
                                    </div> :
                                    <div className="flex-fill flex-wrap " key={news.id}>
                                        <div style={{
                                            borderRadius: "15px",
                                            marginLeft: "1rem",
                                            marginTop: "1rem",
                                            paddingTop: "1rem"

                                        }}>
                                            <hr/>
                                            <Row>
                                                <img className=" col-md-6 img embed-responsive-16by9" style={{
                                                    flexShrink: "1",
                                                    borderRadius: "25px",
                                                    maxHeight: "auto",
                                                }}
                                                     src={news.imageUrl}
                                                     alt="Card image cap"
                                                />
                                                <Card.Body className=" col-md-6 flex-grow-1" style={{
                                                    flexGrow: "1",
                                                    borderRadius: "25px",
                                                    height: "auto",
                                                    paddingLeft: "10px",
                                                    paddingRight: "10px",
                                                    width: "auto",
                                                    justifyContent: "stretch",
                                                    whiteSpace: "pre-wrap"

                                                }}
                                                ><div className="data">{news.date}</div>
                                                    <Card.Title>{news.title}</Card.Title>
                                                    <Card.Text style={{
                                                        justifyContent: "stretch",
                                                        whiteSpace: "pre-wrap",
                                                        marginBottom: "1rem",
                                                        maxHeight: "50%",
                                                        textAlign: "justify",
                                                        marginRight: "1rem"
                                                    }}>{news.shortText}</Card.Text>
                                                    <hr/>
                                                    <Button className="btn"
                                                            onClick={this.changeNews.bind(this, news.id)} style={{
                                                        width: "auto",
                                                        height: "auto",
                                                        //marginTop: "3 rem",
                                                        whiteSpace: "pre-wrap",
                                                        marginBottom: "0"
                                                    }}> Прочитати повністю</Button>

                                                </Card.Body>
                                            </Row>
                                        </div>
                                        <hr/>
                                    </div>
                            )
                        })
                        }

                        <PaginationStep items={this.state.news} onChangePage={this.onChangePage}/>

                    </div>
                </div>
                <hr/>
            </div>
        );
    }
}
