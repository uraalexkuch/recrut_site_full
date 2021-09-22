import React, {Component} from "react";
import ImageGallery from 'react-image-gallery';
import "../Css/Foto.css"
//import foto from "../data/fotoData.json"


export default class Foto extends Component {

    constructor(props) {
        super(props)
        this.state = {
            images:[],
           error: null
        }
    }
    async componentDidMount() {
        const images = await fetch('https://donocz.pp.ua/api/foto/');
        const body = await images.json()
        if (images.status !== 200) throw Error(body.message)
           // .catch(err => console.log(err))
        this.setState({
            images: body,
            }
        )
        console.log(this.state.images)
    }

    render() {
     // const fullUrl="https://donocz.gov.ua/recruting/data/foto";
        const images =     this.state.images;
        console.log(this.state.images)
        console.log(images)
        return <ImageGallery items={ images}/>;
    }
}