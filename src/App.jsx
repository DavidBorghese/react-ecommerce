import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/Items/ItemListContainer';
import ItemDetailContainer from  './Components/ItemDetail/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
import CartView from './Components/CartView/CartView';
import ThankYou from './Components/ThankYou/ThankYou';



function App() {
  return (
    <div className='app'>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:idCategory" element={<ItemListContainer />} />
            <Route path="/detail/:idItem" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartView />} />
            <Route path="/thankyou/:idOrder" element={<ThankYou />} />
            <Route path="*" element={<h1>Error 404: No existe la página deseada</h1>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  
  )
}

export default App;
