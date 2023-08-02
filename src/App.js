import { Route, BrowserRouter, Routes } from "react-router-dom";
import Nav from "./components/Navbar";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import ShopContextProvider from "./context/shop-context";
import"./App.css";
function App() {
  return (
    <div className="App">
    <ShopContextProvider>
    <BrowserRouter>
  <Nav/>
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
