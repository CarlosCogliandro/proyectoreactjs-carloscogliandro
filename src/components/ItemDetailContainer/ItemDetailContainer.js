import data from "../mockData";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();



  
  //Firebase

  const db = getFirestore();
  
  const queryDoc = doc(db, 'items', 'HoesbG7sKa0m6WUqUhx5');
  
  getDoc(queryDoc).then(res => {
    console.log(res.id);
    console.log(res.data())
  })
  .catch(error => console.log(error));

  // Firebase




  useEffect(() => {
    getProduct
      .then((response) => {
        setProduct(response.find((product) => product.id === id));
      })
      .catch((error) => console.log(error));
  }, [id]);

  const getProduct = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });

  return (
    <div>
      {product ? (
        <ItemDetail product={product} />
      ) : (
        <h2>Obteniendo el detalle...</h2>
      )}
    </div>
  );
};

export default ItemDetailContainer;