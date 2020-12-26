import React from "react";
import { Navbar, Nav, Form, FormControl, Button, Image } from "react-bootstrap";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../images/logo.png";
function NavBar() {
  return (
    <div>
      <Navbar id="navbar-container">
        <Navbar.Brand id="logo-wrapper" href="#home">
          <Image id="logo" src={logo} />
          <h5 className="ml-2 my-auto"> BookStore </h5>
        </Navbar.Brand>
        <Nav id="categories" className="mr-auto">
          <Nav.Link href="#fantasy">Fantasy</Nav.Link>
          <Nav.Link href="#scifi">Scifi</Nav.Link>
          <Nav.Link href="#horror">Horror</Nav.Link>
          <Nav.Link href="#romance">Romance</Nav.Link>
          <Nav.Link href="#history">History</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
