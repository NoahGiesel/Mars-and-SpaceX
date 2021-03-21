import React, { useState, useEffect } from "react";
import "./SpaceXdata.css";
function SpaceXdata() {
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
    getApiData();
  }, []);

  const getApiData = async () => {
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
    <div className="spaceX">
      <h2> Latest SpaceX landing </h2>
      <div className="container">
        <img src="" alt="lastlanding" />
        <div className="informations">
          <h3>Hello</h3>
          <h3>Hello</h3>
          <h3>Hello</h3>
          <h3>Hello</h3>
          <h3>Hello</h3>
        </div>
      </div>
    </div>
  );
}

export default SpaceXdata;
