import carrito from './carrito.png'

const CartWidget = () => {
  return (
    <button><img src={carrito} className='carrito' alt="carrito"/><span>0</span></button>
  )
}

export default CartWidget