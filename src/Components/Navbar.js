import React from 'react';
import './Navbar.css';
/*import Navbar from '../Components/Navbar';
<Navbar />*/

const Navbar = () => {
  return (
    <div className ="Navbar">
        <div className="leftSide">
            <a>PINEAPPLE SUPERMARKET</a>
        </div>
        <div className="rightSide">
            <a>Home</a>
            <a>Login</a>
        </div>
    </div>
  );
};

export default Navbar;
