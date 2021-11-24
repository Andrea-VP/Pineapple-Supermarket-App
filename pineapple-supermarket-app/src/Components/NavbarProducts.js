import React from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";
/**/

const NavbarProducts = () => {
  return (
    <div className ="Navbar">
        <div className="leftSide">
            <a>PINEAPPLE SUPERMARKET</a>
        </div>
        <div id="Links" className="rightSide">
            <Link to="/home">Home</Link>
            <Link to="/home">Logout</Link>
        </div>
    </div>
  );
};

export default NavbarProducts;