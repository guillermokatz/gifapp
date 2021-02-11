import {Link} from 'react-router-dom'
import { useEffect } from 'react';

export default function NavBar () {

  useEffect(()=>{
    if (sessionStorage.getItem("loggedUser") !== null) {
      document.getElementById("loginButton").innerText = sessionStorage.getItem("loggedUser")
    }
  })

  return (
      <nav className="flex items-center justify-between flex-wrap bg-green-300 p-6">
          
          
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link className="font-bold text-2xl sm:mb-1" to='/'>GIF App</Link>
        </div>
  
        <div className="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
          <div className="text-xl sm:flex-grow">
            <Link to="/list" className="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4">
              Populares
            </Link>
            <Link to="/search" className="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4">
              Buscar
            </Link>
            <Link to="/favs" className="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white">
              Favoritos
            </Link>
          </div>

          <div>
            <Link to="/login" id="loginButton" className="inline-block text-xl px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-green-500 hover:bg-white mt-4 sm:mt-0">
                Login
            </Link>
          </div>
        </div>
      
      </nav>
    )
};