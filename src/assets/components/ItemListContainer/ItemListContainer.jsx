import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { getProductos, getProductosPorCategoria } from "../../../asynckmock";
import ItemList from "../ItemList/ItemList";
import { db } from "../../services/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import "./ItemListContainer.css";


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  // useEffect(() => {
  //   const funcionProductos = idCategoria
  //     ? getProductosPorCategoria
  //     : getProductos;

  //   funcionProductos(idCategoria).then((res) => setProductos(res));
  // }, [idCategoria]);

  useEffect(() => {
    const misProductos = idCategoria
      ? query(collection(db, "productoscodeer"), where("idCat", "==", idCategoria))
      : collection(db, "productoscodeer");

    getDocs(misProductos)
      .then((res) => {
        const nuevosProductos = res.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProductos(nuevosProductos);
      })
      .catch((error) => console.log(error));
  }, [idCategoria]);



  return (
    <>
      <div className="productos__contenedor">
        <ItemList productos={productos} />
       
      </div>
    </>
  );
};

export default ItemListContainer;
