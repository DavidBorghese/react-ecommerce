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
    <ButtonGroup aria-label="ItemCount">
      <Button variant="success" onPressButton={handleSubstract}>-</Button>
      <span>{count}</span>
      <Button variant="danger" onPressButton={handleAdd}>+</Button>
    </ButtonGroup>>
    <Button variant='primary'>Agregar al Carrito</Button>
  )

}

export default ItemCount;