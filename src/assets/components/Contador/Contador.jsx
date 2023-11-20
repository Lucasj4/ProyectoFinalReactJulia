import { useState} from "react";


const Contador = ({ inicial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial);


    const sumarContador = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const restarContador = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        <>
            <div className="contador__container">
            <div className="contador">
                <button onClick={restarContador}> - </button>
                <strong> {contador} </strong>
                <button onClick={sumarContador}> + </button>
            </div>
            <button className='contador__agregarCarrito'onClick={()=> funcionAgregar(contador)}> <p>Agregar al Carrito </p></button>
            </div>
           
        </>

    )
}

export default Contador