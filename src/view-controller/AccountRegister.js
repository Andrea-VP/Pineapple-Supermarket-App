import './AccountRegister.css';
import {create, edit, erase} from '../functions/functions'
import 'bootstrap/dist/css/bootstrap.min.css'
import Table from 'react-bootstrap/Table'

function AccountRegister() {
  return (
    <div className="">
      <header className="formRegister">
       <h1>Registrar</h1>
        <form>
          <div className="columns">
                <div>
                  <p>Nombres</p>
                  <input className="register" required type="text" name="name" id="personname" />
                </div>

                <div>
                  <p>Apellidos</p>
                  <input className="register" required type="text" name="lastname" id="lastname" />
                </div>

                <div>
                <p>Nombre Usuario</p>
                <input className="register" required type="text" name="username" id="username" />
                </div>
                <div>
                  <p>Rol</p>
                  <select className="register" required size="" name="role">
                    <option>Usuario estándar</option>
                    <option>Administrador</option>
                  </select>
                </div>

                <div>
                  <p>Correo Electŕonico</p>
                  <input className="register" required type="email" name="email" id="email" />
                </div>
                <div>
                  <p>Contraseña</p>
                  <input className="register" required type="password" name="password" id="password" />
                </div>
          </div>

          <div className="btns">
            <button onClick={create} type="submit" className="btn-create">Crear</button>
            <button onClick={edit} type="submit" className="btn-edit">Editar</button>
            <button onClick={erase} type="submit" className="btn-delete">Eliminar</button>
          </div>
        </form>
      </header>
          
      <div className="container">
          <Table  responsive striped bordered hover>
            <thead>
              <tr>
                <th>Usuario</th>
                <th>Fecha de Creación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John</td>
                <td>22/11/21</td>
              </tr>
              <tr>
                <td>Jabob</td>
                <td>23</td>
              </tr>
              <tr>
                <td>3</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
      </div>
    </div>
  );
}

export default AccountRegister;
