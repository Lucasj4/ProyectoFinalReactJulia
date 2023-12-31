import { useState, useEffect, useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import "./Checkout.css";

const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");

  const { carrito, vaciarCarrito, total, totalCantidad } =
    useContext(CarritoContext);

  const manejadorFormulario = (event) => {
    event.preventDefault();

    //Verificamos que los campos esten completos:
    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Por favor completa todos los campos o moriras!!");
      return;
    }

    //Validamos que los campos del email coincidan:

    if (email !== emailConfirmacion) {
      setError("Los campos del email no coinciden, malditooo insecto!!");
      return;
    }

    //1) Creamos un objeto con todos los datos de la orden de compra:

    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
        
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
    };

    //////////////////////////////////////////////////////

    //Vamos a modificar el código para que ejecute varias promesas en paralelo, por un lado que actualice el stock de productos y por el otro lado que genere una orden de compra.
    //Vamos a usar para lograr esto: Promise.All

    Promise.all(
      orden.items.map(async (productoOrden) => {
        const productoRef = doc(db, "productoscodeer", productoOrden.id);
        //Por cada producto en la colleción "productos" obtengo una referencia, y a partir de esa referencia obtengo el DOC.
        const productoDoc = await getDoc(productoRef);
        const stockActual = productoDoc.data().stock;
        //Data es un método que me permite acceder a la información del documento.

        await updateDoc(productoRef, {
          stock: stockActual - productoOrden.cantidad,
        });
        //Modifico el stock y subo la información actualizada.
      })
    )
      .then(() => {
        //Guardamos la orden en la base de datos:
        addDoc(collection(db, "ordenes"), orden)
          .then((docRef) => {
            setOrdenId(docRef.id);
            vaciarCarrito();
          })
          .catch((error) => {
            console.log("Error al crear la orden", error);
            setError("Se produjo un error al crear la orden, vamos a morir!!!");
          });
      })
      .catch((error) => {
        console.log("No se pudo actualiza rel stock",  error.message);
        console.log(orden);
        setError(
          "No se puede actualizar el stock"
        );
      });
  };

  return (
    <div className="form__contenedor">
      <h2 className="form__title">Checkout</h2>

      {carrito.map((producto) => (
        <div className="form__productos" key={producto.item.id}>
          <p>
            {" "}
            {producto.item.nombre} x {producto.cantidad}{" "}
          </p>
          <p>{producto.item.precio}</p>
        </div>
      ))}
      <form className="form" onSubmit={manejadorFormulario}>
        <div className="form__item">
          <label htmlFor="">Nombre</label>
          <input type="text" onChange={(e) => setNombre(e.target.value)} />
        </div>

        <div className="form__item">
          <label htmlFor="">Apellido</label>
          <input type="text" onChange={(e) => setApellido(e.target.value)} />
        </div>

        <div className="form__item">
          <label htmlFor="">Telefono</label>
          <input type="text" onChange={(e) => setTelefono(e.target.value)} />
        </div>

        <div className="form__item">
          <label htmlFor="">Email</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="form__item">
          <label htmlFor="">Email Confirmación</label>
          <input
            type="email"
            onChange={(e) => setEmailConfirmacion(e.target.value)}
          />
        </div>
        <button type="submit" className="form__button">
          {" "}
          Confirmar Compra{" "}
        </button>
      </form>
      {error && <p style={{ color: "red" }}> {error} </p>}

      {ordenId && (
        <strong className="compra">
          ¡Gracias por tu compra! Tu número de orden es: {ordenId}{" "}
        </strong>
      )}
    </div>
  );
};

export default Checkout;
