// import { useEffect } from 'react';
import star from '../assets/images/star.png';

function Stars () {
   return (
        <img className="star my-4 cursor-pointer hover:opacity-70 w-10" alt="Favorito" src={star}/>
    );
}

export default Stars;