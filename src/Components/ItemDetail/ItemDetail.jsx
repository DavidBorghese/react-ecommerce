import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ItemCount from '../ItemCount/ItemCount';
import { Button } from 'react-bootstrap';
import { useContext, useState } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";


function ItemDetail({ product }) {
  const [isInCart, setIsInCart] = useState(false);
  const { addToCart } = useContext(cartContext);

  function onAddToCart(count) {
    setIsInCart(count);
    addToCart(product, count);
  }


  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col md={6}>
        <Card>
        <Card.Img variant="top" src={product.imgurl} alt={product.title} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">$ {product.price}</Card.Subtitle>
          <Card.Text>
          {product.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        {isInCart ? (
          <Link to="/cart">
            <Button className="ms-3" color="primary" block size="lg">Ir al Carrito</Button>
          </Link>) 
          : (<ItemCount onAddToCart={onAddToCart} stock={product.stock} />)
          }        
        </Card.Footer>
      </Card>
        </Col>
    </Row>
  </Container>
  )
}

export default ItemDetail;