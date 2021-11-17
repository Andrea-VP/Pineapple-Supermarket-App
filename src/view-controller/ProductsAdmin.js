//import logo from '../logo.svg';
import '../App.css';
import {alphSort, numSort, exportXLS} from '../functions/functions'
//import {render} from '../functions/modalAddProduct'
import React, { useState } from 'react';
import Modal from "../Components/Modal";


function ProductsA() {
  const [openModal, setOpenModal] = useState(false);

    return (
    <div className="App">
      <header className="App-header">
        <h1>Productos</h1>
      </header>
      <section> 
          <button className="openModalBtn" onClick={() =>{setOpenModal(true);} }>Añadir producto</button>
          {openModal && <Modal closeModal={setOpenModal}/>}
          {/*openModal && <Modal closeModal={setOpenModal} />*/}
          <button type="button">Editar producto</button> 
          <input type="search" placeholder="Buscar"></input>
          <label>Ordenar por:</label>
          <button onClick={alphSort} type="button">Nombre</button>
          <button onClick={numSort} type="button">Precio</button>
        <table>
        <tbody>
          <tr>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Descripción</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Imagen</th>
          </tr>
          <tr>
            <td>Fideos</td>
            <td>Harinas</td>
            <td>Fideos 500 gr</td>
            <td>20</td>
            <td>1 usd</td>
            <td><img alt="for sell"></img></td>
          </tr>
          </tbody>
        </table>
      </section>
      <button onClick={exportXLS} type="button">Exportar .xls</button>
    </div>
  );
}

export default ProductsA;