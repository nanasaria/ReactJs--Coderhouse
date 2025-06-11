import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import getProducts from "../../services/products/getProducts";
import ItemCount from "./ItemCount/ItemCount";
import ButtonBack from "../Buttons/ButtonBack/ButtonBack";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    const data = await getProducts();
    const itemsStock = [];

    data.forEach((doc) => {
      itemsStock.push(doc.data());
    });

    const item = itemsStock.find((product) => product.id === Number(id));
    setProduct(item);

    return product;
  };

  return (
    <div className="container detail-item">
      <ButtonBack />
      <section className="view-product">
        <img src={product?.imagem} alt="" />
      </section>
      <section className="info-product">
        <h2>{product?.nome}</h2>
        <h1>R$ {product?.preco}</h1>
        <p>
          Quantidade disponível:{" "}
          {product?.quantidade === 0 ? "Sem estoque" : product?.quantidade}
        </p>

        <ItemCount item={product} />
      </section>
    </div>
  );
};

export default ItemDetailContainer;
