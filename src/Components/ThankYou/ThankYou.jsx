import React from "react";
import { useParams } from "react-router-dom";

function ThankYou() {
  const idOrder = useParams().idOrder;

  return (
    <div style={{ color: "black" }}>
      <h1>Gracias por confiar en nosotros!</h1>
      <h3>
        Con este ID podés seguir tu compra: <strong>{idOrder}</strong>
      </h3>
    </div>
  );
}

export default ThankYou;