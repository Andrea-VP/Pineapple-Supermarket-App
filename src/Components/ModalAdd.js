import React from "react";
import './ModalAdd.css';

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
                <option>Harinas</option>   
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
              <input className="" required type="file" name="" id=""/> 
            </label>
            <br/>
            <br/>
            {/*<button onClick={create} type="submit">Crear</button>  */}
          </form>
          <div className="footer">
            <button onClick={() => closeModal1(false)} id="cancelBtn">Cancel</button>
            <button>Añadir</button>
          </div>
       </div>
      </div>
    </div>
  );
}

export default ModalAdd;

