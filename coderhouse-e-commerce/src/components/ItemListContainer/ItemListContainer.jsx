import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ItemListContainer.css";
import Filter from "./Filter/Filter";
import getProducts from "../../services/getProducts";

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [category]);

  const fetchData = async () => {
    const data = await getProducts();
    const items = [];

    data.forEach((doc) => {
      items.push(doc.data());
    });

    if (category) {
      const productsWithCategory = items.filter(
        (product) => product.categoria === category
      );

      if (category === "outlet") {
        const productOutlet = items.filter((product) => product.outlet);
        return setProducts(productOutlet);
      }

      return setProducts(productsWithCategory);
    }
    setProducts(items);
  };

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
