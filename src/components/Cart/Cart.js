import './cart-styles.css'
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Link, useNavigate } from "react-router-dom"
// import ItemCount from '../ItemCount/ItemCount'
import { collection, addDoc, getFirestore, updateDoc, doc } from 'firebase/firestore'
import moment from 'moment'


const Cart = () => {

  const navigate = useNavigate();

  const { cart, removeItem, clear, totalQuantity } = useContext(CartContext);


  // Firebase ----------------------------------------------


  const [order, setOrder] = useState({
    buyer: {
      name: 'Juan',
      phone: 123456789,
      email: 'test@test.com',
    },
    item: [],
    total: 0,
    date: '',
  });

  const db = getFirestore();

  const createOrder = () => {
    setOrder((currentOrder) => {
      return {
        ...currentOrder,
        items: cart,
        total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
        date: moment().format('DD/MM/YYYY, h:mm:ss a'),
      }
    });

    const query = collection(db, 'orders');
    addDoc(query, order)
      .then(() => {
        updateStockProducts();
        alert('Gracias por tu compra')
      })
      .catch(() =>
        alert('Tu compra no fue realizada. Intenta mas tarde')
      );
  };

  const updateStockProducts = () => {
    cart.forEach((product) => {
      const queryUpdate = doc(db, 'items', product.id);
      updateDoc(queryUpdate, {
        categoryId: product.categoryId,
        parrafo: product.parrafo,
        image: product.image,
        price: product.price,
        tittle: product.tittle,
        stock: product.stock - product.quantity,
      })
        .then(() => {
          if (cart[cart.length - 1].id === product.id) {
            clear();
            navigate('/');
          }
        })
        .catch(() => {
          console.log('Error al actualizar stock');
        });
    });
  };


  // Firebase ----------------------------------------------


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