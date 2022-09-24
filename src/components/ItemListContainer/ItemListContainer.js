import data from "../mockData";
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const { categoryName } = useParams();




  //    Firebase ---


  const getProducts = () => {
    const db = getFirestore();
    const querySnapshot = collection(db, 'items');

    // const query = categoryName ? where('category', '==', categoryName) : null     LO VAMOS A VER MAS ADELANTE

    if (categoryName) {
      const queryFilter = query(
        querySnapshot, where('categoryId', '==', categoryName)
      );
      getDocs(queryFilter).then((response) => {
        const data = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() }
        })
        setProductList(data);
      });
    } else {
      getDocs(querySnapshot).then((response) => {
        const data = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() }
        });
        setProductList(data)
      })
    }
  }

  useEffect(() => {
    getProducts();
  }, [categoryName]);


  //    --- Firebase


  
  // USANDO EL MOCKDATA

  // useEffect(() => {
  //   const getProducts = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(data);
  //       reject("Hubo un ERROR!");
  //     }, 2000);
  //   });

  //   getProducts
  //     .then((response) => {
  //       if (categoryName) {
  //         setProductList(
  //           response.filter((prod) => prod.categoria === categoryName)
  //         );
  //       } else {
  //         setProductList(response);
  //       }
  //     })
  //     .catch((error) => console.log(error));
  // }, [categoryName]);

  return (
    <div>
      <ItemList lista={productList} />
    </div>
  );
};

export default ItemListContainer;