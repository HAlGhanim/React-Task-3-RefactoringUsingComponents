import React from "react";
import products from "../products";

const ProductItem = (props) => {
  return (
    <div className="product">
      <img
        className="productImage"
        alt={products[0].name}
        src={products[0].image}
      />
      <p className="text">{products[0].name}</p>
      <p className="text">{products[0].price} KD</p>
    </div>
  );
};

export default ProductItem;
