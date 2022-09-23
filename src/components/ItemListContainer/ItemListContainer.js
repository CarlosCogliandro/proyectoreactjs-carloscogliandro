import data from "../mockData";
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, getDocs, collection } from "firebase/firestore";

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const { categoryName } = useParams();



  
  //Firebase ---


  const getProducts = () => {
    const db = getFirestore();
    const querySnapshot = collection(db, 'items');
    getDocs(querySnapshot).then((response) => {
      const data = response.docs.map((doc) => {
        // return doc.data()
        return {id: doc.id, ...doc.data() }
      })
      setProductList(data)
    })
    .catch((error) => console.log(error))
  }



  useEffect(() => {
    getProducts();
  }, [categoryName]);


  //--- Firebase




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