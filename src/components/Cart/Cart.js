import './cart-styles.css'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
// import ItemCount from '../ItemCount/ItemCount'
import { collection, addDoc, getFirestore, updateDoc, doc } from 'firebase/firestore'
import moment from 'moment'


const Cart = () => {

  const { cart, removeItem, clear, totalQuantity } = useContext(CartContext)

  // firebase


  const createOrder = () => {
    const db = getFirestore();
    const order = {
      buyer: {
        name: 'Marcelo Gomez',
        phone: 456465564,
        email: 'test@test.com'
      },
      item: cart,
      total: cart.reduce(
        (valorPasado, valorActual) =>
          valorPasado + valorActual.price * valorActual.quantity,
        0
      ),
      date: moment().format(),
    }
    const query = collection(db, "orders");
    addDoc(query, order)
      .then(({id}) => {
        console.log(id);
        alert('Gracias por tu compra')
      })
      .catch(() => { alert('Tu compra no fue realizada. Intenta mas tarde') })
  }


  // const updateOrder = () => {
  //   const idOrder = 'UyiinBliNPfvurmUW0zQ'
  //   const order = {
  //     buyer: {
  //       name: 'juan',
  //       phone: 132165465,
  //       email: 'test@test.com'
  //     },
  //     item: cart,
  //     total: cart.reduce(
  //       (valorPasado, valorActual) =>
  //         valorPasado + valorActual.price * valorActual.quantity,
  //       0
  //     ),
  //     date: moment().format(),
  //   };

  //   const queryUpdate = doc(db, 'orders', idOrder);

  //   updateDoc(queryUpdate, order)
  //     .then((response) => {
  //       console.log(response)
  //     })
  // }



  // Firebase



  return (
    <div className='cart'>
      {cart.length === 0 ? (
        <>
          <h2 className='nohay'>NO HAY PRODUCTOS EN EL CARRITO</h2>
          <img src='https://th.bing.com/th/id/OIP.iwNao-GReOHcag3MVdlGNwHaIE?pid=ImgDet&rs=1' alt='IMG-TRISTE' className='img-triste'></img>
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

          <div className='botones-finalizacion'>

            <button onClick={() => clear()} className='boton-agregarCart2'>Vaciar carrito</button>

            <Link to={'/finalizarcompra'}><button onClick={createOrder} className='boton-agregarCart'>Finalizar comprar</button></Link>

          </div>
        </>
      )}
    </div>
  )
}

export default Cart;