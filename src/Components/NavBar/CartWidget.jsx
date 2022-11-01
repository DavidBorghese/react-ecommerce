import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";


function CartWidget(props) {
  return (
  <>    
    <FontAwesomeIcon icon= { faCartShopping }  />
    <h3>{props.amount}</h3>
  </>

  )
}

export default CartWidget