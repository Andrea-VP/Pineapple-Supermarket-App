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

import ExportExcel from 'react-export-excel';

const ExcelFile = ExportExcel.ExcelFile;
const ExcelSheet = ExportExcel.ExcelFile;
const ExcelColumn = ExportExcel.ExcelFile;



const getToken = localStorage.getItem('token')

let auth;

if(!getToken){
    auth= null

}else {
    const decoded = decode(getToken);

    auth = decoded.roles.admin;
}


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
                <select name="order" id="select-letter" >
                  <option value="" disabled selected >Nombre</option>
                  <option value="orderAZ" >A-Z</option>
                  <option value="orderZA" >Z-A</option>
                </select>
                <label>Ordenar por:</label>
                <select name="order" id="select-letter" >
                  <option value="" disabled selected >Precio</option>
                  <option value="higher" >Mayor-menor</option>
                  <option value="low" >Menor-mayor</option>
                </select>
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
                  return <tr key={index} id='tableProduct'>
                          <td id="productNameArray">{e.name}</td>
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
        <ExcelFile element={<button className="btn-exportar" onClick={exportXLS} type="button">Exportar .xls</button>} filename='Proctucs Export'>
          <ExcelSheet data={product} name="Product">
            <ExcelColumn label="Nombre del Producto" value='name'/>
            <ExcelColumn label="Categoría" value='category'/>
            <ExcelColumn label="Descripción	" value='description'/>
            <ExcelColumn label="Cantidad" value='quantity'/>
            <ExcelColumn label="Precio Unitario" value='price'/>
            <ExcelColumn label="Url Imagen" value='image'/>



          </ExcelSheet>
        </ExcelFile>
      </header>
      <Footer/> 
    </div>
  );
}

export default ProductsA;