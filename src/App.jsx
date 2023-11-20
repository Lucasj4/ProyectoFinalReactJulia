
import "./App.css";
import Sidebar from "./assets/components/Sidebar/Sidebar";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./assets/components/Home/Home";
import Cart from "./assets/components/Cart/Cart";
import ItemDetailContainer from './assets/components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './assets/components/ItemListContainer/ItemListContainer'
import CarritoProvider from './assets/components/context/CarritoContext'
import Checkout from "./assets/components/Checkout/Checkout";
function App() {
  return (
    <>
      <BrowserRouter>
      <CarritoProvider>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
          <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/checkout' element={<Checkout/>} />


        </Routes>
        </Sidebar>
      </CarritoProvider>

       

      </BrowserRouter>
    </>
  );
}

export default App;
