import { useContext } from "react";
import { CartContext } from "../../../context/CartContext/CartContext";
import { useNavigate } from "react-router-dom";
import "./CartWidget.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCartComponent = () => {
    navigate("/cart");
  };

  return (
    <button onClick={goToCartComponent} className="btn-cartWidget">
      <a className="shopping-cart">
        <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
        <p className="quantity">{totalQuantity}</p>
        <p className="text-cart">Carrinho</p>
      </a>
    </button>
  );
};

export default CartWidget;
