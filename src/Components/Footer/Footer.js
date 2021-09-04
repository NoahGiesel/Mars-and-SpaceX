import React from "react";

import "./Footer.css";
import mars_world from "../../img/mars_world.jpg";

const Footer = () => {
  return (
    <div className="footer">
      <img alt="mars" src={mars_world} />
      <div className="grid">
        <div className="text">
          <div className="container">
            <h4>Footer</h4>
            <p>about</p>
            <p>about</p>
            <p>about</p>
            <p>about</p>
          </div>
          <div className="container">
            <h4>Footer</h4>
            <p>about</p>
            <p>about</p>
            <p>about</p>
            <p>about</p>
          </div>
          <div className="container">
            <h4>Footer</h4>
            <p>Footer</p>
            <p>Footer</p>
            <p>Footer</p>
            <p>Footer</p>
          </div>
          <div className="container">
            <h4>Footer</h4>
            <p>about</p>
            <p>about</p>
            <p>about</p>
            <p>about</p>
          </div>
        </div>
        <div className="informations">
          <a href="#0">PRIVACY</a>
          <a href="#0">
            <h1>MARS</h1>
          </a>
          <a href="#0s">TERMS</a>
        </div>
        <p className="year">2021</p>
      </div>
    </div>
  );
};

export default Footer;
