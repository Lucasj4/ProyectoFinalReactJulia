import { useState, createContext } from "react";

export const CarritoContext = createContext({
  carrito: [],
  total: 0,
  cantidadTotal: 0,
});

const CarritoProvider = ({children}) => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [cantidadTotal, setCantidadTotal] = useState(0);
  

  const agregarCarrito = ( item, cantidad ) => {
    const productoExistente = carrito.find(
      (producto) => producto.item.id === item.id
    );

    if (!productoExistente) {
      setCarrito((prev) => [...prev, { item, cantidad }]);
      setCantidadTotal((prev) => prev + cantidad);
      setTotal( prev => prev + (item.precio * cantidad));
    } else {
      const carritoActualizado = carrito.map((producto) => {
        if (producto.item.id === item.id) {
          return { ...producto, cantidad: producto.cantidad + cantidad };
        } else {
          return producto;
        }
      });
      setCarrito(carritoActualizado);
      setCantidadTotal((prev) => prev + cantidad);
      setTotal((prev) => prev + item.precio * cantidad);
    }
  };

  const eliminarProducto = (id) => {
    const productoEliminado = carrito.find((prod) => prod.item.id === id);
    const carritoActualizado = carrito.filter((prod) => prod.item.id !== id);

    setCarrito(carritoActualizado);
    setCantidadTotal((prev) => prev - productoEliminado.cantidad);
    setTotal(
      (prev) =>
        prev - productoEliminado.item.precio * productoEliminado.cantidad
    );
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    setCantidadTotal(0);
    setTotal(0);
  };

  return (
    <>
      <CarritoContext.Provider
        value={{
          carrito,
          total,
          cantidadTotal,
          agregarCarrito,
          eliminarProducto,
          vaciarCarrito,
        }}
      >
        {children}
      </CarritoContext.Provider>
    </>
  );
};

export default CarritoProvider;
