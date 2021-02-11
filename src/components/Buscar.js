import { useEffect } from "react";
import star from '../assets/images/star.png';

function Buscar () {
    useEffect(() => {
        const container = document.querySelector(".searchContainer");
    
        if (window.location.search !== "") {
            let querySearch = new URLSearchParams(window.location.search)
            let query = querySearch.get("query")
            let cantidad = querySearch.get("cantidad")
            
            if (cantidad < 1 || isNaN(cantidad)) {
                cantidad = 1
            } else if (cantidad > 20) {
                cantidad = 1
            }

            const API_KEY = "gbJ6iPyyaiIZkK1mAO4AKNOcgHnchflv";
            const endpoint = 'search';
            let fetchUrl = `https://api.giphy.com/v1/gifs/${endpoint}?api_key=${API_KEY}&q=${query}&limit=${cantidad}&offset=0&rating=g&lang=en`;
        
            fetch(fetchUrl)
                .then(data => data.json())
                .then(resultado => {
                // console.log(resultado.data);
                    let searchedGIFs = resultado.data;
                    container.innerHTML = `<h1 class="mx-auto sm:text-4xl p-4 text-2xl">Resultados de "${query}"</h1>`
                    searchedGIFs.map(GIF => {
                        return container.innerHTML += `<article class="p-4 mx-auto container center flex flex-col justify-center"><h2 class="mx-auto text-center">${GIF.title}</h2><img class="mx-auto" src="${GIF.images.original.url}"><input class="ID-GIF" type="hidden" name="gifId" value="${GIF.id}"><img class="star my-4 cursor-pointer hover:opacity-70 w-10 mx-auto" alt="Favorito" src="${star}"></article>`
                        })
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
                .catch(error => console.log(error))
            

    };

    });

    return (
    <div>
    <form className="container center flex flex-col mx-auto" action="" method="GET">
        <label className="text-center mx-auto text-4xl p-4">BUSCAR GIFs</label>
        <input className="text-center mx-auto text-4xl" name="query" type="text" />
        <label className="text-center mx-auto text-4xl p-4">CANTIDAD (MAX 20)</label>
        <input className="text-center mx-auto text-4xl w-min" name="cantidad" type="number" />
        <button type="submit" className="mx-auto my-3 px-4 py-3 text-center text-3xl text-white bg-pink-500 shadow-xl rounded border-0 hover:bg-pink-400">BUSCAR!</button>
    </form>

    <section className="searchContainer container center flex flex-col mx-auto">
        
    </section>
    </div>
    )

};

export default Buscar;