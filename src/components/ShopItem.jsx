import React from "react";

const ShopItem = ({ item }) => {
  return (
    <div className="shop-item">
      <img src={item.img} alt={item.name} />
      <div className="item-info">
        <h3>{item.name}</h3>
        <p className="item-color">{item.color}</p>
        <p className="item-price">${item.price}</p>
        <button>Добавить в корзину</button>
      </div>
    </div>
  );
};

export default ShopItem;
