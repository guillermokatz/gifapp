import Inicio from './components/Inicio';
import Lista from './components/Lista';
import Buscar from './components/Buscar';
import Login from './components/Login';
import Fav from './components/Fav';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

export default function App() {

  return (
    <div className="bg-gray-100 h-screen">

      <BrowserRouter>
      <NavBar/>

      <Switch>
        <Route exact path='/' component={Inicio}/>
        <Route exact path='/list' component={Lista}/>
        <Route exact path='/search' component={Buscar}/>
        <Route exact path='/favs' component={Fav}/>
        <Route exact path='/login' component={Login}/>
      </Switch>
    </BrowserRouter>
    <Footer/>
    </div>
  );
};
