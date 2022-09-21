import './cart-styles.css'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"


const Cart = () => {

  const {cart, removeItem, clear} = useContext(CartContext)


  return (
    <div className='cart'>
      {cart.length === 0 ? (
        <>
        <h2>NO HAY ITEM EN EL CARRITO</h2>
        <Link to={'/'}><button>Volver a comprar</button></Link>        
        </>
      ) : (
        <>
          {cart.map((item) =>(
            <div key={item.id} className='detalles'>
              
              <div className='detalles2'>
             
                <img src={item.image} alt={item.tittle} className='img-cart'/>

                <div className='detalles3'>
                  <h3 className='detalle-item'>{item.tittle}</h3>
                  <p className='detalle-item'>$ {item.price}</p>
                  <p className='detalle-item'>Cantidad: {item.quantity}</p>
                </div>

                <button onClick={() => removeItem(item.id)} className='boton-eliminar'>X</button>

              </div>

            </div>        
          ))}
        </>
      )}

      <div className='botones-finalizacion'>
        <button onClick={()=> clear()} className='boton-agregar2'>Vaciar carrito</button>
        <button className='boton-agregar'>Finalizar comprar</button>
      </div>

    </div>
  )}

export default Cart;