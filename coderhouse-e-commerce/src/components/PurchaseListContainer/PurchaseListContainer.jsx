import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/LoginContext/LoginContext";
import ButtonBack from "../Buttons/ButtonBack/ButtonBack";
import "./PurchaseListContainer.css";
import getPurchases from "../../services/purchase/getPurchases";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";

const PurchaseListContainer = () => {
  const { currentUser } = useAuth();
  const [purchase, setPurchase] = useState([]);
  const navigate = useNavigate();

  const viewOneItem = (id) => {
    navigate(`/purchase/${id}`);
  };

  useEffect(() => {
    fetchData();
  }, [currentUser]);

  const fetchData = async () => {
    if (!currentUser) return;
    const data = await getPurchases(currentUser.uid);

    const items = data.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      quantity: doc.data().products.length,
    }));

    setPurchase(items);
  };

  return (
    <div className="container">
      <ButtonBack />
      <h1 className="title-purchase">Compras</h1>

      {purchase.length > 0 ? (
        <div className="purchases">
          {purchase.map((item, index) => (
            <button
              key={index}
              className="card-purchase"
              onClick={() => viewOneItem(item.id)}
            >
              <h3 className="cod-purchase">
                <ShoppingBagRoundedIcon></ShoppingBagRoundedIcon> #{item.id}
              </h3>
              <p className="date-purchase">
                {item.date ? item.date.toDate().toLocaleString() : "Sem data"}
              </p>
              <p className="quant-purchase">
                {item.quantity === 1
                  ? "1 Produto"
                  : `${item.quantity} Produtos`}
              </p>
              <p className="value-purchase">Valor: {item.value} R$</p>
            </button>
          ))}
        </div>
      ) : (
        <h2 className="empty-purchases">Você ainda não possui compras :(</h2>
      )}
    </div>
  );
};

export default PurchaseListContainer;
