import './itemdetail-styles.css'
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ItemDetail = ({product}) => {

      const [hasAddedProductToCart, setHasAddedProductToCart] = useState(false);

      function handleOnAdd(cantidad) {
        if (cantidad > 0) {
          setHasAddedProductToCart(true);
        }
        alert(`Agregaste ${cantidad} ${product.tittle} al carrito`)
      }

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
                    {hasAddedProductToCart ? 
                    <Link to={'/cart'}> <Button className='boton-agregar'> Ver el carrito </Button></Link> : 
                    (<ItemCount initial={1} stock={product.stock} onAdd={handleOnAdd} /> )}
                    <Link to={'/'}> <Button className='boton-agregar2'>Seguir comprando</Button></Link>
                </div> 

        </div>
    );
};

export default ItemDetail;