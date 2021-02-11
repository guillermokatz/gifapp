import { useEffect } from "react";
import {Link} from 'react-router-dom';
export default function Login () {
    useEffect(() => {
        let form = document.getElementById("loginForm");
        let username = document.getElementById("username");

        function userLogout() {
            sessionStorage.removeItem("loggedUser");
            sessionStorage.removeItem("favGIF");
        }

        if (form) {
            form.addEventListener("submit", function(e){
                if (username.value === "") {
                    e.preventDefault();
                    alert("El campo no puede quedar vacío");
                } else if (username.value.length < 3 || username.value.length > 20) {
                    e.preventDefault();
                    alert("El nombre de usuario no puede ser menor a 3 caracteres o mayor a 20");
                } else {
                    sessionStorage.setItem("loggedUser", username.value)
                }
            });
        }
        
        if(document.getElementById("logoutForm")) {
            document.getElementById("logoutForm").addEventListener("submit", function(){
                userLogout();
            })
        }

    })

    

    if (sessionStorage.getItem("loggedUser") !== null) {
    
        return (
            <div className="container mx-auto center flex flex-col">
                <h1 className="mx-auto text-4xl p-4">Hola {sessionStorage.getItem("loggedUser")}!!</h1>
                <Link className="mx-auto" to='/favs'> <button type="button" className="mx-auto my-3 px-4 py-3 text-center text-3xl text-white bg-yellow-400 shadow-xl rounded border-0 hover:text-yellow-700">GIFs Favoritos</button></Link>
                <form className="mx-auto" id="logoutForm" action="/">
                    <button className="mx-auto my-2 px-4 py-2 text-center text-xl text-green-400 bg-white shadow-xl rounded border-0 hover:bg-green-300 hover:text-white" type="submit" name="logout" id="logout">LOGOUT</button>
                </form>
            </div>
        )
    } else {
    
        return (
            <div className="loginContainer">
            <form id="loginForm" action="/login" className="flex flex-col container center mx-auto">
                <input className="mx-auto my-5 px-5 py-3 text-xl" id="username" type="text" placeholder="Escribí un usuario"/>
                <button className="mx-auto my-2 px-4 py-2 text-center text-3xl text-green-400 bg-white shadow-xl rounded border-0 hover:bg-green-300 hover:text-white" type="submit">LOGIN</button>
            </form>
        </div>
    )
    }
}