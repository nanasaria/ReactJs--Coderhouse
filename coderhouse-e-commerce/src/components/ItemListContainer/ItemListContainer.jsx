import React from "react";
import "../ItemListContainer/ItemListContainer.css";

const ItemListContainer = ({ message }) => {
  return (
    <div>
      <h3>{message}</h3>
    </div>
  );
};

export default ItemListContainer;
