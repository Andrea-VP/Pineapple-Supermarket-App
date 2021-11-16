import '../App.css';
import {create, edit, erase} from '../functions/functions'



function AccountRegister() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Registrar</h1>
       </header>
        <form>
        <label>
          Nombre de usuario:
          <input className="register" required type="text" name="username" id="username"/> 
        </label>
        <br/>
        <label> 
          Contraseña:
          <input className="register" required type="password" name="password" id="password"/> 
        </label>
        <br/>
        <label>
            Correo:
            <input className="register" required type="email" name="email" id="email"/> 
        </label>
        <br/>
        <label>
            Nombre:
            <input className="register" required type="text" name="name" id="personname"/> 
        </label>
        <br/>
        <label>
            Apellido:
            <input className="register" required type="text" name="lastname" id="lastname"/> 
        </label>
        <br/>
        <label>
            Rol:
            <select className="register" required size="2" name="role">
                <option>Administrador</option> 
                <option>Usuario estándar</option>    
            </select> 
        </label>
        <br/>
        <button onClick={create} type="submit">Crear</button> 
        <button onClick={edit} type="submit">Editar</button> 
        <button onClick={erase} type="submit">Eliminar</button> 
        </form>
      <section> 
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
