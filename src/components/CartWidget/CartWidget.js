import carrito from './carrito.png'
import './cartwidget-styles.css'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

const CartWidget = () => {
  const { totalCartItem } = useContext(CartContext);

  return (
    <button>
      <img src={carrito} className='carrito' alt="carrito"/>
      <span>{totalCartItem()}</span>
    </button>
  )
}

export default CartWidget