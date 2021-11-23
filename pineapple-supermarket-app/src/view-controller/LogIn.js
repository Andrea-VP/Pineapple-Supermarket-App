//import logo from '../logo.svg';
import './Login.css'
  import decode from "jwt-decode";

import { useHistory } from 'react-router-dom';

import {send} from '../functions/functions'

function LogIn() {
  const history = useHistory();

  function linkPage(rolAdmin){
    if (rolAdmin === true) {
      history.push("/account")
    } else {
      history.push("/home")
    }
  }

    return (
    <div className="cont">
      <header className="form form-login">
       <h1>Iniciar Sesión</h1>
        <div>
          <input required type="text" name="name" id="name" placeholder="Username"/>
          <input required type="password" name="password" id="password" placeholder="Password"/>
          <button onClick={()=>{send (decode,linkPage)}} >Ingresar</button>
        </div>
        </header>
    </div>
  );
}

export default LogIn;