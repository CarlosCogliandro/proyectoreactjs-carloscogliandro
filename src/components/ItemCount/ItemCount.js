import "./itemcount-styles.css";
import { useState } from "react";


const ItemCount = ({ onAdd, stock, initial }) => {
  
  const [initialState, setInitialState] = useState(initial);

  


  const suma = () => {
    initialState < stock
      ? setInitialState(initialState + 1)
      : console.log("te pasaste");
  };

  const resta = () => {
    initialState > 1
      ? setInitialState(initialState - 1)
      : console.log("no resta mas");
  };

  const handleOnAdd = () => {
    if (initialState <= stock) onAdd(initialState)
  }

  return (
    <div className="stock">
      <div className="agregar">
        <button onClick={resta} className="btn">-</button>
        <h3>{initialState}</h3>
        <button onClick={suma} className="btn">+</button>
      </div>
      <button onClick={handleOnAdd} className="boton-agregar">Agregar al carrito</button>
  
    </div>
    
  );
};

export default ItemCount;