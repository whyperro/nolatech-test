import React from "react";
import "./footer.css";
import icongrab from "../../../assets/icongrab.png";
const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna
      </p>
      <img src={icongrab} alt="Logo" className="footer-logo" />
      <p className="footer-copyright">
        All rights reserved to Lorem Ipsum© 2022
      </p>
    </footer>
  );
};

export default Footer;
