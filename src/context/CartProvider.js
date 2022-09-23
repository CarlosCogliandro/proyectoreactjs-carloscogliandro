import { useState } from "react"
import { CartContext } from "./CartContext";


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      alert('Ya esta en el carrito');
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id)
  };

  const clear = () => {
    setCart([])
  };

  const removeItem = (productId) => {
    let nuevoArreglo = [];
    cart.forEach((product) => {
      if (product.id === productId) {
      } else {
        nuevoArreglo.push(product)
      }
    })
    setCart(nuevoArreglo)
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
    </CartContext.Provider>
  )
}

export default CartProvider;