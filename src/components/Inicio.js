import {useState, useEffect} from 'react';
import Star from '../components/Star'
function Inicio () {

const API_KEY = "gbJ6iPyyaiIZkK1mAO4AKNOcgHnchflv";
const endpoint = 'random';
let fetchUrl = `https://api.giphy.com/v1/gifs/${endpoint}?api_key=${API_KEY}&tag=&rating=g`;

const [gif, setGif] = useState("");
const [gifName, setGifName] = useState("");

function cambiarGif() {
    fetch(fetchUrl)
    .then( response => response.json())
    .then( data => {
        setGif(data.data.image_original_url)
        setGifName(data.data.title)
        sessionStorage.removeItem("idGIF")
        sessionStorage.setItem("idGIF", data.data.id)
    })
    .catch( error => console.log(error));

    alert("Cambiando Gif en un segundo!")
}    

useEffect(()=>{

        fetch("https://api.giphy.com/v1/gifs/random?api_key=gbJ6iPyyaiIZkK1mAO4AKNOcgHnchflv&tag=&rating=g")
        .then( response => response.json())
        .then( data => {
            setGif(data.data.image_original_url);
            setGifName(data.data.title)
            sessionStorage.setItem("idGIF", data.data.id)
        })
        .catch( error => console.log(error));
    
}, []);


return (
        <div className="p-4 m-auto center container">
            <button className="nuevoGIF bg-green-400 shadow-xl rounded text-4xl border-0 hover:text-white block px-4 py-2 my-4 m-auto text-center" type="button" onClick= {()=>cambiarGif()}>GIF Random</button>
            {gif === "" ? <p className="text-center">Cargando...</p> : <article className="container center flex flex-col mx-auto text-center text-3xl">{gifName}<img className="mx-auto mt-4 xs:w-1/2" src={gif} alt="" /></article>}
            <Star/>
        </div>
)

}

export default Inicio;

