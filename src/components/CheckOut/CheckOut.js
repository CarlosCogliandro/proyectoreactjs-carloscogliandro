import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import moment from "moment/moment";



const CheckOut = () => {

    const { cart, clear } = useContext(CartContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState(0);
    const [orderID, setOrderID] = useState();
    const [date, setDate] = useState("");
    const [total, setTotal] = useState(0);
    const [purchase, setPurchase] = useState([]);

    const managePurchase = (evt) => {
        evt.preventDefault();

        const db = getFirestore();

        let purchaseDate = new Date();
        setDate(purchaseDate.toLocaleString());

        const purchaseInfo = {
            buyer: {
                name: name,
                email: email,
                phone: phone,
            },
            items: cart,
            total: cart.reduce(
                (valorPasado, valorActual) =>
                    valorPasado + valorActual.price * valorActual.quantity,
                0
            ),
            date: moment().format(),
        };

        const order = collection(db, 'orders');
        addDoc(purchaseInfo, order)
            .then(({ id }) => {
                setOrderID(id);
            })
            .catch((error) => {
                console.log(error);
            });
        updateStock(purchaseInfo);
    };

    const updateStock = (purchaseInfo) => {
        purchaseInfo.items.map((element) => {
            let id = element.item.id
            let quantity = element.quantity

            const db = getFirestore();
            const itemCollection = db.collection("productos");
            const itemFirestore = itemCollection.doc(id);
            itemFirestore.get().then((value) => {
                let previousStock = value.data().stock
                return itemFirestore.update({
                    stock: previousStock - quantity
                });
            });
        });
    };



    return (
        <>
            {orderID ?
                <div className="">
                    <h5>¡Muchas gracias por tu compra, {name}!</h5><br />
                    <p>
                        Tu número de orden es <span>{orderID}</span><br /><br />
                        Ya enviamos el detalle de tu compra y el código de seguimiento del envío a tu casilla de correo electrónico (<a id="email">{email}</a>).
                    </p>
                    <Link to={`/`} className="">Iniciar una nueva compra</Link>
                </div>
                :
                <div className="">
                    <form className="" onSubmit={() => { managePurchase(); clear(); setTotal(); setPurchase(cart) }}>
                        <h5>Datos personales</h5>
                        <div className="">
                            <label htmlFor="name">Nombre</label>
                            <input type="text" className="" id="name" name="name" value={name} onChange={(evt) => { setName(evt.target.value) }} />
                        </div>
                        
                        <div className="form-group my-4">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" className="form-control" id="email" name="email" value={email} onChange={(evt) => { setEmail(evt.target.value) }} />
                        </div>
                        
                        <div className="form-group my-4">
                            <label htmlFor="phone">Teléfono</label>
                            <input type="text" className="form-control" id="phone" name="phone" value={phone} onChange={(evt) => { setPhone(evt.target.value) }} />
                        </div>
                        
                        <div className="checkoutButtonContainer">
                            <Link to={`/cart`}><button className="">Atrás</button></Link>
                            {email === name && phone ? <button type="submit" className="">Comprar</button> : <button type="submit" className="" /*disabled*/ >Comprar</button>}
                        </div>
                    </form>
                </div>
            }
        </>
    );
};

export default CheckOut;