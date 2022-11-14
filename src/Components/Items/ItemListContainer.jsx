import React from 'react'
import './ItemListContainer.css'
import Item from './Item'
import { useState, useEffect } from "react";
import getItems from "../../services/mockService";
import { useParams } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();

  async function getItemsAsync() {
    let respuesta = await getItems(idCategory);
    setProducts(respuesta);
  }

  useEffect(() => {
    getItemsAsync();
    return () => {
    };
  }, [idCategory]);

    return (
    <Container fluid>
      <Row>
      {products.map((product) => {
        return (
          <Item
            key={product.id}
            id={product.id}
            imgurl={product.imgurl}
            title={product.title}
            price={product.price}
            category={product.category}            
          />
        );
      })}
      </Row>
    </Container>
  )
}

export default ItemListContainer