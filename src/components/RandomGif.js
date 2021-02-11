import {Component} from 'react';

const API_KEY = "gbJ6iPyyaiIZkK1mAO4AKNOcgHnchflv";
const endpoint = 'random';
let fetchUrl = `https://api.giphy.com/v1/gifs/${endpoint}?api_key=${API_KEY}&tag=&rating=g`;

class RandomGif extends Component {
    
    constructor() {
        super();
        this.state = {
            gif: "",
        }
    };

    apiCall(url, handler) {
        fetch(url)
            .then( response => response.json())
            .then( data => {
                // console.log(data)
                handler(data)
            })
            .catch( error => console.log(error))
    };

    componentDidMount() {
        console.log("Montando componente");
        this.apiCall(fetchUrl, this.gifNuevo)
    }

    componentDidUpdate() {
        console.log("Actualizando componente")
    }

    gifNuevo = (data) => {
        this.setState({
            gif: data.data.image_original_url
        })
    }

    cambiarGif() {
        this.apiCall(fetchUrl, this.gifNuevo)
        alert("Cambiando Gif en un segundo!")
    }

    render(){
        console.log("Renderizando componente")
        
        let gifImg;

        if (this.state.gif === "") {
            gifImg = <p>Cargando...</p>
        } else {
            gifImg = <img 
            src={this.state.gif} 
            alt=""
            onClick = {() => this.cambiarGif()}
            />
        }

        
        return (
            gifImg
        )
    }
};

export default RandomGif;