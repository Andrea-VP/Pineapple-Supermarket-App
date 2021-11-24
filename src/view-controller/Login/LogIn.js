//import logo from '../logo.svg';
import './Login.css'
import {send} from '../../functions/functions'
import NavbarProducts from '../../Components/NavBarProducts/NavbarProducts';
import React, { useState } from 'react';
import ModalResetPass from "../../Components/ModalResetPass/ModalResetPass";
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/NavBar/Navbar';

function LogIn() {
    const [openModal2, setOpenModal2] = useState(false);
    return (
      <div>
      <Navbar/>
      <div className="cont">

      <header className="form">
       <h1>Iniciar Sesión</h1>
        <form className="center-class">
          <input className="input-login" required type="text" name="name" id="name" placeholder="Username"/>

          <input className="input-login" required type="password" name="password" id="password" placeholder="Password"/>


        <button onClick={send} type="submit">Ingresar</button>
        <label className="reset-pass" onClick={() => { setOpenModal2(true); }}>Restablecer contraseña</label>
        {openModal2 && <ModalResetPass closeModal2={setOpenModal2} />}
        </form>
        </header>
    </div>
    <Footer/>
    </div>
  );
}

export default LogIn;
