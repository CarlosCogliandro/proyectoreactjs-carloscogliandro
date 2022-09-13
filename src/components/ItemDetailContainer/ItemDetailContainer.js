import data from "../mockData";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
  const [productList, setProductList] = useState([]);
  const {id} = useParams();


  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
        setProductList (data.filter(product => product.id === id ))
        reject('Hubo un ERROR!');
    }, 2000);
  });
  

  useEffect(() => {
    getProducts
    .then((response) => {
        setProductList(response)
    })
    .catch((error)=> console.log(error));
  }, [id]);

  

  return (
    <div>
        {productList ? (<ItemDetail lista={productList} />) : (<h2>Obteniendo el detalle...</h2>)}
    </div>
  );
};

export default ItemDetailContainer;