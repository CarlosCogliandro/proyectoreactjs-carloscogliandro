import data from "../mockData";
import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const { categoryName } = useParams();


  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      if(categoryName){
      const resolve = data.filter(prod => prod.categoria === categoryName);
      setProductList (resolve);
    }else{
      const resolve = data;
      setProductList (resolve)
      }
      reject('Hubo un ERROR!');
    }, 2000);
  });


  useEffect(() => {
    getProducts
    .then((response) => {
      setProductList(response)
    })
    .catch((error)=> console.log(error));
  }, []);

  return (
    <div>
      <ItemList lista={productList} />
    </div>

  );
};


export default ItemListContainer;