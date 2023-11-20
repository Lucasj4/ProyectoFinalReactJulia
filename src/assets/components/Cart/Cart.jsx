import React from "react";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

import "./Cart.css";
const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } =
    useContext(CarritoContext);

  if (cantidadTotal === 0) {
    return (
      <>
        <h2>No hay productos en el carrito.</h2>
        <Link to="/">Ver Productos</Link>
      </>
    );
  }

  return (
    <>
      <div className="carrito">
        <div className="carrito__contenedor">
          <table className="carrito__tabla">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {carrito.map((producto) => (
                <CartItem key={producto.id} {...producto} />
              ))}
            </tbody>
          </table>
          <div className="carrito__info">
            <h3>Total: ${total} </h3>
            <h3>Cantidad Total: {cantidadTotal} </h3>
            <button onClick={() => vaciarCarrito()}> Vaciar Carrito </button>
            <Link to="/checkout">Finalizar Compra</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
