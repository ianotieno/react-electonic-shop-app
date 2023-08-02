import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Placeholder, ShoppingCart } from 'phosphor-react';
import { Container, FormControl, Navbar, Dropdown, Badge } from 'react-bootstrap';
import { PRODUCTS } from '../product'// Assuming this is the correct path to the products file
import { ShopContext } from '../context/shop-context'



const Nav = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { cartItems } = useContext(ShopContext);

  const filteredProducts = PRODUCTS.filter(
    (product) => product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Navbar bg="dark" variant="dark" style={{ height: 60 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">McAgutu Stores</Link>
        </Navbar.Brand>
        <Navbar.Text className="Search..">
          <FormControl
            style={{ width: 500 }}
            placeholder="Search a product"
            className="m-auto"
            aria-label="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Navbar.Text>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <Link to="/cart">
              <ShoppingCart size={32} />
            </Link>
            <Badge>{Object.values(cartItems).reduce((acc, curr) => acc + curr, 0)}</Badge>
          </Dropdown.Toggle>

          <Dropdown.Menu style={{ minWidth: 370 }}>
            {Object.entries(cartItems).map(([itemId, itemCount]) => {
              if (itemCount > 0) {
                const product = PRODUCTS.find((product) => product.id === Number(itemId));
                return (
                  <Dropdown.Item key={product.id}>
                    <Link to={`/product/${product.id}`}>
                      <img
                        src={product.productImage}
                        alt={product.productName}
                        style={{ height: 40, marginRight: 10 }}
                      />
                      {`${product.productName} (x${itemCount})`}
                    </Link>
                  </Dropdown.Item>
                );
              }
              return null;
            })}
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default Nav;

