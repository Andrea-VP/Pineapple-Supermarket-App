import React from "react";
import './ModalAdd.css';
import {prueba} from '../../functions/functions'
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
            <form className="form-product ">
              <label>
                Nombre de Producto:
              </label>
              <input className="" required type="" name="" id=""/>

              <br/>
              <label>
                Categoría:
              </label>
                <select className="" required size="" name="">
                  <option>Frutas</option>
                  <option>Verduras</option>
                  <option>Carnes</option>
                  <option>Lácteos</option>
                  <option>Deporte</option>
                  <option>Harinas</option>
                </select>
              <br/>
              <label>
                Descripción:
              </label>
              <input className="" required type="" name="" id=""/>

              <br/>
              <label>
                Cantidad:
              </label>
                <input className="" required type="" name="" id=""/>

              <br/>
              <label>
                Precio por unidad:
              </label>
                <input className="" required type="" name="" id=""/>

              <br/>
              <label>
                Subir Imagen:
              </label>
                <input className="" required type="file" name="" id=""/>

              <br/>
              <br/>
              {/*<button onClick={create} type="submit">Crear</button>  */}
              <div className="btns">
                <button onClick={() => closeModal1(false)} id="cancelBtn">Cancel</button>
                <button onClick={prueba}>Añadir</button>
              </div>
            </form>
          </div>
      </div>
    </div>
  );
}

export default ModalAdd;
