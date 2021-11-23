import React from "react";
import './ModalAdd.css';

function ModalEdit({ closeModal }) {
  return (
    <div className ="modalBackground">
      <div className="modalContainer">
        <div className="container__tittle">
          <div className="titleCloseBtn">
              <button onClick={() => closeModal(false)}> X </button>
          </div>
          <div className="title">
              <h1>Editar Producto</h1>
          </div>  
        </div>
        <div className="body">
          <form className="editForm">
            <div>
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
                Cambiar Imagen:
                <input className="" required type="file" name="" id=""/> 
                </label>
                <br/>
                <br/>
                {/*<button onClick={create} type="submit">Crear</button>  */}
            </div>
            <div>
                <img src="" alt="aqui va la imagen"></img>
            </div>
          </form>
          <div className="footer">
            <button onClick={() => closeModal(false)} id="cancelBtn">Cancel</button>
            <button>Editar</button>
          </div>
       </div>
      </div>
    </div>
  );
}

export default ModalEdit;

