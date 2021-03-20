import React, { useState, useEffect } from 'react'

import  "./Header.css"
import logo from "../../img/logo.png"


function Header() {

    const [header, setHeader] = useState("rgba(0,0,0,0)")

    const listenScrollEvent = (event) => {
        if (window.scrollY > 100  ) {
            setHeader( 'rgb(16, 2, 38)' )
        } else {
            setHeader( 'rgba(0,0,0,0)' )
        }
        if (window.scrollY > 1500  ) {
            setHeader( 'rgb(0, 0, 0)' )
        }  
      }
      
      useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
       
      }, []);

    return (
        <div className="header" style={{backgroundColor: header}}>
            <div className="container">
                <a href={""}>Home</a>
                <a href={""}>Missions</a> 
                <img src={logo} />
                <a href={""}>Landings</a>
                <a href={""}>Future</a>
            </div>
        </div>
    )
}

export default Header
