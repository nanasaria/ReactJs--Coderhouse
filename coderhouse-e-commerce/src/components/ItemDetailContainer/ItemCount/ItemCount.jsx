import "./ItemCount.css";
import { useState, useContext } from "react";
import { CartContext } from "../../../context/CartContext/CartContext";

const ItemCount = ({ item }) => {
  const [count, setCount] = useState(1);
  const [isVisible, setIsVisible] = useState(true);
  const { setProducts } = useContext(CartContext);

  const updateItems = () => {
    const newProduct = {
      ...item,
      quantityCart: count,
    };

    setIsVisible(!isVisible);
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return (
    <div className={isVisible ? "buy" : "hidden"}>
      <button
        className="btn-quant-product change"
        onClick={() => setCount(count > 1 ? count - 1 : 1)}
      >
        -
      </button>
      <button className="btn-quant-product">{count}</button>
      <button
        className="btn-quant-product change"
        onClick={() =>
          setCount(count < item?.quantidade ? count + 1 : item?.quantidade)
        }
      >
        +
      </button>
      <button
        className="btn-buy"
        onClick={updateItems}
        disabled={item?.quantidade === 0}
      >
        {item?.quantidade === 0 ? "Sem estoque" : "Adicionar ao Carrinho"}
      </button>
    </div>
  );
};

export default ItemCount;
