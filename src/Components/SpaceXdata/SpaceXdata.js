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
    getNasaGov();
    getApod();
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
        const obj = {
          author: e.copyright,
          date: e.date,
          explanation: e.explanation,
          img_url: e.hdurl,
          Title: e.title,
        };

        setApod(obj);
      })
      .catch((e) => console.log(e));
  };

  const getNasaGov = async () => {
    const api = await fetch("https://api.spacexdata.com/v4/launches/latest");
    const data = api.json();
    data
      .then((e) => {
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
      <div className="about-api">
        <p>
          The following informations are gardered from nasa's public api (
          "APOD", "Astronomy Picture Of the Day" ) and from SpaceX latest news
          about the last cargo or spaceship launch!
        </p>
      </div>
      <div className="container height">
        <div className="first-section">
          <img src={apod.img_url} alt="apod" />
        </div>
        <div className="second-section">
          <div>
            <p className="title"> {apod.Title}</p>
            <p>Author: {apod.author}</p>
            <p>Date: {apod.date}</p>
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
