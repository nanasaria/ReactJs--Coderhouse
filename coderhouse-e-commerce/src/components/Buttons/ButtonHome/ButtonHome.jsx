import React from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import "./ButtonHome.css";

const ButtonHome = ({ text }) => {
  return (
    <button className="button-to-shop">
      <ShoppingBagOutlinedIcon fontSize="large" />
      {text}
    </button>
  );
};

export default ButtonHome;
