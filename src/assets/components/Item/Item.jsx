import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, nombre, precio, img, stock }) => {
  return (
    <div className="cardProducto">
      <div className="cardProducto__contenedorimg">
        <img src={img} alt={nombre} />
      </div>
      <p className="cardProducto__name">{nombre}</p>
      <span>${precio}</span>
      <p className="cardProducto__stock">Stock :{stock}</p>
      <Link to={`/item/${id}`}><p className="cardProducto__detalle">Ver Detalles </p></Link>
    </div>
  );
};

export default Item;
