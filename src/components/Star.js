import { useEffect } from 'react';
import star from '../assets/images/star.png';

function Star () {
    useEffect(()=>{
        const star = document.querySelector(".star");
        let favoritos = [];

        if (sessionStorage.getItem("favGIF") !== null) {
            favoritos = JSON.parse(sessionStorage.getItem("favGIF"))
        }

        star.addEventListener("click", function(){
            if (sessionStorage.getItem("loggedUser") === null) {
                alert("Ingrese un usuario para guardar favoritos")
                window.parent.location = "/login";
            } else {
                
                
                let idGIF = sessionStorage.getItem("idGIF")
                
                if (!favoritos.some(valor => valor === idGIF)) {
                    favoritos.push(idGIF)
                    sessionStorage.setItem("favGIF", JSON.stringify(favoritos));
                }
                
                alert("Gif agregado a favoritos!");
                
            }
            
        })
        
    }, []);

    return (
        <article className="container flex justify-center"><img className="star my-4 cursor-pointer hover:opacity-70 w-20" alt="Favorito" src={star} /></article>
    );
}

export default Star;