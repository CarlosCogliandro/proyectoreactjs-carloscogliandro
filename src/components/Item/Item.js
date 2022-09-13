import './item-styles.css'
import { Link } from "react-router-dom";

const Item = ({ tittle, image, price, id }) => {
  
  return (
    <div className="tarjetas">
      <div className="cards">

        <div>
          <img className="items" src={image} alt={tittle} key={tittle} />
        </div>

        <div>
          <h2>{tittle}</h2>
          <h4>${price}</h4>
          <Link to={`/detail/${id}`} style={{ textDecoration: 'none', color: 'black'}}>
            <button className="btn-detalles">Detalles</button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Item; 