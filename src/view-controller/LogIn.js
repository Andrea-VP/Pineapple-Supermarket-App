//import logo from '../logo.svg';
import '../App.css';
import {enviar} from '../functions/functions'



function LogIn() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Iniciar Sesión</h1>
        <form>
        <label>
          Nombre:
          <input type="text" name="name" id="name"/> 
        </label>
        <button onClick={enviar} type="submit">Enviar</button> 
        
        <label>
          Contraseña:
          <input type="password" name="password" id="password"/> 
        </label>
        </form>
      </header>
    </div>
  );
}

export default LogIn;
