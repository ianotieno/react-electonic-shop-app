import React from 'react'
import { Link } from 'react-router-dom'
import{Placeholder, ShoppingCart} from 'phosphor-react'
import { Container, FormControl, Navbar,Dropdown ,Badge } from 'react-bootstrap'
const Nav = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{height:60}}>
      <Container>
        <Navbar.Brand>
        <Link to="/">McAgutu Stores</Link>
        </Navbar.Brand>
        <Navbar.Text className="Search..">
          <FormControl style={{width:500}}
          Placeholder="Search a product"
          className="m-auto"
          aria-label="Search"
        />
        </Navbar.Text>
        
      </Container>
    </Navbar>
    

     
  );
};

export default Nav


    
    