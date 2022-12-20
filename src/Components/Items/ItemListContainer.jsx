import React from 'react'

import { useState, useEffect } from "react";

import getItems, { getItemsByCategory } from '../../services/firestore';
//import getItems from '../../services/mockService';
import { useParams } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ItemList from './ItemList';
import Loader from '../Loaders/Loader';



// function ItemListContainer() {
//   const [products, setProducts] = useState([null]);
//   const { idCategory } = useParams();

//   async function getItemsAsync() {
//     if (!idCategory) {
//       let respuesta = await getItems();
//       setProducts(respuesta);
//     } else {
//       let respuesta = await getItemsByCategory(idCategory);
//       setProducts(respuesta);
//     }
//   }

//   useEffect(() => {
//     getItemsAsync();
//   }, [idCategory]);

function ItemListContainer() {
  const [products, setProducts] = useState(null);
  /* const [isLoading, setIsLoading] = useState(true) */
  const { idCategory } = useParams();

  async function getItemsAsync() {
    let respuesta = await getItems(idCategory);
    setProducts(respuesta);
  }

  useEffect(() => {
    getItemsAsync();
    return () => {
      console.log("Componente desmontado");
    };
  }, [idCategory]);

    return (
    <Container fluid>
      <Row>
        {products ? <ItemList products={products}/> : <Loader/>}
      </Row>
    </Container>
  )
}

export default ItemListContainer