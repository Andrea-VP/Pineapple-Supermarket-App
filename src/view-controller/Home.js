//import logo from '../logo.svg';
import '../App.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function Home() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Pineapple Supermarket</h1>
      </header>
      <table class="table table-borderless">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
    </tr>
  </tbody>
</table>
        <div>
          <h2>Web Devs' Rockstars</h2>
          <h3>Integrantes:</h3>
          <div className="flex-container">
            <div>1
            
            </div>
            <div>2</div>
          </div>
          <div className="flex-container2">
            <div>3</div>
            <div>4</div>
          </div>
          <div className="flex-container3">
            <div>5</div>
          </div>

          <table className="borderless">
            <tbody>
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
            </tbody>
          </table>
          <h3>URL de Github:</h3>
          <h3><a href="">link</a></h3>
        </div>
      
      <Footer/>      
    </div>
  );
}
export default Home;
