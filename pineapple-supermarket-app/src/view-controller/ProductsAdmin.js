//import logo from '../logo.svg';
import './ProductsViewer.css';
import {alphSort, numSort, exportXLS} from '../functions/functions'
import React, { useState, useEffect } from 'react';
import ModalAdd from "../Components/ModalAdd";
import ModalEdit from "../Components/ModalEdit";
import NavbarProducts from '../Components/NavbarProducts';
import Table from 'react-bootstrap/Table'
import Footer from '../Components/Footer';

import { getProducts } from '../service/product';


function ProductsA(props) {
  const [openModal, setOpenModal] = useState(false);
  const [openModal1, setOpenModal1] = useState(false);

  const [product, setProduct] = useState([]);
  
  useEffect(() => {
    async function fetchData () {
      const request = await getProducts()
      setProduct(request.data)
    }
    fetchData()
  }, [props])

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
            <div className="container">
              <div className="row">
                <Table className="table table-responsive table-hover table-striped">
                <tbody>
                  <tr>
                    <th>Nombre</th>
                    <th>Categoría</th>
                    <th>Descripción</th>
                    <th>Cantidad</th>
                    <th>Precio Unitario</th>
                    <th>Imagen</th>
                  </tr>
                  {!product ? 'Cargando...' : product.map((e, index) => {
                  return <tr key={index}>
                          <td>{e.name}</td>
                          <td>{e.category}</td>
                          <td>{e.description}</td>
                          <td>{e.quantity}</td>
                          <td>{e.price}</td>
                          <td>{e.image}</td>
                          <td>
                            <i className="fas fa-edit"></i>
                          </td>
                        </tr>
                  })}
                </tbody>
                </Table>
              </div>
            </div>
        </section>
        <button className="btn-exportar" onClick={exportXLS} type="button">Exportar .xls</button>
      </header>
      <Footer/> 
    </div>
  );
}

export default ProductsA;