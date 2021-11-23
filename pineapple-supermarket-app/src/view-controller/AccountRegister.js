import './AccountRegister.css';
import {create, edit, erase} from '../functions/functions'

import { getUsers } from '../service/functions'
import { useState, useEffect } from 'react';


function AccountRegister(props) {

  const [user, setUser] = useState([]);
  
  useEffect(() => {
    async function fetchData () {
      const request = await getUsers()
      setUser(request.data)
    }
    fetchData()
  }, [props])

  
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
            <label size="">¿Rol Administrador?</label>
            <select className="register" required size="" name="role">
              <option>SÍ</option>
              <option>NO</option>
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
        <div className="row">
          <table className="table table-responsive table-hover table-striped">
          <tr>
            <th>Username</th>
            <th>Creation Date</th>
            </tr>

        {!user ? 'Cargando...' : user.map((e, index) => {
        return <tr>
                <td>{e.username}</td>
                <td>{e.dateEntry}</td>
                <td>
                  <i class="fas fa-edit"></i>
                </td>

              </tr>
      })}
          </table>
        </div>
      </div>
    
    </div>
  );
}

export default AccountRegister;