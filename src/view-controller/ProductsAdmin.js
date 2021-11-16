//import logo from '../logo.svg';
import '../App.css';
import {alphSort, numSort, exportXLS} from '../functions/functions'
//import {render} from '../functions/modalAddProduct'

function ProductsA() {
    return (
    <div className="App">
      <header className="App-header">
        <h1>Productos</h1>
        </header>
        {/*<button type="button" id="modalAdd" onClick={render}>Añadir producto</button>*/}
        <button type="button" id="modalAdd">Añadir producto</button>
        <button type="button">Editar producto</button> 
        <input type="search" placeholder="Buscar"></input>
        <label>Ordenar por:</label>
        <button onClick={alphSort} type="button">Nombre</button>
        <button onClick={numSort} type="button">Precio</button>
        <section> 
        <table>
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
            <td><img></img></td>
          </tr>
        </table>
      </section>
      <button onClick={exportXLS} type="button">Exportar .xls</button>
    </div>
  );
}

export default ProductsA;