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

    const { cart, clear, totalQuantity } = useContext(CartContext);

    
// -------  FIREBASE


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
                swal('Gracias por tu compra! Su ID es:', id, "success");
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


// -------  FIREBASE



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