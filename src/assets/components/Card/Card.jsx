import React from 'react'
import './Card.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Card = () => {
  return (
    <div className='card'>
        <img src="../../../public/Images/ryzen5.png" alt="" />
        <p>Ryzen 5 5660x</p>
        <span>$130000</span>
        <div className='card__cart'>
        <a href="">Agregar carrito </a>
        <ShoppingCartIcon fontSize="large" className='cart__icon'/>
        </div>
       
    </div>
  )
}

export default Card