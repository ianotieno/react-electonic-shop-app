import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Placeholder, ShoppingCart } from 'phosphor-react';
import { Container, FormControl, Navbar, Dropdown, Badge , Button} from 'react-bootstrap';
import { PRODUCTS } from '../product'// Assuming this is the correct path to the products file
import { ShopContext } from '../context/shop-context'
import '../Pages/cart.css'
import SearchComponent from '../Pages/SearchComponent';


const Nav = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { cartItems } = useContext(ShopContext);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
    <Navbar bg="dark" variant="dark" style={{ height: 60 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">McAgutu Stores</Link>
        </Navbar.Brand>
        <Navbar.Text className="Search">
          <FormControl
            style={{ width: 500 }}
            placeholder="Search a product"
            className="m-auto"
            aria-label="Search"
            value={searchQuery}
            onChange={handleSearch}
          />
        </Navbar.Text>

        <Link to="/cart" style={{ textDecoration: 'none', marginRight: 10 }}>
          <ShoppingCart size={32} />
          <Badge>{Object.values(cartItems).reduce((acc, curr) => acc + curr, 0)}</Badge>
        </Link>

        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Options
          </Dropdown.Toggle>
          <Dropdown.Menu style={{ minWidth: 370 }}>
            <Dropdown.Divider />
            <Dropdown.Item>
              <Link to="/carts">Go to Cart</Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container> 
    </Navbar>
    <Container>
    <SearchComponent searchQuery={searchQuery} />
  </Container>
  </>
  );
};

export default Nav;

