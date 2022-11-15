import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function ItemCount({ stock }) {
        const [count, setCount] = useState(1);
      
        function handleAdd() {
          if (count < stock) setCount(count + 1);
        }
      
        function handleSubstract() {
          if (count > 1) setCount(count - 1);
        }

  return (
    <>
      <ButtonGroup aria-label="ItemCount" className="d-inline-flex">
        <Button variant="success" onClick={handleSubstract}>-</Button>
        <div className="mx-1 p-1">{count}</div>
        <Button variant="danger" onClick={handleAdd}>+</Button>
        <Button variant='primary' className="mx-1">Agregar al Carrito</Button>
      </ButtonGroup>
    </>    
  )

}

export default ItemCount;