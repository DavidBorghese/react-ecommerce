import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";



function Item({ title, imgurl, price, id }) {
  const urlDetail = `/detail/${id}`
  return (
      <Col sm={12} md={6} lg={3} className="g-4">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imgurl} alt={title} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>                
                $ {price}
              </Card.Text>
              <Link to= {urlDetail}>
                <Button variant="primary">Ver</Button>
              </Link>
            </Card.Body>
        </Card>
      </Col>
        );
  }

export default Item;
