import './AccountRegister.css';
import {create, edit, erase} from '../functions/functions'



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
      <section className="cont-table">
        <table>
          <tr>
            <th>Usuario</th>
            <th>Fecha de creación</th>
          </tr>
          <tr>
            <td>John</td>
            <td>15/11/2021</td>
          </tr>
        </table>
      </section>
    </div>
  );
}

export default AccountRegister;
