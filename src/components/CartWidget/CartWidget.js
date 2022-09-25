import carrito from './carrito.png'
import './cartwidget-styles.css'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

const CartWidget = () => {
  const { totalCartItem } = useContext(CartContext);

  return (
    <div className='widget-carrito'>
      <img src={carrito} className='img-carrito' alt="carrito" />
      <span className='numero'>{totalCartItem()}</span>
    </div>
  )
}

export default CartWidget

