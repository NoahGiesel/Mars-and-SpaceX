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
            <h4>MARS</h4>
            <p>
              We connect planets <br /> to humans
            </p>
          </div>
          <div className="container">
            <h4>Explore</h4>
            <p>Home</p>
            <p>Missions</p>
            <p>Landing</p>
            <p>Future</p>
          </div>
          <div className="container">
            <h4>Follow</h4>
            <p>Instagram</p>
            <p>YouTube</p>
            <p>Twitter</p>
            <p>Blog</p>
          </div>
          <div className="container">
            <h4>Legal</h4>
            <p>Terms</p>
            <p>Privacy</p>
            <p>Cookies</p>
            <p>Other</p>
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
