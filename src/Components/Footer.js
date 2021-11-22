import React from 'react';
import './Footer.css';
/**/

const Footer = () => {
  return (
    <footer>
        <div className="container_footer">
            <div className="footer__logo"></div>
            <div className="footer__link1"><a></a></div>
            <div className="footer__link2"><a></a></div>
            <div className="footer__link3"><a></a></div>
            <div className="footer__social">
                <a href=""><i class="fab fa-github"></i></a>
                <a href=""><i class="fab fa-linkedin"></i></a>
                <a></a>
            </div>
            <div className="footer__copyright">
                <p> © 2021 Copyright, All rights reserved</p>
            </div>
          </div>     
    </footer>
  );
};

export default Footer;