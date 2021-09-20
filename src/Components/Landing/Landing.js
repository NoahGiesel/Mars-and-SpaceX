import React, { useEffect } from "react";

import "./Landing.css";
import background from "../../img/background.png";
import quattro from "../../img/4.png";
import tre from "../../img/3.png";
import due from "../../img/2.png";
import uno from "../../img/1.png";

function Landing() {
  useEffect(() => {
    let background = document.getElementById("background");
    let quattro = document.getElementById("quattro");
    let tre = document.getElementById("tre");
    let text = document.getElementById("text");
    let due = document.getElementById("due");
    let uno = document.getElementById("uno");

    window.addEventListener("scroll", function () {
      var value = window.scrollY;

      background.style.top = value * -0.5 + "px";
      quattro.style.top = value * -0.5 + "px";
      tre.style.top = value * -0.4 + "px";
      text.style.top = value * -0.8 + "px";
      due.style.top = value * -0.3 + "px";
      uno.style.top = value * -0.2 + "px";
    });
  });

  return (
    <div className="landing">
      <img src={background} id="background" alt="background" />
      <img src={quattro} id="quattro" alt="quattro" />
      <img src={tre} id="tre" alt="tre" />
      <h2 className="text" id="text">
        MAR<span className="zindex">S</span>
      </h2>
      <img src={due} id="due" alt="due" />
      <img src={uno} id="uno" alt="uno" />
    </div>
  );
}

export default Landing;
