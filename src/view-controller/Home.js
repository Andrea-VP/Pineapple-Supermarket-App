//import logo from '../logo.svg';
import '../App.css';
import Navbar from '../Components/Navbar';

function Home() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Pineapple Supermarket</h1>
      </header>
      <body>
        <div>
          <h2>Web Devs' Rockstars</h2>
          <h3>Integrantes:</h3>
          <table>
            <tr>
              <td><img alt="Erendi"></img></td>
              <td><img alt="Mel"></img></td>
            </tr>
            <tr>
              <th>García Vélez Iraís Eréndira</th>
              <th>Roda López Melanie Elena</th>
            </tr>
            <tr>
              <td><img alt="Pati"></img></td>
              <td><img alt="Isa"></img></td>
            </tr>
            <tr>
              <th>Sanchez Correa Carla Patricia</th>
              <th>Tello Huaripata Keyko Isabel</th>
            </tr>
            <tr>
              <td colSpan="2"><img alt="Andre"></img></td>
            </tr>
            <tr>
              <th colSpan="2">Vargas Pérez Andrea</th>
            </tr>
          </table>
          <h3>URL de Github:</h3>
          <h3><a href="">link</a></h3>
        </div>
      </body>      
    </div>
  );
}

export default Home;
