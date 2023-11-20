import React from "react";
import { useContext, useState } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { Link } from "react-router-dom";
import Contador from "../Contador/Contador";
import "./ItemDetail.css";
const ItemDetail = ({ id, nombre, precio, img, stock, detalles }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarCarrito } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio };
    agregarCarrito(item, cantidad);
  };
  return (
    <div className="cardProductoDetail">
      <div className="cardProductoDetail__imgcontenedor">
        <img src={img} alt={nombre} />
      </div>
      <div className="cardProductoDetail__info">
        <p className="cardProductoDetail__nombre">{nombre}</p>
        <span className="cardProductoDetail__precio">Precio: ${precio}</span>
        <div className="cardProductoDetail__contenedordetalles">
        <p className="cardProductoDetail__detalles">{detalles}</p>
        </div>
       
        {agregarCantidad > 0 ? (
           <>
           <Link to="/cart" className="cardProductoDetail__terminar">
             <p>Terminar Compra</p>
           </Link>
           <Link to="/" className="cardProductoDetail__seguir">
             <p>Seguir comprando</p>
           </Link>
         </>

        ) : (
          <Contador
            inicial={1}
            stock={stock}
            funcionAgregar={manejadorCantidad}
          />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
