import '../Header/heading.css'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button}from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'


function Heading(){
    return <div className="Heading">
  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">LucasFilms</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/movies">Movies</Nav.Link>
      <Nav.Link href="/perfis">Perfis</Nav.Link>
     
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="search for a movie" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
    <Nav.Link href="/login">Login</Nav.Link>
     <Nav.Link href="#link">Logout</Nav.Link>

  </Navbar.Collapse>
</Navbar>
    </div>
    
}

export default Heading;