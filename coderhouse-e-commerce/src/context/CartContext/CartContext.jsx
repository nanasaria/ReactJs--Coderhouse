import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(0);
  const [products, setProducts] = useState([]);

  const totalQuantity = products.reduce(
    (total, product) => total + product.quantityCart,
    0
  );

  const values = {
    quantity,
    setQuantity,
    products,
    setProducts,
    totalQuantity,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
