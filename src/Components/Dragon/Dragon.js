import React, {useEffect} from 'react'

import "./Dragon.css"
import total_shuttle from "../../img/dragon_trunk_total.png" 
import video from "../../img/DragonTrunk_Animation_Render_Desktop.mp4" 



const  Dragon = () =>  {
    
     
    


    return ( 
        <div className="dragon">
            <h1>Sending Humans and Cargo into <span>Space</span> 🚀 </h1> 
            <div className="upper"> 
                 
                <div className="dragon-shuttle"> 
            
                    <div className="container">
                        <h1>DRAGON</h1>
                        <p>SENDING HUMANS AND CARGO INTO SPACE</p>

                        <div className="overview">
                            <p className="title">Height</p>
                            <div className="size">
                                <p >8.1 m  </p> 
                                <p className="us">/26.7 ft  </p> 
                            </div>
                        </div> 
                        <div className="overview">
                            <p className="title">Diameter</p>
                            <div className="size">
                                <p >4 m  </p> 
                                <p className="us">/13 ft  </p> 
                            </div>
                        </div> 
                        <div className="overview">
                            <p className="title">CAPSULE VOLUME</p>
                            <div className="size">
                                <p >9.3 m³ </p> 
                                <p className="us">/328 ft³  </p> 
                            </div>
                        </div> 
                        <div className="overview">
                            <p className="title">TRUNK VOLUME</p>
                            <div className="size">
                                <p >37 m³ </p> 
                                <p className="us"> /1300 ft³ </p> 
                            </div>
                        </div> 
                        <div className="overview">
                            <p className="title">LAUNCH PAYLOAD MASS</p>
                            <div className="size">
                                <p >6,000 kg  </p> 
                                <p className="us">/13,228 lbs</p> 
                            </div>
                        </div> 
                        <div className="overview">
                            <p className="title">RETURN PAYLOAD MASS</p>
                            <div className="size">
                                <p >3,000 kg </p> 
                                <p className="us">/6,614 lbs </p> 
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
                    
    )
}

export default Dragon
