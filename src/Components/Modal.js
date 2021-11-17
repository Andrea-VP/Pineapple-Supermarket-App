import React from "react";
import './Modal.css';

function Modal({ closeModal }) {
  return (
    <div className ="modalBackground">
      <div className="modalContainer">
         <div className="titleCloseBtn">
            <button onClick={() => closeModal(false)}> X </button>
          </div>
          <div className="title">
           <h1>Información de Producto</h1>
          </div>
          <div className="body">
          <form>
            <label>
              Nombre de Producto:
              <input className="" required type="" name="" id=""/> 
            </label>
            <br/>
            <label>
              Categoría:
              <select className="" required size="" name="">
                <option>Frutas</option> 
                <option>Verduras</option>
                <option>Carnes</option>
                <option>Lácteos</option>
                <option>Deporte</option>   
              </select> 
            </label>
            <br/>
            <label> 
              Descripción:
              <input className="" required type="" name="" id=""/> 
            </label>
            <br/>
            <label>
              Cantidad:
              <input className="" required type="" name="" id=""/> 
            </label>
            <br/>
            <label>
              Precio por unidad:
              <input className="" required type="" name="" id=""/> 
            </label>
            <br/>
            <label>
              Subir Imagen:
              <input className="" required type="" name="" id=""/> 
            </label>
            <br/>
            <br/>
            {/*<button onClick={create} type="submit">Crear</button>  */}
          </form>
          <div className="footer">
            <button onClick={() => closeModal(false)} id="cancelBtn">Cancel</button>
            <button>Guardar</button>
          </div>
       </div>
      </div>
    </div>
  );
}

export default Modal;

