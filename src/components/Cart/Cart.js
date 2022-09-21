import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"

const Cart = () => {

  const {cart, removeItem, clear} = useContext(CartContext)


  return (
    <div>
      <h1>CART...</h1>
      {cart.length === 0 ? (
        <>
        <h2>NO HAY ITEM EN EL CARRITO</h2>
        <Link to={'/'}><button>Volver a comprar</button></Link>        
        </>
      ) : (
        <>
          {cart.map((item) =>(
            <div key={item.id}>
            <img src={item.image} alt={item.tittle} />
            <h3>{item.tittle}</h3>
            <p>{item.price}</p>
            <p>{item.quantity}</p>
            <button onClick={() => removeItem(item.id)}>Eliminar producto</button>
            <button onClick={()=> clear()}>Vaciar carrito</button>
            <button>Finalizar comprar</button>
            </div>        
          ))}
        </>
      )}

      
    </div>
  )}

export default Cart;