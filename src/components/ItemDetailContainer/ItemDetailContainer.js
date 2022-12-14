// import data from "../mockData";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import {RingLoader} from 'react-spinners'


const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();




  //Firebase

  const db = getFirestore();

  const getProduct = () => {
    const queryDoc = doc(db, 'items', id);

    getDoc(queryDoc)
      .then((res) => {
        setProduct({ id: res.id, ...res.data() })
      })
      .catch(error => console.log(error));
  }

  useEffect(() => {
    getProduct();
  }, [id]);


  // Firebase


  
  // USANDO EL MOCKDATA

  // useEffect(() => {
  //   getProduct
  //     .then((response) => {
  //       setProduct(response.find((product) => product.id === id));
  //     })
  //     .catch((error) => console.log(error));
  // }, [id]);

  // const getProduct = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(data);
  //   }, 2000);
  // });

  return (
    <div>
      
      {product ? (
        <ItemDetail product={product} />
      ) : (
        <RingLoader color="#6cacef" cssOverride={{margin:'80px', left: '40%',}}/>

      )}
    </div>
  );
};

export default ItemDetailContainer;