import { Card } from "./Card";
import "./ListCardsStyles.css";
import { useState } from "react";

export const ListCards = () => {
  let [data, setData] =useState([]); 
  
  let url = "http://api.sheety.co/f3d41739f79e26e0bcca4c9d027df686/sivigilaRutinaria/rutina2019"; 
  fetch(url)
  .then((response)=>response.json())
  .then(json =>{
    setData(json.rutina2019)
  })
  console.log(data)


    {data.map((item)=>{return <p key={item.id}>{item.nomEve}</p>})
    }
  return (
    <section className="listCards">
      <h2>Consulta Enfermedades por Región</h2>
      <h3>Caribe</h3>
      <Card />
      <h3>Pacífico</h3>
      <Card />
      <h3>Orinoquía</h3>

      <h3>Amazonía</h3>


      <h3>Andina</h3>


      <h3>Insular</h3>

      
    </section>
  );
};
