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
              Home
            </Link>
          </li>
          <li>
            <Link className="item-nav" to="/colection/streetwear">
              Streetwear
            </Link>
          </li>
          <li>
            <Link className="item-nav" to="/colection/casual">
              Casual
            </Link>
          </li>
          <li>
            <Link className="item-nav" to="/colection/esporte">
              Esporte
            </Link>
          </li>
          <li>
            <Link className="item-nav" to="/colection/outlet">
              Outlet
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
