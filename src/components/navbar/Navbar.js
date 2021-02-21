import React, { useState } from "react";
import { Navbar, Image } from "react-bootstrap";
import logo from "../../images/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

function NavBar(props) {
  const [showBg, setShowBg] = useState(false);

  const showBackground = () => {
    if (window.scrollY >= 10) {
      setShowBg(true);
    } else {
      setShowBg(false);
    }
  };

  window.addEventListener("scroll", showBackground);

  return (
    <div id="navbar-wrapper">
      <Navbar className={showBg ? "navbar active" : "navbar"}>
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
    </div>
  );
}

export default NavBar;
