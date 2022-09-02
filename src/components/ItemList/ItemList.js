import Item from "../Item/Item"


const ItemList = ({lista}) => {

    return (
        <div className="tarjetas">{
            lista.map((product) => (
                <Item 
                key={product.id}
                tittle={product.tittle} 
                price={product.price} 
                image={product.image}
                parrafo={product.parrafo}
                stock={product.stock}
                />
            ))}
        </div>
    );
};

export default ItemList