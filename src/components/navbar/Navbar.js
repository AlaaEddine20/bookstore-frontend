import React from "react";
import { Navbar, Image } from "react-bootstrap";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../images/logo.png";

function NavBar() {
  return (
    <>
      <Navbar id="navbar-container">
        <div className="box">
          <Navbar.Brand id="logo-wrapper" href="#home">
            <Image id="logo" src={logo} />
            <h4 className="ml-2 my-auto"> BookStore </h4>
          </Navbar.Brand>
        </div>
        <div>
          <div className="categories">
            <div className="nav-link-wrapper mx-2" href="#fantasy">
              <p className="nav-links my-auto">Fantasy</p>
            </div>
            <div className="nav-link-wrapper mx-2" href="#scifi">
              <p className="nav-links my-auto">Scifi</p>
            </div>
            <div className="nav-link-wrapper mx-2" href="#horror">
              <p className="nav-links my-auto">Horror</p>
            </div>
            <div className="nav-link-wrapper mx-2" href="#romance">
              <p className="nav-links my-auto">Romance</p>
            </div>
            <div className="nav-link-wrapper mx-2" href="#history">
              <p className="nav-links my-auto">History</p>
            </div>
          </div>
        </div>
      </Navbar>
    </>
  );
}

export default NavBar;
