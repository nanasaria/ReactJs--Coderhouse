import React from "react";
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

        <ul>
          <li className="navbar">
            <a className="item-nav" href="#streetwear">
              Streetwear
            </a>
            <a className="item-nav" href="#casual">
              Casual
            </a>
            <a className="item-nav" href="#esporte">
              Esporte
            </a>
            <a className="item-nav" href="#outlet">
              Outlet
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
