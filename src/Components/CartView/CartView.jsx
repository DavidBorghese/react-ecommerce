import React , { useContext}from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { cartContext } from "../../context/cartContext";
import { useNavigate } from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap'
import CartForm from './CartForm';

function CartView() {
  const { cart, removeItem, clear, priceInCart } = useContext(cartContext);
  let navegar= useNavigate();
  
  if (cart.length === 0) 
    return  (
      <Container className="py-5 h-100">
        <Row className="justify-content-center align-items-center h-100">
          <Col md="10">

            <Card>
              <CardBody>
                <LinkContainer to="/">
                  <Button className="ms-3" color="primary" block size="lg" >
                    Carrito Vacio, vuelva a comprar
                  </Button>
                </LinkContainer>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <h1>Total Compra : {priceInCart()}</h1>
                <Button className="ms-3" color="danger" block size="lg" onClick={ () => clear()}>
                  Vaciar Compra
                </Button>
              </CardBody>
            </Card>
          </Col>        
        </Row>
    </Container>
    );
    
    async function handleCheckout(evt, data) {
      const order = {
        buyer: data,
        items: cart,
        total: 0,
        date: new Date(),
      };
  
      const orderId = await createOrder(order);
      navigate(`/thankyou/${orderId}`);
    }

  return (
    <Container className="py-5 h-100">
    <Row className="justify-content-center align-items-center h-100">
      <Col md="10">

    {cart.map((item) => (
        <Card  key={item.id} className="rounded-3 mb-4">
          <Card.Body className="p-4">
            <Row className="justify-content-between align-items-center">
              <Col md="2" lg="2" xl="2">
                <Card.Img className="rounded-3" fluid
                  src={item.imgurl}
                  alt={item.title} />
              </Col>
              <Col md="3" lg="3" xl="3">
                <p className="lead fw-normal mb-2">{item.title}</p>
                <p>
                  <span className="text-muted">Unidades: {item.count}</span>
                </p>
              </Col>
              <Col md="3" lg="2" xl="2" className="offset-lg-1">
                <h5 className="mb-0">
                  ${item.price}
                </h5>
              </Col>
              <Col md="1" lg="1" xl="1" className="text-end">
              <i className="fas fa-trash fa-lg" onClick={() => removeItem(item.id)}></i>
              </Col>
            </Row>
          </Card.Body>
        </Card>
))}

        <Card>
          <Card.Body>
            <h1>Total Compra : {priceInCart()}</h1>
            <Button className="ms-3" color="danger" block size="lg" onClick={ () => clear()}>
              Vaciar Compra
            </Button>
            <Card.Footer>
              <CartForm onSubmit={handleCheckout}  />
            </Card.Footer>
          </Card.Body>
        </Card>
        </Col>        
    </Row>
  </Container>

)
}

export default CartView