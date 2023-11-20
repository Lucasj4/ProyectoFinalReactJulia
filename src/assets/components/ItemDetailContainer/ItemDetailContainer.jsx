import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

import { db } from "../../services/config";
import { getDoc, doc } from 'firebase/firestore'
import "./ItemDetailContainer.css";
const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);

  const { idItem } = useParams();


  useEffect(() => {
    const nuevoDoc = doc(db, "productoscodeer", idItem);

    getDoc(nuevoDoc)
      .then(res => {
        const data = res.data();
        const nuevoProducto = { id: res.id, ...data }
        setProducto(nuevoProducto);
      })
      .catch(error => console.log(error))
  }, [idItem])
  
  

  return (
    <div className="itemdetail__container">
      <ItemDetail {...producto} />
    </div>
  );
};

export default ItemDetailContainer;