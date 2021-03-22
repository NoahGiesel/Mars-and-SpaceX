import React, { useState, useEffect } from "react";
import "./SpaceXdata.css";

function SpaceXdata() {
  const [apod, setApod] = useState({
    author: "",
    date: "",
    explanation: "",
    img_url: "",
    title: "",
  });
  const [apiData, setApiData] = useState(
    {
      name: "",
      date_local: "",
      patch_small: "",
      reddit: "",
      details: "",
      article: "",
      flight: "",
      reused: "",
      landing_attempt: "",
      landing_success: "",
      landpad: "", // this could be extended by https://api.spacexdata.com/v4/landpads/:id
    },
    ""
  );

  useEffect(() => {
    getSpaceX();
    getApod();
    getNasaGov();
  }, []);

  const getSpaceX = async () => {
    const api = await fetch("https://api.spacexdata.com/v4/launches/latest");
    const data = api.json();
    data
      .then((e) => {
        console.log(e);
        setApiData({
          name: e.name,
        });
      })
      .catch((e) => console.log(e));
  };

  const getApod = async () => {
    const api = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_NASA_GOV}`
    );
    const data = api.json();
    data
      .then((e) => {
        console.log(e);
        setApod({
          author: e.copyright,
          date: e.date,
          explanation: e.explanation,
          img_url: e.hdurl,
          Title: e.title,
        });
        console.log("apod ", apod);
      })
      .catch((e) => console.log(e));
  };

  const getNasaGov = async () => {
    const api = await fetch("https://api.spacexdata.com/v4/launches/latest");
    const data = api.json();
    data
      .then((e) => {
        console.log(e);
        setApiData({
          name: e.name,
        });
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="Nasa-spaceX">
      <h2>
        Latest of <span className="nasa">NASA</span> and{" "}
        <span className="spacex">SPACEX</span>
      </h2>
      <div className="container">
        <div className="first-section">
          <img src={apiData.img_url} alt="apod" />
        </div>
        <div className="second-section">
          <div className="informations">
            <img src={apiData.img_url} alt="apod" />
            <p>
              this is the text for the image above that now is just here as a
              placeholder
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpaceXdata;
