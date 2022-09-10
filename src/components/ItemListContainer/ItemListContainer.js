import './styles.css'

// import televisor from './images/televisor.png'
// import tostadora from './images/tostadora.png'
// import heladera from './images/heladera.png'
// import cocina from './images/cocina.png'
// import pava from './images/pava.png'

// import ItemCount from '../ItemCount/ItemCount'

import data from "../mockData";
import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react'


const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProducts
    .then((response) => {
      setProductList(response)
    })
    .catch((error)=> console.log(error));
  }, []);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
      reject('Hubo un ERROR!');
    }, 2000);
  });

  return (
    <div>
      <ItemList lista={productList} />
    </div>

  );
};




// const stock = 10

// return (
//   <div className='tarjetas'>
//     <div className="cards">
//       <h3>{card}</h3>
//       <img src={televisor} className='items'></img>
//       <p>Smart TV Samsung Series 7 UN43AU7000GCZB LED 4K 43" 220V - 240V</p>
//       <ItemCount stock={stock}/>
//       <button>Agregar al carrito</button>
//     </div>

//     <div className="cards">
//       <h3>{card}</h3>
//       <img src={heladera} className='items'></img>
//       <p>Heladera no frost Peabody PE-SBS67 acero inoxidable con freezer 516L 220V</p>
//       <ItemCount stock={stock}/>
//       <button>Agregar al carrito</button>
//     </div>

//     <div className="cards">
//       <h3>{card}</h3>
//       <img src={tostadora} className='items'></img>
//       <p>Tostadora Moulinex Vita 7 Niveles De Tostado Blanco</p>
//       <ItemCount stock={stock}/>
//       <button>Agregar al carrito</button>
//     </div>

//     <div className="cards">
//       <h3>{card}</h3>
//       <img src={cocina} className='items'></img>
//       <p>Cocina Whirlpool WFX57DI gas natural 4 hornallas inoxidable 220V puerta con visor</p>
//       <ItemCount stock={stock}/>
//       <button>Agregar al carrito</button>
//     </div>

//     <div className="cards">
//       <h3>{card}</h3>
//       <img src={pava} className='items'></img>
//       <p>Pava eléctrica Peabody PE-DK17411 Smartchef acero inoxidable 220V 1.7L</p>
//       <ItemCount stock={stock}/>
//       <button>Agregar al carrito</button>
//     </div>
//   </div>
// )
//}

export default ItemListContainer