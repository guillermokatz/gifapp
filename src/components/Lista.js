import {useEffect} from 'react';
// import ReactDOMServer from 'react-dom/server';
import star from '../assets/images/star.png';

function Lista () {
        
    useEffect(()=>{
        let cantResultados = prompt("¿Cuántos resultados deseas ver? Máximo 20");
        cantResultados = parseInt(cantResultados)
        
        if (cantResultados < 1 || isNaN(cantResultados)) {
            cantResultados = 1
        } else if (cantResultados > 20) {
            cantResultados = 1
        }

        const container = document.querySelector(".listContainer");
            
        const API_KEY = "gbJ6iPyyaiIZkK1mAO4AKNOcgHnchflv";
        const endpoint = 'trending';
        let fetchUrl = `https://api.giphy.com/v1/gifs/${endpoint}?api_key=${API_KEY}&limit=${cantResultados}&rating=g`;
    
    
        fetch(fetchUrl)
        .then(data => data.json())
        .then(resultado => {
            // console.log(resultado);
            let trendingGIFs = resultado.data;
            trendingGIFs.map(GIF => {
                return container.innerHTML += `<article class="p-4 mx-auto container flex flex-col justify-center"><h2 class="mx-auto text-center sm:text-4xl p-4 text-2xl">${GIF.title}</h2><img class="mx-auto" src="${GIF.images.original.url}"><input class="ID-GIF" type="hidden" name="gifId" value="${GIF.id}"><img class="star my-4 cursor-pointer hover:opacity-70 w-10 mx-auto" alt="Favorito" src="${star}"></article>`
                // ${ReactDOMServer.renderToString(<Stars/>)}
            });
        })
        .then(data => {
            let favoritos = [];
                if (sessionStorage.getItem("favGIF") !== null) {
                    favoritos = JSON.parse(sessionStorage.getItem("favGIF"))
                }

            let stars = [...document.querySelectorAll(".star")]
            stars.map( star => {
                return star.addEventListener("click", function(){
                    if (sessionStorage.getItem("loggedUser") === null) {
                        alert("Ingrese un usuario para guardar favoritos")
                        window.parent.location = "/login";
                    } else {
                        let idGIF = this.parentElement.querySelector(".ID-GIF").value
                        console.log(idGIF);
                        if (!favoritos.some(valor => valor === idGIF)) {
                            favoritos.push(idGIF)
                            sessionStorage.setItem("favGIF", JSON.stringify(favoritos));
                        }
                        alert("Gif agregado a favoritos!");
                    }
            })
            })
        })
        .catch(error => console.log(error));
        
        


   
        // function addToFav() {
            
    
        //     let favoritos = [];
        //     if (sessionStorage.getItem("favGIF") !== null) {
        //         favoritos = JSON.parse(sessionStorage.getItem("favGIF"))
        //     }
    
        //     stars.map( star => {
        //         return star.addEventListener("click", function(){
        //             if (sessionStorage.getItem("loggedUser") === null) {
        //                 alert("Ingrese un usuario para guardar favoritos")
        //                 window.parent.location = "/login";
        //             } else {
        //                 let idGIF = 1
        //                 if (!favoritos.some(valor => valor === idGIF)) {
        //                     favoritos.push(idGIF)
        //                     sessionStorage.setItem("favGIF", JSON.stringify(favoritos));
        //                 }
        //                 alert("Gif agregado a favoritos!");
        //             }
        //     })
        //     })
        // }
        // let stars = document.querySelectorAll(".star");
        // stars = JSON.parse(stars)
        // console.log(stars);
        
        // function addFav () {
        // stars.map( star => { 
        //     return console.log(star);
        // })
        // }
    }, []);

 

    return (
        
        <main className="listContainer container mx-auto center flex flex-col align-center">
            
        </main>
    )
    
};

export default Lista;