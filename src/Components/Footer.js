import React from 'react';
import './Footer.css';
/**/

const Footer = () => {
  return (
    <footer>
        <div class="container_footer">
            <div class="footer__logo">Pineapple Supermarket</div>
            <div class="footer__link1"><a></a></div>
            <div class="footer__link2"><a></a></div>
            <div class="footer__link3"><a></a></div>
            <div class="footer__social">
                <a href=""><i class="fab fa-github"></i></a>
                <a href=""><i class="fab fa-linkedin"></i></a>
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