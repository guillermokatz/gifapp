import { useEffect } from "react";

function Fav () {

    useEffect(()=>{
        const container = document.querySelector(".favContainer");
        const API_KEY = "gbJ6iPyyaiIZkK1mAO4AKNOcgHnchflv";
              
        if(sessionStorage.getItem("favGIF")) {
            container.innerHTML = `<h1 class="mx-auto sm:text-4xl p-4 text-2xl text-center">Lista de GIFs favoritos</h1>`
            let favGIF = sessionStorage.getItem("favGIF");
            favGIF = JSON.parse(favGIF);
            favGIF.map(GIF => {
                    
                let fetchUrl = `https://api.giphy.com/v1/gifs/${GIF}?api_key=${API_KEY}`;
    
                return fetch(fetchUrl)
                .then(data => data.json())
                .then(resultado => {
                        // console.log(resultado.data);
                        let nombreGIF = resultado.data.title;
                        let URLGIF = resultado.data.images.original.url;
                        container.innerHTML += `<article class="p-4 mx-auto container center"><h2 class="mx-auto text-center sm:text-4xl p-4 text-2xl">${nombreGIF}</h2><img class="mx-auto" src="${URLGIF}"></article>`    
                        // container.innerHTML += `<h1>${nombreGIF}</h1><img src="${URLGIF}">`;
                        
                });
    
    
            });
            
        } else {
            
            container.innerHTML = `<h1 class="mx-auto sm:text-4xl p-4 text-2xl">No tenés GIFs Favoritos</h1>`
        
        }
    })
    
    return (
        <div className="favContainer container mx-auto center flex flex-col align-center">

        </div>

    )

}

export default Fav;