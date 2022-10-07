import Item from "../Item/Item";
import banner from '../images/banner1.png'
import './header-styles.css'

const ItemList = ({ lista }) => {

    return (
        <div>
            <header className='header'>
                <img src={banner} alt="header" className='imgheader' />
            </header>

            <div className="tarjetas"> {
                lista.map((product) => (
                    <Item
                        key={product.id}
                        tittle={product.tittle}
                        price={product.price.toLocaleString("es-AR", {style: "currency", currency: "ARS"})}
                        image={product.image}
                        id={product.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default ItemList;