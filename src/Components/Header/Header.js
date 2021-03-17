import React from 'react'

import  "./Header.css"
import logo from "../../img/logo.png"


function Header() {
    return (
        <div className="header">
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
