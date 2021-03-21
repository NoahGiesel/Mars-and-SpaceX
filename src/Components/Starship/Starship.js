import React from "react";

import "./Starship.css";

const Starship = () => {
  return (
    <div className="Starship">
      <h1>
        How to reach <span>MARS</span>{" "}
      </h1>
      <div className="upper">
        <div className="Starship-shuttle">
          <div className="container">
            <h1>Starship</h1>
            <p>
              {" "}
              <span>Starship</span> will be the world’s most powerful launch
              vehicle ever developed, with the ability to carry in excess of 100
              metric tonnes to Earth orbit. Drawing on an extensive history of
              launch vehicle and engine development programs, SpaceX has been
              rapidly iterating on the design of Starship with orbital-flight
              targeted for 2020.
            </p>
            <p>
              SpaceX’s Starship <span> Spacecraft</span> and{" "}
              <span> Super Heavy rocket</span> (collectively referred to as
              Starship) represent a fully reusable transportation system
              designed to carry both crew and cargo to Earth orbit, the Moon,
              Mars and beyond. Starship will be the world’s most powerful launch
              vehicle ever developed, with the ability to carry in excess of 100
              metric tonnes to Earth orbit.
            </p>
            <p>
              <span>SUPER HEAVY</span>, or booster, of our next-generation
              launch system has a gross liftoff mass of over 3 million kg and
              uses sub-cooled liquid methane and liquid oxygen (CH4/LOX)
              propellants. The booster will return to land at the launch site on
              its 6 legs.
            </p>
            <p>
              The Starship <span>PAYLOAD</span> fairing is 9 m in diameter and
              18 m high, resulting in the largest usable payload volume of any
              current or in development launcher. This payload volume can be
              configured for both crew and cargo.
            </p>
            <p>
              <span>
                Starship will enter Mars’ atmosphere at 7.5 kilometers per
                second
              </span>{" "}
              and decelerate aerodynamically. The vehicle’s heat shield is
              designed to withstand multiple entries, but given that the vehicle
              is coming into Mars' atmosphere so hot, we still expect to see
              some ablation of the heat shield (similar to wear and tear on a
              brake pad).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Starship;
