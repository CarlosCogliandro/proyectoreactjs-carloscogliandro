import './itemdetail-styles.css'
import ItemCount from '../ItemCount/ItemCount';
import { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


const ItemDetail = ({ product }) => {

  const [hasAddedProductToCart, setHasAddedProductToCart] = useState(false);

  const { addToCart } = useContext(CartContext);


  function handleOnAdd(cantidad) {
    if (cantidad > 0) {
      setHasAddedProductToCart(true);
      addToCart(product, cantidad)
    }
  }

  return (
    <div className="itemdetail">

      <div>
        <img className="img-detalle" src={product.image} alt={product.tittle} key={product.tittle} />
      </div>
      <div className='detalles'>
        <h2>{product.tittle}</h2>
        <h3>{product.price.toLocaleString("es-AR", {style: "currency", currency: "ARS"})}</h3>
        <p>{product.parrafo}</p>
        <h5>Stock: {product.stock}</h5>
        {hasAddedProductToCart ?
          <Link to={'/cart'}> <Button className='boton-agregar'> Ver el carrito </Button></Link> :
          (<ItemCount initial={1} stock={product.stock} onAdd={handleOnAdd} />)}
        <Link to={'/'}> <Button className='boton-agregar2'>Seguir comprando</Button></Link>
      </div>

    </div>
  );
};

export default ItemDetail;