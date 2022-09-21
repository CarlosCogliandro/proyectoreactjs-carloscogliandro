import { useState } from "react"
import { CartContext } from "./CartContext";

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart = (item, quantity) =>{
      console.log(item)
      if (isInCart(item.id)) {
        alert('Ya esta en el carrito');
      }else{
        setCart ([...cart, {...item, quantity}]);
      }
    };

    const isInCart = (id) => {
      return cart.some((item) => item.id === id)
    };

    const clear = () => {
      setCart([]);
    };

    const removeItem = (productId) => {
      let nuevoArreglo = [];
      cart.forEach((product) => {
        if(product.id === productId) {

        }else{
          nuevoArreglo.push(product)
        }
      })
      setCart(nuevoArreglo)
    }

  return (
    <CartContext.Provider value={ {cart, addToCart, removeItem, clear} }>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider;





// import { useState } from "react";
// import CartContext from "./CartContext";

// export const CartProvider = ({ children }) => {
//     const [list, setList] = useState();
//     const addCart = (varietals, quantity) => {
//         if (isInCart(varietals.item.id ) === -1){
//             setList(varietals)
//         }else{
//             list[isInCart].quantity += quantity
//         }
//     };
       
//     const isInCart = (id) => {
//         return list.findIndex(varietals => varietals.id === id)
//     };

//     return(
//     <>
//       <CartContext.Provider value={{list, addCart}}>
//           {children}
//       </CartContext.Provider>
//     </>);
// };