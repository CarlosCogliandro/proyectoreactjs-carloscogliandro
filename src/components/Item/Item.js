import "./styles.css"
import ItemCount from "../ItemCount/ItemCount"


const Item = ({tittle, image, price, parrafo, stock}) => {

  return (
    <div>
        <div className="cards">
            <h2>{tittle}</h2>
            <img className="items" src={image} alt={tittle} key={tittle}/>
            <p>{parrafo}</p>
            <h3>${price}</h3>
            <ItemCount stock={stock}/>
            <h5>Stock: {stock}</h5>
            <button className="boton-agregar">Agregar al carrito</button>
        </div>
    </div>
  )
}

export default Item