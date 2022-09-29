import { useState } from "react"
import { CartContext } from "./CartContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])


  // TOASTIFY

  const itemYaAgregado = (item) => {
    toast.warn(`${item.tittle} ya se encuentra agregado`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: 0,
    });
  }

  const itemEliminado = () => {
    toast.error(`Has eliminado un producto del carrito`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
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
      pauseOnHover: false,
      draggable: true,
      progress: 0,
    });
  }

  const itemAgregado = (item) => {
    toast.success(`Has agregado ${item.tittle} al carrito`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: 0,
      });
  }

  // TOASTIFY


  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      itemYaAgregado(item);
    } else {
      itemAgregado(item);
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
    let newArray = [];
    cart.forEach((product) => {
      if (product.id === productId) {
      } else {
        newArray.push(product)
      }
    })
    setCart(newArray);
    itemEliminado() ;
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
      <ToastContainer />
    </CartContext.Provider>
  )
}

export default CartProvider;