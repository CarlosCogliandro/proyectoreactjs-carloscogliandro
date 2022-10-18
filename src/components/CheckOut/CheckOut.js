import { CartContext } from "../../context/CartContext"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { collection, addDoc, getFirestore, updateDoc, doc } from 'firebase/firestore'
import moment from 'moment'
import chip from '../images/chip.png'
import './checkout-styles.css'
import swal from "sweetalert"
import { RingLoader } from 'react-spinners'


const CheckOut = () => {

    const navigate = useNavigate();

    const { cart, clear, totalQuantity } = useContext(CartContext);


    // -------  FIREBASE


    const [order, setOrder] = useState({
        buyer: {
            name: '',
            phone: '',
            email: '',
            confirmEmail:'',
        },
        item: cart,
        total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
        date: moment().format('DD/MM/YYYY, h:mm:ss a'),
    });

    const db = getFirestore();

    const createOrder = () => {
        const query = collection(db, 'orders');
        addDoc(query, order)
            .then(({ id }) => {
                updateStockProducts();
                swal({
                    title: "Gracias por tu compra!",
                    text: `Su N° de orden de compra es: ${id} `,
                    icon: "success",
                    button: "OK",
                });
            })
            .catch(() =>
                swal({
                    title: "Error",
                    text: 'Tuvimos un error, Intente mas tarde',
                    icon: "error",
                    button: "OK",
                })
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


    // Evento para que complete los campos obligatoriamente y el email sea el mismo y contenga simbolo @

    const buy = (event) => {
        event.preventDefault();
        if (!order.buyer.name || !order.buyer.email || !order.buyer.phone) {
            return swal({
                title: "Complete los campos",
                icon: "warning",
                button: "OK",
            })
                .then(() => {
                    return;
                });
        }
        if (!order.buyer.email.includes("@") || !order.buyer.confirmEmail.includes("@")
          ) {
            return swal({
                title: "E-mail incorrecto",
                icon: "error",
                button: "OK",
            })
              .then(() => {
                return;
              });
          }
        if (order.buyer.email !== order.buyer.confirmEmail) {
            return swal({
                title: "El email no concuerda con el ingresado",
                icon: "error",
                button: "OK",
            })
                .then(() => {
                    return;
                });
        }
        else {
            createOrder();
            clear();
        }
    }

    const handleInputChange = (evt) => {
        setOrder({
            ...order,
            buyer: {
                ...order.buyer,
                [evt.target.name]: evt.target.value,
            }
        });
    }


    // -------  FIREBASE



    return (
        <div className="container_checkout">
            <div className="checkout">
                {cart.map((item) => (
                    <div className="productos_checkout">
                        <div key={item.id} className='detalles1_checkout'>
                            <div className='detalles2_checkout'>
                                <img src={item.image} alt={item.tittle} className='img-cart_checkout' />
                                <h3 className='detalleCart-item_checkout'>{item.tittle}</h3>
                                <p className='detalleCart-item_checkout'>{item.price.toLocaleString("es-AR", { style: "currency", currency: "ARS" })}</p>
                                <p className='detalleCart-item_checkout'>Cantidad: {item.quantity}</p>
                            </div>
                        </div>
                        <p className='total_checkout'>Total: {totalQuantity().toLocaleString("es-AR", { style: "currency", currency: "ARS" })}</p>
                    </div>
                ))}

                {cart.length === 0 ? (
                    <>
                        <RingLoader color="#6cacef" cssOverride={{ margin: '80px' }} />
                    </>) : (

                    <div className="tarjeta_y_datos">
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
                                <input type="text" name="" id="" placeholder="Juan Perez" />
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

                        <form className="datos_compra">
                            <div className="datos_compra1">
                                <label>Nombre:</label>
                                <input name='name' type="text" placeholder="Juan Perez" value={order.buyer.name} onChange={handleInputChange} required/>
                            </div>

                            <div className="datos_compra1">
                                <label>Telefono:</label>
                                <input name='phone' type="number" placeholder="633-165-988" value={order.buyer.phone} onChange={handleInputChange} required/>
                            </div>

                            <div className="datos_compra1">
                                <label>E-mail:</label>
                                <input name='email' type="email" placeholder="TuEmail@email.com" value={order.buyer.email} onChange={handleInputChange} required/>
                            </div>

                            <div className="datos_compra1">
                                <label>Confirmar E-mail:</label>
                                <input name='confirmEmail' type="email" placeholder="TuEmail@email.com" value={order.buyer.confirmEmail} onChange={handleInputChange} required />
                            </div>
                        </form>
                        <button className="boton_pago_checkout" onClick={buy}>Realizar Pago</button>
                    </div>)}
            </div>
        </div>
    )
}

export default CheckOut;