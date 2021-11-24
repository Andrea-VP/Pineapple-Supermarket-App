import React from "react";
import './ModalAdd.css';
import {prueba} from '../functions/functions'
function ModalResetPass({ closeModal2 }) {
  return (
    <div className ="modalBackground">
      <div className="modalContainer">
          <div className="container__tittle">
            <div className="titleCloseBtn">
                <button onClick={() => closeModal2(false)}> X </button>
            </div>
            <div className="title">
                <h1>Recuperar contraseña</h1>
            </div>  
          </div>
          <div className="body-pass">
          <form className="form-align">
            <p>Correo:</p>
              <input className="padding-bottom" required type="email" name="" id=""/> 
            <br/>
            <p>Ingresa tu nueva contraseña:</p>
              <input className="padding-bottom" required type="password" name="" id=""/> 
            <br/>
            <div className="footer">
              <button onClick={() => closeModal2(false)} id="cancelBtn">Cancel</button>
              <button onClick={prueba}>Aceptar</button>
            </div>
          </form>
       </div>
      </div>
    </div>
  );
}

export default ModalResetPass;

