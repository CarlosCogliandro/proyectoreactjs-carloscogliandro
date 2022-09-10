import Item from "../Item/Item";
import { Link } from "react-router-dom";


const ItemList = ({lista}) => {

    return (
        <div className="tarjetas">{
            lista.map((product) => (
                <Link 
                    key={product.id} 
                    to={`/detail/${product.id}`} 
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

export default ItemList