import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Placeholder, ShoppingCart } from 'phosphor-react';
import { Container, FormControl, Navbar, Dropdown, Badge , Button} from 'react-bootstrap';
import { PRODUCTS } from '../product'// Assuming this is the correct path to the products file
import { ShopContext } from '../context/shop-context'
import '../Pages/cart.css'




const Nav = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { cartItems } = useContext(ShopContext);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value); // Call the onSearch prop to update searchQuery in the App component
  };

  return (
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
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <Link to="/cart">
              <ShoppingCart size={32} />
            </Link>
            <Badge>{Object.values(cartItems).reduce((acc, curr) => acc + curr, 0)}</Badge>
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
  );
};

export default Nav;








