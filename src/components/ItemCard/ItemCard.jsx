import React from "react";
import "/src/components/ItemCard/ItemCard.scss"
import { Link } from "react-router-dom";

const ItemCard = ({ id, foto , articulo , descripcion , marca , precio}) => {
  return (
    <div className="col-2 m-3">
      <img src={foto} alt={articulo} />
      <h2>{articulo}</h2>
      <h3>{descripcion}</h3>
      <p>{marca}</p>
      <p>${precio}</p>
      <Link className="boton-ver" to={`/detail/${id}`}>Ver más</Link>
    </div>
  );
};

export default ItemCard;
