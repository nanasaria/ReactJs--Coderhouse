import "./PurchaseDetailContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getPurchase from "../../services/purchase/getPurchase";
import ButtonBack from "../Buttons/ButtonBack/ButtonBack";

const PurchaseDetailContainer = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [date, setDate] = useState();

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    const data = await getPurchase(id);
    setDate(data.date.toDate().toLocaleString());
    setProducts(data.products);

    return products;
  };

  return (
    <div className="container">
      <ButtonBack />
      <div className="text-header-purchase">
        <h1>Compra #{id}</h1>
        <p>{date}</p>
      </div>

      <div className="purchase-detail">
        {products.map((product, index) => (
          <div className="card-cart" key={index}>
            <img src={product.imagem} alt="" />
            <div className="text-card">
              <h2 className="title-product">{product.nome}</h2>
              <div className="informations-product">
                <p className="quantity-product">
                  Quantidade: {product.quantityCart}
                </p>
                <p className="price-product">
                  Preço: <b>{product.preco} R$</b>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PurchaseDetailContainer;
