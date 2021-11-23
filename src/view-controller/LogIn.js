//import logo from '../logo.svg';
import './Login.css'
import {send} from '../functions/functions'
import NavbarProducts from '../Components/NavbarProducts';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

function LogIn() {
    return (
      <div>
      <Navbar/>
      <div className="cont">
      
      <header className="form">
       <h1>Iniciar Sesión</h1>
        <form>
          <input required type="text" name="name" id="name" placeholder="Username"/>

          <input required type="password" name="password" id="password" placeholder="Password"/>


        <button onClick={send} type="submit">Ingresar</button>

        </form>
        </header>
    </div>
    <Footer/>
    </div>
  );
}

export default LogIn;
