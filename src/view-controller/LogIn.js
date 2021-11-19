//import logo from '../logo.svg';
import '../App.css';
import {send} from '../functions/functions'

function LogIn() {
    return (
    <div className="App">
      <header className="App-header">  
       <h1>Iniciar Sesión</h1>
        <form>
        <label>
          Nombre:
          <input required type="text" name="name" id="name"/> 
        </label>
        <br/>
        <label> 
          Contraseña:
          <input required type="password" name="password" id="password"/> 
        </label>
        <br/>
        <button onClick={send} type="submit">Ingresar</button>
        <button ></button> 
        </form>
        </header>
    </div>
  );
}

export default LogIn;
