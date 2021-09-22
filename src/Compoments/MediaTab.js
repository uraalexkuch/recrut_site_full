import React, {Component} from "react";
import "../Css/Media.css"
import Media from "react-bootstrap/Media";
import mediaData from "../data/mediaData.json";
import Card from "react-bootstrap/Card";


export default class MediaTab extends Component {
    render() {
        const MediaItem = ({data}) => (
            <Card>
                <Media>
                <img src={data.imageUrl} style={{
                    width: "64px",
                    height: "64px",
                    margin: "5px"
                }}
                     alt="Generic placeholder"
                />
                <Media.Body style={{
                    justifyContent: "stretch",
                    whiteSpace: "pre-wrap"
                }}>
                    <h4>{data.title}</h4>

                    <p style={{ justifyContent: "stretch",
                        whiteSpace: "pre-wrap",
                        textAlign: "justify",
                        texIndent: "2 rem",
                        paddingRight:" 5%",
                    }} >{data.text}  </p>
                    <hr />
                    <hr/>
                </Media.Body>
            </Media></Card>)

        const MediaBox = () =>
            mediaData.length > 0 && (
                <div>
                    {mediaData.map((data, idx) => (
                        <MediaItem data={data} key={idx}/>
                    ))}
                </div>)
        return (
            <MediaBox>
                <div>
                    <Media/>
                </div>
            </MediaBox>
        );


    }
}