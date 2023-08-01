import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import ShopContextProvider from "./context/shop-context";
function App() {
  return (
    <div className="App">
    <ShopContextProvider>
    <BrowserRouter>
  <Navbar/>
  <div>
    <Routes>
    <Route path='/' exact element={<Shop/>}/>
    <Route path='/cart' exact element={<Cart/>}/>
    </Routes>
  </div>
  </BrowserRouter>
  </ShopContextProvider>
  </div>
  );
}

export default App;
