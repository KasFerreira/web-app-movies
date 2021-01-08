import './heading.css'
import {Navbar, Nav, Form, FormControl, Button}from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { setLocalStorage } from '../../helpers/localstorage'



function Heading(){

    function handleChange(event){
      console.log(event.target.value)
      var term = event.target.value
      searchMovies(term)
    }
    async function searchMovies(term){

      const response = await axios.get(
        "https://api.themoviedb.org/3/search/movie?api_key=5f5639e7e6d8cd1f2e64643d369ab6e8&query="+term
      );
        console.log(response.data)
    }

    function logout(event){
      setLocalStorage("TokenJWT", "") 

    }
   

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
      <FormControl  onChange={handleChange} type="text" placeholder="search for a movie" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
    <Nav.Link href="/">Login</Nav.Link>
     <Nav.Link onClick={logout} href="/">Logout</Nav.Link>

  </Navbar.Collapse>
</Navbar>
    </div>
    
}

export default Heading;