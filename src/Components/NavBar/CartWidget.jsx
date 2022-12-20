import React, {useContext} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";


function CartWidget() {
  const miContext = useContext(cartContext);

  return (
  <> 
    <Link to="/cart">
      <FontAwesomeIcon icon= { faCartShopping } className="carrito" />
    </Link>
    <span style={{ color: "white" }}>{miContext.itemsInCart() || ''}</span>
  </>

  )
}

export default CartWidget