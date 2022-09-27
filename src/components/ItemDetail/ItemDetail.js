import './itemdetail-styles.css'
import ItemCount from '../ItemCount/ItemCount';
import { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({ product }) => {

  const [hasAddedProductToCart, setHasAddedProductToCart] = useState(false);

  const { addToCart } = useContext(CartContext);


  const itemAgregado = () => {
    toast.success('Item Agregado', {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      });
  }

  function handleOnAdd(cantidad) {
    if (cantidad > 0) {
      setHasAddedProductToCart(true);
      addToCart(product, cantidad)
    }
    itemAgregado()
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
          (<ItemCount initial={1} stock={product.stock} onAdd={handleOnAdd} />)}
        <Link to={'/'}> <Button className='boton-agregar2'>Seguir comprando</Button></Link>
        <ToastContainer/>
      </div>

    </div>
  );
};

export default ItemDetail;