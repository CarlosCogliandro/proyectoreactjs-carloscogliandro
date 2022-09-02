import './styles.css'
import { useState } from "react";


const ItemCount = (props, Item) => {
    const [initialState, setInitialState] = useState(1);

    const suma = () => { initialState < props.stock ? setInitialState(initialState + 1) : console.log("te pasaste") };

    const resta = () => { initialState > 1 ? setInitialState(initialState - 1) : console.log("no resta mas") };

    return (
        <div className='stock'>
            <div className="agregar">
                <button onClick={resta} className="btn">-</button>
                <h3>{initialState}</h3>
                <button onClick={suma} className="btn">+</button>
            </div>
        </div>
    );
};

export default ItemCount;