import React, { useState, useEffect } from "react";
import card1 from "./experiencesData";
import Card from "./experienceProps";

const house1 = "./houses/house1.jpg";
const house2 = "./houses/house2.jpg";
const house3 = "./houses/house3.jpg";
const house4 = "./houses/house4.jpg";

function Experiences() {
  /*
  useEffect(() => {
    const fetchData = async () => {
      const resultado = await fetch(
        `https://api.unsplash.com/photos/random?client_id=E6rIdVWaWWdzMfeehOSxO-5ft2TJPgK7gI-EXc4mkHU​`
      );
      const resultadoJSON = await resultado.json();

      setImagen(resultadoJSON);
      console.log(resultado);
    };
    fetchData();
  }, []);*/

  const cards = card1.map((e) => {
    return (
      <Card
        key={e.id}
        availability={e.availability}
        imagenHouse={e.imagenHouse}
        redStar={e.redStar}
        span1={e.span1}
        span2={e.span2}
        span3={e.span3}
        title1={e.title1}
        price={e.price}
      />
    );
  });
  return <section className="cards-list">{cards} </section>;
}
export default Experiences;
