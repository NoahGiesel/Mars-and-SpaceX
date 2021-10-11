import React from "react";

import "./Footer.css";
import mars_world from "../../img/mars_world.jpg";
import { IoLogoInstagram,IoLogoYoutube,IoPencilSharp,IoLogoTwitter } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="footer">
      <img alt="mars" src={mars_world} />
      <div className="grid">
        <div className="text">
          <div className="container">
            <h4 className="logo">MARS</h4> 
          </div>
          <div className="container">
            <p>Home</p>
            <p>Missions</p>
            <p>Landing</p>
            <p>Future</p>
          </div>
          <div className="container">
            <p><IoLogoInstagram /> Instagram</p>
            <p><IoLogoYoutube /> YouTube</p>
            <p><IoLogoTwitter />  Twitter</p>
            <p><IoPencilSharp />  Blog</p>
          </div>
          <div className="container">
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
