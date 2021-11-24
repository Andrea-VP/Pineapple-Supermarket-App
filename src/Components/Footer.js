import React from 'react';
import './Footer.css';
/**/

const Footer = () => {
  return (
    <footer>
        <div class="container_footer">
            <div className="footer__logo">Pineapple Supermarket</div>
            <div className="footer__link1"><a></a></div>
            <div className="footer__link2"><a></a></div>
            <div className="footer__link3"><a></a></div>
            <div className="footer__social">
                <a href=""><i className="fab fa-github"></i></a>
                <a href=""><i className="fab fa-linkedin"></i></a>
                <a></a>
            </div>
            <div class="footer__copyright">
                © 2021 Copyright, All rights reserved
            </div>
          </div>     
    </footer>
  );
};

export default Footer;