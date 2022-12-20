import { createContext, useState } from "react";

export const cartContext = createContext();

// 2. Creamos nuestro Context Provider
export function CartContextProvider({ children }) {


  const [cart, setCart] = useState([]);

  function addToCart(product, count) {

    let itemAlreadyInCart = cart.findIndex(
      (itemInCart) => itemInCart.id === product.id
    );

    let newCart = [...cart];

    if (itemAlreadyInCart !== -1) {
      newCart[itemAlreadyInCart].count += count;
      setCart(newCart);
    } else {

      product.count = count;
      newCart.push(product);



      setCart(newCart);
    }
  }

  function itemsInCart() {
    let total = 0;
    cart.forEach((itemInCart) => (total = total + itemInCart.count));
    return total;
  }

  function clear() {
    setCart([])
  }

  function removeItem() {
    const newCart = [...cart];
    newCart.pop();
    setCart(newCart);

  }

  function priceInCart() {
    let totalPrice = 0;
    cart.forEach(
      (producto) =>
        (totalPrice = totalPrice + producto.price * producto.count)
    );
    return totalPrice;
  }





  return (
    <cartContext.Provider
      value={{ cart, addToCart, itemsInCart, removeItem ,priceInCart, clear}}
    >
      {children}
    </cartContext.Provider>
  );
}