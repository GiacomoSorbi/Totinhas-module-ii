import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="copyRight">2020 - All rights reserved &copy;</div>
      <div className="socialMedia">
        <a href="http://www.facebook.com" target="_blank">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="http://www.linkedin.com">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="http://www.twitter.com" target="_blank">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="mailto:sluisc01@mail.bbk.ac.uk?subject=your react project">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
