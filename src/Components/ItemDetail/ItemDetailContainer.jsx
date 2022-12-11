import { useState, useEffect } from "react";
import { getSingleItem } from "../../services/mockService";
import ItemDetail from "./ItemDetail";
import Loader from "../Loaders/Loader";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { idItem } = useParams();

  async function getItemsAsync() {
    getSingleItem(idItem).then((respuesta) => {
      setProduct(respuesta);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    getItemsAsync();
  }, []);

  if (isLoading) return <Loader />;

  return <ItemDetail product={product} />;
}
export default ItemDetailContainer;