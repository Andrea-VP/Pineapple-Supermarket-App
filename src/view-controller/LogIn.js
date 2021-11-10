import logo from '../logo.svg';
import '../App.css';
import {boton} from '../functions/functions'



function LogIn() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hola vista Log In
        </a>
        <button onClick={boton}>Click aquí</button>
      </header>
    </div>
  );
}

export default LogIn;
