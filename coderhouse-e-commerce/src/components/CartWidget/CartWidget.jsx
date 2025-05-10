import React from "react";
import "../CartWidget/CartWidget.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const CartWidget = ({ quantity }) => {
  return (
    <div>
      <a className="shopping-cart">
        <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
        <p className="quantity">{quantity}</p>
        <p className="text-cart">Carrinho</p>
      </a>
    </div>
  );
};

export default CartWidget;
