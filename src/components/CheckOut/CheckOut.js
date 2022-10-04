import { CartContext } from "../../context/CartContext"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { collection, addDoc, getFirestore, updateDoc, doc } from 'firebase/firestore'
import moment from 'moment'
import chip from '../images/chip.png'
import './checkout-styles.css'
import swal from "sweetalert"

const CheckOut = () => {

    const navigate = useNavigate();

    const { cart, removeItem, clear, totalQuantity } = useContext(CartContext);

    const [order, setOrder] = useState({
        buyer: {
            name: '',
            phone: '',
            email: '',
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
            .then(({ id }) => {
                console.log(id)
                updateStockProducts();
                swal("Gracias por tu compra!", "", "success");
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

    const handleInputChange = (evt) => {
        setOrder({
            ...order,
            buyer: {
                ...order.buyer,
                [evt.target.name]: evt.target.value,
            }
        })

    }


    return (
        <div className="container_checkout">
            <div className="checkout">
                <div className="productos_checkout">
                    {cart.map((item) => (
                        <div key={item.id} className='detalles1_checkout'>
                            <div className='detalles2_checkout'>
                                <img src={item.image} alt={item.tittle} className='img-cart_checkout' />
                                <h3 className='detalleCart-item_checkout'>{item.tittle}</h3>
                                <p className='detalleCart-item_checkout'>$ {item.price}</p>
                                <p className='detalleCart-item_checkout'>Cantidad: {item.quantity}</p>
                            </div>

                        </div>
                    ))}
                    <p className='total_checkout'>Total: $ {totalQuantity()}</p>
                </div>
                
                <div className="tarjeta_y_datos">
                    <div className="datos_compra">
                        <div>
                            <label>Nombre: </label>
                            <input name='name' type="text" placeholder="Juan Perez" value={order.buyer.name} onChange={handleInputChange} />
                        </div>

                        <div>
                            <label>Telefono: </label>
                            <input name='phone' type="number" placeholder="633-165-988" value={order.buyer.phone} onChange={handleInputChange} />
                        </div>

                        <div>
                            <label>E-mail: </label>
                            <input name='email' type="email" placeholder="TuEmail@email.com" value={order.buyer.email} onChange={handleInputChange} />
                        </div>
                    </div>

                    <div className="creditcard_container">

                        <div className="chip_numero">
                            <img className="chip" src={chip} />
                            <div>    
                                <label for="">Numero de tarjeta: </label>
                                <input type="number" name="" id="" placeholder="0000 - 0000 - 0000 - 0000" />
                            </div>
                        </div>

                        <div>
                            <label for="">Titular: </label>
                            <input type="text" name="" id="" placeholder="JUAN PEREZ" />
                        </div>

                        <div>
                            <label for="">CVC: </label>
                            <input type="number" name="" id="" placeholder="000" />
                        </div>

                        <div className="desde_hasta">
                            <div>
                                <label for="">Desde: </label>
                                <input type="text" name="" id="" placeholder="00/00" />
                            </div>
                            <div>
                                <label for="">Hasta: </label>
                                <input type="text" name="" id="" placeholder='00/00' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="boton_pago_checkout" onClick={createOrder}>Realizar pago</button>
        </div>
    )
}

export default CheckOut;





































// import { useState, useContext } from "react";
// import { CartContext } from "../../context/CartContext";
// import { getFirestore, collection, addDoc } from "firebase/firestore";
// import { Link } from "react-router-dom";
// import moment from "moment/moment";



// const CheckOut = () => {

//     const { cart, clear } = useContext(CartContext);

//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [phone, setPhone] = useState(0);
//     const [orderID, setOrderID] = useState();
//     const [date, setDate] = useState("");
//     const [total, setTotal] = useState(0);
//     const [purchase, setPurchase] = useState([]);

//     const managePurchase = (evt) => {
//         evt.preventDefault();

//         const db = getFirestore();

//         let purchaseDate = new Date();
//         setDate(purchaseDate.toLocaleString());

//         const purchaseInfo = {
//             buyer: {
//                 name: name,
//                 email: email,
//                 phone: phone,
//             },
//             items: cart,
//             total: cart.reduce(
//                 (valorPasado, valorActual) =>
//                     valorPasado + valorActual.price * valorActual.quantity,
//                 0
//             ),
//             date: moment().format(),
//         };

//         const order = collection(db, 'orders');
//         addDoc(purchaseInfo, order)
//             .then(({ id }) => {
//                 setOrderID(id);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//         updateStock(purchaseInfo);
//     };

//     const updateStock = (purchaseInfo) => {
//         purchaseInfo.items.map((element) => {
//             let id = element.item.id
//             let quantity = element.quantity

//             const db = getFirestore();
//             const itemCollection = db.collection("productos");
//             const itemFirestore = itemCollection.doc(id);
//             itemFirestore.get().then((value) => {
//                 let previousStock = value.data().stock
//                 return itemFirestore.update({
//                     stock: previousStock - quantity
//                 });
//             });
//         });
//     };



//     return (
//         <>
//             {orderID ?
//                 <div className="">
//                     <h5>¡Muchas gracias por tu compra, {name}!</h5><br />
//                     <p>
//                         Tu número de orden es <span>{orderID}</span><br /><br />
//                         Ya enviamos el detalle de tu compra y el código de seguimiento del envío a tu casilla de correo electrónico (<a id="email">{email}</a>).
//                     </p>
//                     <Link to={`/`} className="">Iniciar una nueva compra</Link>
//                 </div>
//                 :
//                 <div className="">
//                     <form className="" onSubmit={() => { managePurchase(); clear(); setTotal(); setPurchase(cart) }}>
//                         <h5>Datos personales</h5>
//                         <div className="">
//                             <label htmlFor="name">Nombre</label>
//                             <input type="text" className="" id="name" name="name" value={name} onChange={(evt) => { setName(evt.target.value) }} />
//                         </div>
                        
//                         <div className="form-group my-4">
//                             <label htmlFor="email">E-mail</label>
//                             <input type="email" className="form-control" id="email" name="email" value={email} onChange={(evt) => { setEmail(evt.target.value) }} />
//                         </div>
                        
//                         <div className="form-group my-4">
//                             <label htmlFor="phone">Teléfono</label>
//                             <input type="text" className="form-control" id="phone" name="phone" value={phone} onChange={(evt) => { setPhone(evt.target.value) }} />
//                         </div>
                        
//                         <div className="checkoutButtonContainer">
//                             <Link to={`/cart`}><button className="">Atrás</button></Link>
//                             {email === name && phone ? <button type="submit" className="">Comprar</button> : <button type="submit" className="" /*disabled*/ >Comprar</button>}
//                         </div>
//                     </form>
//                 </div>
//             }
//         </>
//     );
// };

// export default CheckOut;