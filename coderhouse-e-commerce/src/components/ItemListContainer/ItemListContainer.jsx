import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ItemListContainer.css";
import itemsStock from "../data/itemsStock.json";
import Filter from "../Filter/Filter";

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (category) {
      const productsWithCategory = itemsStock.filter(
        (product) => product.categoria === category
      );

      if (category === "outlet") {
        const productOutlet = itemsStock.filter((product) => product.outlet);
        return setProducts(productOutlet);
      }

      return setProducts(productsWithCategory);
    }
    setProducts(itemsStock);
  }, [category]);

  const viewOneItem = (id) => {
    navigate(`/item/${id}`);
  };

  return (
    <div className="container">
      <h1 className="items-category">
        {category ? category.toUpperCase() : "NOSSA COLEÇÃO"}
      </h1>
      <Filter />
      <div className="items">
        {products.map((product) => (
          <button
            className="item-btn"
            key={product.id}
            onClick={() => viewOneItem(product.id)}
          >
            <div className="card-item">
              <img src={product.imagem} alt="" />
              <p className="title-item">{product.nome}</p>
              <span className="info-price">
                <p className="category">{product.categoria}</p>
                <p className="price">R$ {product.preco}</p>
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
