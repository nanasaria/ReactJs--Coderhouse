import { useState } from "react";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { Link } from "react-router-dom";
import "./Filter.css";

const Filter = () => {
  const [visible, setVisible] = useState(true);
  const [activeCategory, setActiveCategory] = useState("");

  const changeVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className="filter-container">
      <button className="btn-filter" onClick={changeVisible}>
        <FilterAltOutlinedIcon />
        Filtro
      </button>
      <div hidden={visible}>
        <ul className="list-filter">
          <li>
            <Link to="/colection">
              <button
                className={
                  activeCategory === "todos"
                    ? "item-filter active"
                    : "item-filter"
                }
                onClick={() => setActiveCategory("todos")}
              >
                Todos os Itens
              </button>
            </Link>
          </li>
          <li>
            <Link to="/colection/streetwear">
              <button
                className={
                  activeCategory === "streetwear"
                    ? "item-filter active"
                    : "item-filter"
                }
                onClick={() => setActiveCategory("streetwear")}
              >
                Streetwear
              </button>
            </Link>
          </li>
          <li>
            <Link to="/colection/casual">
              <button
                className={
                  activeCategory === "casual"
                    ? "item-filter active"
                    : "item-filter"
                }
                onClick={() => setActiveCategory("casual")}
              >
                Casual
              </button>
            </Link>
          </li>
          <li>
            <Link to="/colection/esporte">
              <button
                className={
                  activeCategory === "esporte"
                    ? "item-filter active"
                    : "item-filter"
                }
                onClick={() => setActiveCategory("esporte")}
              >
                Esporte
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
