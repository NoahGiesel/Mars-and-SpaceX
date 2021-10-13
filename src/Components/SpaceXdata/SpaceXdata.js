import React, { useState, useEffect } from "react";
import "./SpaceXdata.css";
import Iframe from 'react-iframe'

function SpaceXdata() {
  // this component fetches 2 api calls inside 2 useState:
  // apod ( nasa picture of the day )
  // spaceX ( spaceX latest about launches )

  const [apod, setApod] = useState({
    author: "",
    date: "",
    explanation: "",
    img_url: "",
    title: "",
  });
 

  useEffect(() => {
    getApod();
  }, []);

 
  // function for apod data retrival
  const getApod = async () => {
    const api = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_NASA_GOV}`
    );
    const data = api.json();
    data
      .then((e) => {
        const obj = {
          author: e.copyright,
          date: e.date,
          explanation: e.explanation,
          img_url: e.url,
          Title: e.title,
        };

        setApod(obj);
        console.log(obj)
      })
      .catch((e) => console.log(e));
  };
 
  
  
  return (
    <div className="Nasa-spaceX">
      <h2>
        Latest of <span className="nasa">NASA</span> and{" "}
        <span className="spacex">SPACEX</span>
      </h2>
      <div className="about-api">
        <p>
          The following informations are gardered from nasa's public api (
          "APOD", "Astronomy Picture Of the Day" ) and from SpaceX latest news
          about the last cargo or spaceship launch!
        </p>
      </div>
      <div className="container height">
        <div className="first-section">
          <div className="video-responsive">
            {(apod.img_url.length > 1) ? 
            <div>
              <img src={apod.img_url} alt="apod" />
              {(apod.img_url.includes("youtube"))?  
              <Iframe 
                  width="850"
                  height="480"
                  src={`https://www.youtube.com/embed/${apod.img_url}`}
                  frameBorder="0"
                  allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={apod.author}
                />:null }
              </div> 
              : null}
             
            </div>
        </div>
        <div className="second-section">
          <div>
            <p className="title"> {apod.Title}</p>
             { (apod.author === undefined ) ? null :<p> Author: {apod.author}</p> } 
            <p>{apod.date}</p>
          </div>
          <div className="informations">
            <p>{apod.explanation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpaceXdata;
