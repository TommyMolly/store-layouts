import React from "react";
import ShopItem from "./ShopItem";
import { products } from "../data/products";

const ListView = () => {
  return (
    <div className="list-view">
      {products.map((product, index) => (
        <ShopItem key={index} item={product} />
      ))}
    </div>
  );
};

export default ListView;

