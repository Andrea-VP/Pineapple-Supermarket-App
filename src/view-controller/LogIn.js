//import logo from '../logo.svg';
import './Login.css'
import {send} from '../functions/functions'

function LogIn() {
    return (
    <div className="cont">
      <header className="form form-login">
       <h1>Iniciar Sesión</h1>
        <form>


          <input required type="text" name="name" id="name" placeholder="Username"/>

          <input required type="password" name="password" id="password" placeholder="Password"/>


        <button onClick={send} type="submit">Ingresar</button>

        </form>
        </header>
    </div>
  );
}

export default LogIn;
