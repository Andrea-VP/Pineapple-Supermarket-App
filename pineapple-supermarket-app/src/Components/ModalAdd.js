import React from "react";
import './ModalAdd.css';
import {createProducts} from '../functions/functions'
function ModalAdd({ closeModal1 }) {

  return (

    <div className ="modalBackground">
      <div className="modalContainer">
          <div className="container__tittle">
            <div className="titleCloseBtn">
                <button onClick={() => closeModal1(false)}> X </button>
            </div>
            <div className="title">
                <h1>Añadir Producto</h1>
            </div>  
          </div>
          <div className="body">
          <form>
            <label>
              Nombre de Producto:
              <input className="data" required type="" name="" id=""/> 
            </label>
            <br/>
            <label>
              Categoría:
              <select className="data" required size="" name="">
                <option>Frutas</option> 
                <option>Verduras</option>
                <option>Carnes</option>
                <option>Lácteos</option>
                <option>Deporte</option>
                <option>Harinas</option>   
              </select> 
            </label>
            <br/>
            <label> 
              Descripción:
              <input className="data" required type="" name="" id=""/> 
            </label>
            <br/>
            <label>
              Cantidad:
              <input className="data" required type="" name="" id=""/> 
            </label>
            <br/>
            <label>
              Precio por unidad:
              <input className="data" required type="" name="" id=""/> 
            </label>
            <br/>
            <label>
              Imagen(url):
              <input className="data" type="text" name="" id=""/> 
            </label>
            <br/>
            <br/>
            {/*<button onClick={create} type="submit">Crear</button>  */}
          <div className="footer">
            <button onClick={() => closeModal1(false)} id="cancelBtn">Cancel</button>
            <button onClick={createProducts}  id="añadirProduct" type="submit">Añadir</button>
          </div>
        </form>
       </div>
      </div>
    </div>
  );
}

export default ModalAdd;