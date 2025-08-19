import React from "react";

const ShopCard = ({ product }) => (
  <div className="shop-card">
    <img src={product.img} alt={product.name} />
    <div className="card-content">
      <div className="card-top">
        <h3>{product.name}</h3>
        <p>{product.color}</p> {}
      </div>
      <div className="card-bottom">
        <p>${product.price}</p>
        <button>Добавить в корзину</button>
      </div>
    </div>
  </div>
);

export default ShopCard;
