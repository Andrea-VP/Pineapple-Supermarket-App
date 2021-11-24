import React from "react";
import './ModalAdd.css';

import {editProductFront} from "../functions/functions"

function ModalEdit({ closeModal,data }) {


  return (
    <div className ="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModal(false)}> X </button>
        </div>
        <div className="title">
          <h1>Editar Producto</h1>
        </div>
        <div className="body">

          <form className="editForm">
              <div>
                <div>
                  <label>
                  Nombre de Producto:
                  <input className="productEdit" type="text" name="name" id="productName"  defaultValue={data.name}/> 
                  </label>
                  <br/>
                  <label>
                  Categoría:
                  <select className="productEdit"  size="" name="category" defaultValue={data.category}>
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
                  <input className="productEdit" type="" name="description" id="" defaultValue={data.description}/> 
                  </label>
                  <br/>
                  <label>
                  Cantidad:
                  <input className="productEdit" type="number" name="quantity" id="" defaultValue={data.quantity} /> 
                  </label>
                  <br/>
                  <label>
                  Precio por unidad:
                  <input className="productEdit" type="number" name="price" id="" defaultValue={data.price}/> 
                  </label>
                  <br/>
                  <label>
                  Cambiar Imagen:
                  <input className="productEdit" type="" name="image" id="" defaultValue={data.image}/> 
                  </label>
                  <br/>
                  <br/>
                  {/*<button onClick={create} type="submit">Crear</button>  */}
                </div>
                <div>
                  <img src={data.image} alt={data.description} className="imageProductModal"></img>
                </div>
              </div>
          </form>
          <div className="footer">
            <button onClick={() => closeModal(false)} id="cancelBtn">Cancel</button>
            <button onClick={() => editProductFront(data.id)}>Editar</button>
          </div>
       </div>
      </div>
    </div>
  );
}

export default ModalEdit;