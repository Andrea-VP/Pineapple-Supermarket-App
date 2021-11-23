//import logo from '../logo.svg';
import './ProductsViewer.css';
import {alphSort, numSort, exportXLS} from '../functions/functions'
import React, { useState } from 'react';
import ModalAdd from "../Components/ModalAdd";
import ModalEdit from "../Components/ModalEdit";
import NavbarProducts from '../Components/NavbarProducts';
import Table from 'react-bootstrap/Table'
import Footer from '../Components/Footer';


function ProductsA() {
  const [openModal, setOpenModal] = useState(false);
  const [openModal1, setOpenModal1] = useState(false);

    return (
    <div className="">
      <NavbarProducts />
      <header className="cont-products-viewer">
        <h1>Productos</h1>
            <div className="btns-admin">
              <a className="hover-btn"><button className="openModalBtn" onClick={() => { setOpenModal1(true); }}>Añadir producto</button></a>
              {openModal1 && <ModalAdd closeModal1={setOpenModal1} />}
              <button className="openModalBtn" onClick={() => { setOpenModal(true); }}>Editar producto</button>
              {openModal && <ModalEdit closeModal={setOpenModal} />}
            </div>
            <input type="search" placeholder="Buscar" className="inputsearch"></input>
            <div className="btns-order">
              <label>Ordenar por:</label>
              <button onClick={alphSort} type="button">Nombre</button>
              <button onClick={numSort} type="button">Precio</button>
            </div>
          <section className="table-products">
          <Table  responsive striped bordered hover>
            <thead>
            <tr>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Descripción</th>
              <th>Cantidad</th>
              <th>Precio Unitario</th>
              <th>Imagen</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Fideos</td>
              <td>Harinas</td>
              <td>Fideos 500 gr</td>
              <td>20</td>
              <td>1 usd</td>
              <td><img alt="for sell"></img></td>
            </tr>
            </tbody>
          </Table>
        </section>
        <button className="btn-exportar" onClick={exportXLS} type="button">Exportar .xls</button>
      </header>
      <Footer/> 
    </div>
  );
}

export default ProductsA;
