import "./styles.css";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ tittle, image, price, parrafo, stock }) => {
  const handleOnAdd = (cantidad) => {
    alert(`Agregaste ${cantidad} al carrito`);
  };

  return (
    <div>
      <div className="cards">
        <h2>{tittle}</h2>
        <img className="items" src={image} alt={tittle} key={tittle} />
        <p>{parrafo}</p>
        <h3>${price}</h3>
        <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />
        <h5>Stock: {stock}</h5>
      </div>
    </div>
  );
};

export default Item;


 