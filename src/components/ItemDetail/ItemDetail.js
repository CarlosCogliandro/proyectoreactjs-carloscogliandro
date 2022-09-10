import './styles.css'
import Item from "../Item/Item";
import { Link, NavLink } from "react-router-dom";


const ItemDetail = ({lista}) => {

    return (
        <div className="itemdetail">{
            lista.map((product) => (
                <Link
                    key={product.id} 
                    to={'/detail/' + product.id} 
                    style={{ textDecoration: 'none', color: 'black'}}
                >
                    <Item 
                        tittle={product.tittle} 
                        price={product.price} 
                        image={product.image}
                        parrafo={product.parrafo}
                        stock={product.stock}
                    />
                </Link>
            ))}
        </div>
    );
};

export default ItemDetail;