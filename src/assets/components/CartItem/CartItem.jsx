import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import DeleteIcon from '@mui/icons-material/Delete';

const CartItem = ({item, cantidad}) => {
  const { eliminarProducto } = useContext(CarritoContext);
  return (
    <>
      <tr>
        <td>{item.nombre}</td>
        <td>{item.precio}</td>
        <td>{cantidad}</td>
        <td>
          <button onClick={() => eliminarProducto(item.id)}><DeleteIcon className="deleteIcon"/></button>
        </td>
      </tr>
    </>
  );
};

export default CartItem;
