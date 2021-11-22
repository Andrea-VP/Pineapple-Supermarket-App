//import logo from '../logo.svg';
import './Login.css'
import { useHistory } from 'react-router-dom';

import {send} from '../functions/functions'

function LogIn() {
  const history = useHistory();

  function linkPage(){
    history.push("/account")

  }

    return (
    <div className="cont">
      <header className="form form-login">
       <h1>Iniciar Sesión</h1>
        <form>


          <input required type="text" name="name" id="name" placeholder="Username"/>

          <input required type="password" name="password" id="password" placeholder="Password"/>


        <button onClick={send(linkPage)} type="submit">Ingresar</button>

        </form>
        </header>
    </div>
  );
}

export default LogIn;