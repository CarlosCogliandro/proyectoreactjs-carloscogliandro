import './cart-styles.css'
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Link, useNavigate } from "react-router-dom"
// import ItemCount from '../ItemCount/ItemCount'
import { collection, addDoc, getFirestore, updateDoc, doc } from 'firebase/firestore'
import moment from 'moment'


const Cart = () => {

  const { cart, removeItem, clear, totalQuantity } = useContext(CartContext);


  // // Firebase ----------------------------------------------

  // const navigate = useNavigate();

  // const [order, setOrder] = useState({
  //   buyer: {
  //     name: '',
  //     phone: 0,
  //     email: '',
  //   },
  //   item: [],
  //   total: 0,
  //   date: '',
  // });

  // const db = getFirestore();

  // const createOrder = () => {
  //   setOrder((currentOrder) => {
  //     return {
  //       ...currentOrder,
  //       items: cart,
  //       total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
  //       date: moment().format('DD/MM/YYYY, h:mm:ss a'),
  //     }
  //   });

  //   const query = collection(db, 'orders');
  //   addDoc(query, order)
  //     .then(({ id }) => {
  //       console.log(id)
  //       updateStockProducts();
  //       alert('Gracias por tu compra')
  //     })
  //     .catch(() =>
  //       alert('Tu compra no fue realizada. Intenta mas tarde')
  //     );
  // };

  // const updateStockProducts = () => {
  //   cart.forEach((product) => {
  //     const queryUpdate = doc(db, 'items', product.id);
  //     updateDoc(queryUpdate, {
  //       categoryId: product.categoryId,
  //       parrafo: product.parrafo,
  //       image: product.image,
  //       price: product.price,
  //       tittle: product.tittle,
  //       stock: product.stock - product.quantity,
  //     })
  //       .then(() => {
  //         if (cart[cart.length - 1].id === product.id) {
  //           clear();
  //           navigate('/');
  //         }
  //       })
  //       .catch(() => {
  //         console.log('Error al actualizar stock');
  //       });
  //   });
  // };


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
              <button onClick={() => removeItem(item.id, item)} className='boton-eliminar'>X</button>

            </div>
          ))}

          <p className='total'>Total: $ {totalQuantity()}</p>

          <div className='botones-finalizacion'>

            <button onClick={() => clear()} className='boton-agregarCart2'>Vaciar carrito</button>

            <Link to={'/finalizarcompra'}><button /*onClick={createOrder}*/ className='boton-agregarCart'>Finalizar comprar</button></Link>

          </div>
        </>
      )}
    </div>
  )
}

export default Cart;





// https://repo-ecommerce.vercel.app/







// import { useContext, useState } from 'react';
// import { CartContext } from '../../context/cartContext';
// import { Link } from 'react-router-dom';
// import moment from 'moment';
// import { useNavigate } from 'react-router-dom';
// import {
//   collection,
//   addDoc,
//   getFirestore,
//   updateDoc,
//   doc,
// } from 'firebase/firestore';

// const Cart = () => {
//   const navigate = useNavigate();
//   const { cart, removeItem, clear } = useContext(CartContext);
//   const [order, setOrder] = useState({
//     buyer: {
//       name: '',
//       phone: 0,
//       email: '',
//     },
//     items: cart,
//     total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
//     date: moment().format('DD/MM/YYYY, h:mm:ss a'),
//   });

//   const db = getFirestore();

//   const createOrder = () => {
//     const query = collection(db, 'orders');
//     addDoc(query, order)
//       .then(({ id }) => {
//         console.log(id);
//         updateStockProducts();
//         alert('Felicidades por tu compra');
//       })
//       .catch(() =>
//         alert('Tu compra no pudo ser completada, intentalo más tarde')
//       );
//   };

//   const updateStockProducts = () => {
//     cart.forEach((product) => {
//       const queryUpdate = doc(db, 'items', product.id);
//       updateDoc(queryUpdate, {
//         categoryId: product.categoryId,
//         description: product.description,
//         image: product.image,
//         price: product.price,
//         title: product.title,
//         stock: product.stock - product.quantity,
//       })
//         .then(() => {
//           if (cart[cart.length - 1].id === product.id) {
//             clear();
//             navigate('/');
//           }
//         })
//         .catch(() => {
//           console.log('error al actualizar stock');
//         });
//     });
//   };

//   const handleInputChange = (e) => {
//     console.log(e.target);
//     setOrder({
//       ...order,
//       buyer: {
//         ...order.buyer,
//         [e.target.name]: e.target.value,
//       },
//     });
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'row' }}>
//       {cart.length === 0 ? (
//         <>
//           <h2>No hay productos en tu carrito</h2>
//           <Link to={'/'}>Volver a comprar</Link>
//         </>
//       ) : (
//         <>
//           <h1>Cart</h1>
//           {cart.map((item) => (
//             <div
//               key={item.id}
//               style={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//               }}
//             >
//               <img
//                 src={'../img/' + item.image}
//                 alt={item.title}
//                 width={'150px'}
//               />
//               <br />
//               <h3>{item.title}</h3>
//               <br />
//               <p>${item.price} ------ </p>
//               <br />
//               <p>{item.quantity}</p>
//               <button onClick={() => removeItem(item.id)}>
//                 Eliminar producto
//               </button>
//             </div>
//           ))}
//         </>
//       )}
//       <div style={{ margin: '50px' }}>
//         <div>
//           <label>Nombre</label>
//           <input
//             name="name"
//             type="text"
//             value={order.buyer.name}
//             onChange={handleInputChange}
//           />
//         </div>
//         <br />
//         <div>
//           <label>Telefono</label>
//           <input
//             name="phone"
//             type="number"
//             value={order.buyer.phone}
//             onChange={handleInputChange}
//           />
//         </div>
//         <br />
//         <div>
//           <label>Correo</label>
//           <input
//             name="email"
//             type="email"
//             value={order.buyer.email}
//             onChange={handleInputChange}
//           />
//         </div>
//       </div>
//       <div style={{ marginLeft: '100px', marginTop: '150px' }}>
//         <button onClick={createOrder}>Crear orden</button>
//       </div>
//     </div>
//   );
// };

// export default Cart;