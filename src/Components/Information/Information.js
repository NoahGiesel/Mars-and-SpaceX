import React,{useEffect} from 'react'


import './Information.css';
import planet from "../../img/mars-gif.gif"

function Information() {


    useEffect(() => {
        var planet = document.getElementById("planet");
        planet.playbackRate = 0.1;
      }); 


    return (
        <div className="info">
           <h1>The <span>Red</span> Planet</h1> 
           <p className="introduction">In 1994, NASA announced the start of the Mars Exploration Program (MEP), initially called the Mars Surveyor Program. NASA assigned the lead role for MEP implementation to the Jet Propulsion Laboratory (JPL). MEP explores Mars on behalf of NASA’s Science Mission Directorate (SMD). MEP currently operates rovers and orbiters on and around Mars, contributes to Mars missions conducted by national and international partners, and is formulating and developing future rover and orbiter missions. Scientific data and associated information for all MEP missions are archived in the NASA Planetary Data System. Organized programmatically, MEP missions mutually support each other.</p>
            <div className="container">
                <img src={planet} id="planet" alt="planet"/> 
                <div className="text-section">
                    <h2><span>Mars</span> Exploration Program</h2>
                    <p>The goal of the Mars Exploration Program is to explore Mars and to provide a continuous flow of scientific information and discovery through a carefully selected series of robotic orbiters, landers and mobile laboratories interconnected by a high-bandwidth Mars/Earth communications network.</p>
                    <p>There are several strategic, practical and scientific reasons for humans to explore Mars. Among them we know that Mars is the most accessible place in the solar system. Additionally, exploring Mars provides the opportunity to possibly answer origin and evolution of life questions, and could someday be a destination for survival of humankind. In the strategic sense, exploring Mars demonstrates our political and economic leadership as a nation, improves the quality of life on Earth, helps us learn about our home planet, and expands US leadership in the peaceful, international exploration of space.</p>
                     
                </div>
            </div>
        </div>
    )
}

export default Information
