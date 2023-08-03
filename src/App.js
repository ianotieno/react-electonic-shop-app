import React, { useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Nav from './components/Navbar';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import ShopContextProvider from './context/shop-context';
import SearchComponent from './Pages/SearchComponent'; // Import the SearchComponent

import './App.css';



function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="App">
      <ShopContextProvider>
        <BrowserRouter>
          <Nav onSearch={handleSearch} /> {/* Pass handleSearch as onSearch prop */}
          <div>
            <Routes>
              <Route path="/" exact element={<Shop />} />
              <Route path="/cart" exact element={<Cart />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;

