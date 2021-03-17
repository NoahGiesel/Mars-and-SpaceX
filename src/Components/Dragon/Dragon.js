import React from 'react'

import "./Dragon.css"
import total_shuttle from "../../img/dragon_trunk_total.png" 
import video from "../../img/DragonTrunk_Animation_Render_Desktop.mp4" 
function Dragon() {
    return (
        <div className="dragon">
            <h1>Sending Humans and Cargo into <span>Space</span> 🚀 </h1>
            <div className="dragon-shuttle"> 
                <video   key={video} width="750" height="500" autoplay loop muted type="video/mp4">
                <source  src={video} type="video/mp4"/>

                </video>
            </div>
        </div>
    )
}

export default Dragon
