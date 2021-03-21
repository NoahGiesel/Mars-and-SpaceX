import React from "react";

import "./App.css";
import Header from "./Components/Header/Header";
import Landing from "./Components/Landing/Landing";
import Information from "./Components/Information/Information";
import Dragon from "./Components/Dragon/Dragon";
import Starship from "./Components/Starship/Starship";
import SpaceXdata from "./Components/SpaceXdata/SpaceXdata";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Information />
      <Dragon />
      <Starship />
      <SpaceXdata />
      <Footer />
    </div>
  );
}

export default App;
