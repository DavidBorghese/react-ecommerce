import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


function ItemDetail({ product }) {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col md={6}>
        <Card>
        <Card.Img variant="top" src={product.imgurl} alt={product.title} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{product.price}</Card.Subtitle>
          <Card.Text>
          {product.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <ItemCount  
          stock={product.stock} 
        />
        </Card.Footer>
      </Card>
        </Col>
    </Row>
  </Container>
  )
}

export default ItemDetail