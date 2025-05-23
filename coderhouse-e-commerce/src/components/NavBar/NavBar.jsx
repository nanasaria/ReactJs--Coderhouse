import React from "react";
import { Link } from "react-router-dom";
import "../NavBar/NavBar.css";
import CartWidget from "../CartWidget/CartWidget.jsx";
import logo from "../../assets/icon/logo.png";

const NavBar = () => {
  return (
    <div>
      <nav>
        <header className="header">
          <img src={logo} alt="Logo" />
          <CartWidget quantity="0" />
        </header>

        <ul className="navbar">
          <li>
            <Link className="item-nav" to="/">
              Streetwear
            </Link>
          </li>
          <li>
            <Link className="item-nav" to="/">
              Casual
            </Link>
          </li>
          <li>
            <Link className="item-nav" to="/">
              Esporte
            </Link>
          </li>
          <li>
            <Link className="item-nav" to="/">
              Outlet
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
