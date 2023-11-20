import { useEffect, useState } from "react";
import "./Home.css";
import Brands from "../Brands/Brands";
import ItemList from "../ItemList/ItemList";
import { Link } from "react-router-dom";
import { db } from "../../services/config";
import { collection, getDocs, query, where } from "firebase/firestore";

const Home = () => {
  const productos = [
    {
      id: "1",
      nombre: "Ryzen 5 5600x",
      stock: 100,
      precio: "$135000",
      img: "../Images/ryzen5.png",
      idCat: "1",
      detalles:
        "Microprocesador Ryzen 5 5600X 4.6GHz. Juega con lo mejor. Seis núcleos increíbles para quienes simplemente desean jugar.",
    },
    {
      id: "2",
      nombre: "Ryzen 3 3200G",
      stock: 100,
      precio: "$93400",
      img: "../Images/ryzen3.png",
      idCat: "1",
      detalles:
        "En este producto, encontrarás los núcleos, que son los encargados de ejecutar las instrucciones y actividades que le asignás a tu dispositivo. Estos tienen relación directa con dos elementos: los hilos y el modelo. Por lo tanto, a la hora de elegir un procesador, es importante que valores los tres en su conjunto.",
    },
    {
      id: "3",
      nombre: "Ryzen 7 5700X",
      stock: 100,
      precio: "$295400",
      img: "../Images/ryzen7.png",
      idCat: "1",
      detalles:
        "Es ideal para jugadores y creadores de contenido que requieran un instrumento de gran ejecución. Memoria caché de 32 MB, rápida y volátil. Procesador gráfico Requiere tarjeta de video. Soporta memoria RAM DDR4. Cuenta con 16 hilos que favorecen la ejecución de múltiples programas a la vez.",
    },
    {
      id: "4",
      nombre: "Ryzen 9 7900X",
      stock: 100,
      precio: "$395400",
      img: "../Images/ryzen9.png",
      idCat: "1",
      detalles:
        "El CPU AMD Ryzen 9 7900X es un potente procesador diseñado por AMD.Con una frecuencia base de 4,7 GHz y una frecuencia turbo de hasta 5,6 GHz, este procesador de 12 núcleos ofrece un rendimiento excepcional para tareas intensivas en recursos.",
    },
    {
      id: "5",
      nombre: "HyperX Cloud Flight Black",
      stock: 100,
      precio: 81000,
      img: "../Images/auriculares.png",
      idCat: "2",
      detalles:
        "HyperX Cloud Flight S le brinda 30 increíbles horas[1] de juego con total libertad y sin cables. Son los primeros auriculares gaming con soporte de carga inalámbrica Qi[4], lo que le brinda la comodidad tanto de la carga como de la conectividad inalámbrica a 2,4 GHz del audio.",
    },
    {
      id: "6",
      nombre: "Redragon Dragonborn K630",
      stock: 100,
      precio: 81000,
      img: "../Images/teclado.png",
      idCat: "2",
      detalles:
        "El Dragonborn es un teclado mecánico 60% compacto, robusto y súper transportable, con prestacionesóptimas para el juego competitivo de alto nivel: switches Redragon Brown, tecla Fn, bloqueo de tecla de Windows,cable desmontable y la mejor calidad de construcción.",
    },
    {
      id: "7",
      nombre: "Mouse Logitech G203",
      stock: 100,
      precio: "$28000",
      img: "../Images/mouse.png",
      idCat: "2",
      detalles:
        "Aprovecha al máximo tu tiempo de juego con el G203, un mouse para juegos disponible en una variedad de vibrantes colores. Con la tecnología LIGHTSYNC, un sensor para juegos y un diseño clásico de 6 botones, animarás tu acción y tu espacio.",
    },
    {
      id: "8",
      nombre: "Mouse Logitech G705",
      stock: 100,
      precio: "$50000",
      img: "../Images/mouse2.png",
      idCat: "2",
      detalles:
        "De The Aurora Collection, el mouse inalámbrico G705 para juegos tiene una forma pensada para el confort y el control, con un diseño también apto para manos pequeñas. Con tecnología inalámbrica LIGHTSPEED para juegos, RGB LIGHTSYNC y tecnología avanzada para juegos.",
    },
  ];


  


  return (
    <>
      <section className="home">
        <div className="home__texts">
          <p>
            Bienvenido a <span>CoderGamer</span>
          </p>
        </div>
      </section>
      <Brands />

      <section className="home__productos">
        <div className="home__productos__text">
          <p>
            Nuestros <span>productos</span>
          </p>
        </div>
        <div className="productoscard__contenedor">
          {productos.map((producto) => (
            <div key={producto.id} className="producto__card">
             
                <img src={producto.img} alt={producto.nombre} />
                <h3>{producto.nombre}</h3>
                <p>Precio: <span>{producto.precio}</span></p>
                <p>Stock: {producto.stock}</p>
                <Link to={`/item/${producto.id}`}><p className="cardProducto__detalle">Ver Detalles </p></Link>
              </div>
           
          ))}


    
       
      
        </div>
      </section>
    </>
  );
};

export default Home;
