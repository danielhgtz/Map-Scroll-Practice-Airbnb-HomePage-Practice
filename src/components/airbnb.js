import React from "react";
import { useState } from "react";
import NavBar from "./navBar";
import Experiences from "./experiences";

function AirbnbHome() {
  // const [prueba, setPrueba] = useState();

  return (
    <div>
      <NavBar />

      <img className="groupPhotosHome" src={"./Photo-Group.png"}></img>
      <h1 className="title1">Your Destination</h1>
      <p className="parr1">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
      <section className="position">
        <Experiences />
      </section>
      <p className="firm">
        Scroll & Map Practice - Daniel Homero Gutiérrez Ureña
      </p>
    </div>
  );
}

export default AirbnbHome;
