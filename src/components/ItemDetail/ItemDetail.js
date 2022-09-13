import './itemdetail-styles.css'
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({product}) => {

    const handleOnAdd = (cantidad) => {
        alert(`Agregaste ${cantidad} al carrito`);
      };

    return (
        <div className="itemdetail">
                
                <div>
                    <img className="img-detalle" src={product.image} alt={product.tittle} key={product.tittle} />
                </div>

                <div className='detalles'>
                    <h2>{product.tittle}</h2>
                    <h3>${product.price}</h3>
                    <p>{product.parrafo}</p>
                    <h5>Stock: {product.stock}</h5>
                    <ItemCount stock={product.stock} initial={1} onAdd={handleOnAdd} />
                </div> 

        </div>
    );
};

export default ItemDetail;