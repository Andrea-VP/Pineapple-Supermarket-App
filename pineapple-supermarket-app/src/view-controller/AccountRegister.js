import './AccountRegister.css';
import {createUserFront, editUserFront, deleteUserFront, userValue} from '../functions/functions'

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
      <form autoComplete="new-password">
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
            <input className="register" required type="password" name="password" id="password" autoComplete="new-password" />
          </div>
        </div>
        
        <div className="btns">
          <button onClick={()=>createUserFront()} type="submit" className="btn-create">Crear</button>
          <button onClick={()=>editUserFront()} type="submit" className="btn-edit">Editar</button>
          <button onClick={()=>deleteUserFront()} type="submit" className="btn-delete">Eliminar</button>
        </div>
      </form>
      </header>

      <div className="container">
        <div className="row">
          <table className="table table-responsive table-hover table-striped">
            <tbody>
            <tr>
              <th>Usuario</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Fecha de Creación</th>
            </tr>
            {!user ? 'Cargando...' : user.map((e, index) => {
              var userRol 
                if(e.roles.admin === true){
                  userRol = 'Administrador'
                }
                if(e.roles.admin === false){
                  userRol = 'Usuarios Regular'
                }
            return <tr key={index}>
                    <td>{e.username}</td>
                    <td>{e.name}</td>
                    <td>{e.lastName}</td>
                    <td>{e.email}</td>
                    <td>{userRol}</td>
                    <td>{e.dateEntry}</td>
                    <td>
                      <i className="fas fa-edit" onClick={() => userValue(e.email,e.name, e.lastName, e.roles.admin, e.password, e.username)}></i>
                    </td>
                  </tr>
            })}
          </tbody>
          </table>
        </div>
      </div>
    
    </div>
  );
}

export default AccountRegister;