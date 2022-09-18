import data from "../mockData";
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import resolve from "resolve";

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
        reject("Hubo un ERROR!");
      }, 2000);
    });

    getProducts
      .then((response) => {
        if (categoryName) {
          setProductList(
            response.filter((prod) => prod.categoria === categoryName)
          );
        } else {
          setProductList(response);
        }
      })
      .catch((error) => console.log(error));
  }, [categoryName]);

  return (
    <div>
      <ItemList lista={productList} />
    </div>
  );
};

export default ItemListContainer;