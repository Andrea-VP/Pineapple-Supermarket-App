//import logo from '../logo.svg';
import '../App.css';
import {send} from '../functions/functions'
import React, {useState, useEffect} from "react";


function LogIn() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch("/users/").then(res=>{
      if(res.ok){
        return res.json()
      }
    }).then(jsonRes=>setUsers(jsonRes.usersList))
  })
  return (
    <div className="App">
      <header className="App-header">
       <h1>Iniciar Sesión</h1>
        <form>
        <label>
          Nombre:
          <input required type="text" name="name" id="name"/> 
        </label>
        <br/>
        <label> 
          Contraseña:
          <input required type="password" name="password" id="password"/> 
        </label>
        <br/>
        <button onClick={send} type="submit">Ingresar</button>
        <button ></button> 
        </form>
        <div>
          {users.map(user=><li>{user}</li>)}
        </div>
      </header>
    </div>
  );
}

export default LogIn;
