import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import { Container, FormControl, Navbar, Dropdown, Badge, Button } from 'react-bootstrap';
import { PRODUCTS } from '../product'; // Assuming this is the correct path to the products file
import { ShopContext } from '../context/shop-context';
import '../Pages/cart.css';
import SearchComponent from '../Pages/SearchComponent';

const Nav = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { cartItems } = useContext(ShopContext);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="p-2">
        <Container fluid>
          <Navbar.Brand>
            <Link to="/" className="text-white">MacAgutu Stores</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <FormControl
              type="text"
              placeholder="Search a product"
              className="mr-sm-2 w-full sm:w-auto"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Dropdown className="ml-auto">
              <Dropdown.Toggle variant="success" id="dropdown-basic" className="cart-toggle">
                <ShoppingCart size={32} className="text-white" />
                <Badge className="cart-badge">{Object.values(cartItems).reduce((acc, curr) => acc + curr, 0)}</Badge>
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ minWidth: 370 }} className="cart-dropdown">
                {Object.entries(cartItems).map(([itemId, itemCount]) => {
                  if (itemCount > 0) {
                    const product = PRODUCTS.find((product) => product.id === Number(itemId));
                    return (
                      <Dropdown.Item key={product.id} className="cart-item">
                        <img
                          src={product.productImage}
                          alt={product.productName}
                          className="cart-item-image"
                        />
                        <div className="cart-item-details">
                          {`${product.productName} (x${itemCount})`}
                        </div>
                      </Dropdown.Item>
                    );
                  }
                  return null;
                })}
                <Dropdown.Divider />
                <Dropdown.Item>
                  <Button variant="primary" className="w-full cart-button">
                    <Link to="/cart" className="text-white">Go to Cart</Link>
                  </Button>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <SearchComponent searchQuery={searchQuery} />
      </Container>
    </>
  );
};

export default Nav;
