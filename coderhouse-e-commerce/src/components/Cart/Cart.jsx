import "./Cart.css";
import { useContext, useMemo } from "react";
import { CartContext } from "../../context/CartContext/CartContext";
import ButtonBack from "../Buttons/ButtonBack/ButtonBack";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Cart = () => {
  const { products, setProducts } = useContext(CartContext);

  const total = useMemo(() => {
    return products.reduce(
      (result, product) => result + product.preco * product.quantityCart,
      0
    );
  }, [products]);

  const deleteItem = (id) => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  };

  return (
    <div className="container cart-preview">
      <ButtonBack />

      <div className={total !== 0 ? "hidden" : "cartEmpty"}>
        <ShoppingCartOutlinedIcon fontSize="large"></ShoppingCartOutlinedIcon>
        <h1>Carrinho Vazio...</h1>
      </div>

      <section className={total === 0 ? "hidden" : "info-products"}>
        {products.map((product, index) => (
          <div className="card-cart" key={index}>
            <img src={product.imagem} alt="" srcset="" />
            <div className="text-card">
              <h2 className="title-product">{product.nome}</h2>
              <div className="informations-product">
                <p className="quantity-product">
                  Quantidade: {product.quantityCart}
                </p>
                <p className="price-product">
                  Preço: <b>{product.preco} R$</b>
                </p>
                <button
                  className="deleteItem"
                  onClick={() => deleteItem(product.id)}
                >
                  <DeleteIcon fontSize="large"></DeleteIcon>
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className={total === 0 ? "hidden" : "info-price-cart"}>
        <div className="resume-price">
          <h1>Resumo</h1>
          <p>
            Total: <b>{total}</b> R$
          </p>
          <button>
            Finalizar Pedido
            <ShoppingCartOutlinedIcon fontSize="medium"></ShoppingCartOutlinedIcon>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Cart;
