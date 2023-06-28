import React from "react";
import "/src/components/ItemCard/ItemCard.scss"
import { Link } from "react-router-dom";
import "../ItemListContainer/Clicker"


const ItemCard = ({ id, foto , articulo , descripcion , marca , precio}) => {
  return (
    <div className="col-2 m-4">
      <img src={foto} alt={articulo} />

      <h2>{articulo}</h2>
      <h3>{descripcion}</h3>
      <p>{marca}</p>
      <p className="precio">${precio}</p>


      <Link className="boton-ver" to={`/detail/${id}`}>Ver más</Link>

      </div>
  );
};

export default ItemCard;
