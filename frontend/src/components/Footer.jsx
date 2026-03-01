import React from "react";
import "../styles/Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <span>© {new Date().getFullYear()} Phyxio Calculator. Todos los derechos reservados.</span>
      <span>Contacto: <a href="mailto:phyxio@phyxio.net">phyxio@phyxio.net</a> | <a href="mailto:soporte@phyxio.net">soporte@phyxio.net</a></span>
    </div>
  </footer>
);

export default Footer;
