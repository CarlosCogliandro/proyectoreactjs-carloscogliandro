import { useState } from "react"
import { CartContext } from "./CartContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])


  const itemAgregado = () => {
    toast.warn('Ya se encuentra agregado', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      });
  }

  const itemEliminado = () => {
    toast.error('Item Eliminado', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      });
  }

  const itemsEliminados = () => {
    toast.info('Carrito Vacio', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      });
  }

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      itemAgregado();
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id)
  };

  const clear = () => {
    setCart([]);
    itemsEliminados();
  };

  const removeItem = (productId) => {
    let nuevoArreglo = [];
    cart.forEach((product) => {
      if (product.id === productId) {
      } else {
        nuevoArreglo.push(product)
      }
    })
    setCart(nuevoArreglo);
    itemEliminado();
  }

  const totalQuantity = () => {
    return cart.reduce((acc, current) => acc + current.price * current.quantity, 0)
  }

  const totalCartItem = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0)
  }
  

  return (
    <CartContext.Provider value={{ cart, addToCart, removeItem, clear, totalQuantity, totalCartItem }}>
      {children}
      <ToastContainer/>
    </CartContext.Provider>
  )
}

export default CartProvider;