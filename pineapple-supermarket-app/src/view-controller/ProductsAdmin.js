//import logo from '../logo.svg';
import './ProductsViewer.css';
import {alphSort, numSort, exportXLS, productValue, deleteProductFront , dataProduct} from '../functions/functions'
import React, { useState, useEffect } from 'react';
import ModalAdd from "../Components/ModalAdd";
import ModalEdit from "../Components/ModalEdit";
import NavbarProducts from '../Components/NavbarProducts';
import Table from 'react-bootstrap/Table'
import Footer from '../Components/Footer';

import { getProducts } from '../service/product';

import decode from "jwt-decode";

const getToken = localStorage.getItem('token')
const decoded = decode(getToken);

let auth;
auth = decoded.roles.admin;

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

  let date = 12

    return (
    <div className="">
      <NavbarProducts />
      <header className="cont-products-viewer">
        <h1>Productos</h1>
          {auth ?
            <div className="btns-admin">
            <a className="hover-btn"><button className="openModalBtn" onClick={() => { setOpenModal1(true); }}>Añadir producto</button></a>
            {openModal1 && <ModalAdd closeModal1={setOpenModal1}/>}
          </div>
         :
            <></>
          }
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
                          <td><img alt={e.description} src={e.image} className="imageProduct"/></td>
                          <td>
                          {auth ?
                            <div>
                              <span onClick={() => { setOpenModal(true); }} >
                                <span onClick={() => productValue(e._id,e.name,e.category,e.price,e.quantity,e.description,e.image)}>
                                  <i className="fas fa-edit"></i>
                                </span>
                              </span>{openModal && <ModalEdit closeModal={setOpenModal}  data={dataProduct}/>}
                              <i className="fas fa-trash" onClick={() => deleteProductFront(e._id)}></i>
                           </div>
                          :
                            <></>
                          }
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