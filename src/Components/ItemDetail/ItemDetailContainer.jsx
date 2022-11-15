import { useState, useEffect } from "react";
import { getSingleItem } from "../../services/mockService";
import ItemDetail from "./ItemDetail";

import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);

  const { idItem } = useParams();


  async function getItemsAsync() {
    let respuesta = await getSingleItem(idItem);
    setProduct(respuesta);
  }

  useEffect(() => {
    getItemsAsync();
  }, []);

  return <ItemDetail product={product} />;
}
export default ItemDetailContainer;