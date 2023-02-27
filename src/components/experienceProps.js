import React, { useEffect, useState } from "react";

function Card(props) {
  const [disponibilidad, setDisponibilidad] = useState("");
  const disponible = props.availability;

  function load() {
    if (disponible === 1) {
      return setDisponibilidad("Available");
    } else {
      return setDisponibilidad("Occupied");
    }
  }
  useEffect(() => {
    load();
  }, []);

  return (
    <div className="card">
      <button onLoad={load} className="btnHouses">
        {disponibilidad}
      </button>
      <img className="airbnbHouses" src={props.imagenHouse}></img>

      <div>
        <img className="redStar" src={props.redStar}></img>
        <span> </span>
        <span className="span1">{props.span1}</span>

        <span className="span2">{props.span2}</span>
        <span> </span>
        <span className="span3">{props.span3}</span>
        <p className="parr2">{props.title1}</p>
        <p className="parr3">{props.price}</p>
      </div>
    </div>
  );
}

export default Card;
