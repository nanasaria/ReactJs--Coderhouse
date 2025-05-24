import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import itemsStock from "../data/itemsStock.json";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const item = itemsStock.find((product) => product.id === Number(id));
    setProduct(item);
  }, [id]);

  return (
    <div className="container detail-item">
      <section className="view-product">
        <img src={product?.imagem} alt="" />
      </section>
      <section className="info-product">
        <h2>{product?.nome}</h2>
        <h1>R$ {product?.preco}</h1>
        <p>Quantidade disponível: {product?.quantidade}</p>

        <div className="buy">
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
              setCount(
                count < product.quantidade ? count + 1 : product.quantidade
              )
            }
          >
            +
          </button>
          <button className="btn-buy">Comprar</button>
        </div>
      </section>
    </div>
  );
};

export default ItemDetailContainer;
