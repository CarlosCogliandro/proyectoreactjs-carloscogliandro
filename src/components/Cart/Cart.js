import './cart-styles.css'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"


const Cart = () => {

  const { cart, removeItem, clear, totalQuantity } = useContext(CartContext)

  return (
    <div className='cart'>
      {cart.length === 0 ? (
        <>
          <h2 className='nohay'>NO HAY ITEM EN EL CARRITO</h2>
          <img src='https://th.bing.com/th/id/OIP.iwNao-GReOHcag3MVdlGNwHaIE?pid=ImgDet&rs=1' className='img-triste'></img>
          <Link to={'/'}><button className='boton-volver'>Volver a la pagina principal</button></Link>
        </>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className='detalles1'>

              <img src={item.image} alt={item.tittle} className='img-cart' />

              <div className='detalles2'>
                <h3 className='detalleCart-item'>{item.tittle}</h3>
                <p className='detalleCart-item'>$ {item.price}</p>
                <p className='detalleCart-item'>Cantidad: {item.quantity}</p>
              </div>

              <button onClick={() => removeItem(item.id)} className='boton-eliminar'>X</button>

            </div>
          ))}
          <p className='total'>Total: $ {totalQuantity()}</p>
        </>
      )}

      <div className='botones-finalizacion'>
        <button onClick={() => clear()} className='boton-agregarCart2'>Vaciar carrito</button>
        <Link to={'/finalizarcompra'}><button className='boton-agregarCart'>Finalizar comprar</button></Link>
      </div>

    </div>
  )
}

export default Cart;