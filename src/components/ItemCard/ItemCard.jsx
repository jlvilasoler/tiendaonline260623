import React from "react";
import Clicker from "../ItemListContainer/Clicker";
import "/src/components/ItemCard/ItemCard.scss"


const ItemCard = ({ foto , articulo , descripcion , marca , precio}) => {
  return (
    <div className="col-2 m-3">
      <img src={foto} alt={articulo} />
      <h2>{articulo}</h2>
      <h3>{descripcion}</h3>
      <p>{marca}</p>
      <p>${precio}</p>
      <Clicker />
    </div>
  );
};

export default ItemCard;
