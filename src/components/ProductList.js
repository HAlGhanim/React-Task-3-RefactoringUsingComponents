import React from "react";
import products from "../products";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const productList = products.map((product) => (
    <div className="product">
      <img className="productImage" alt={product.name} src={product.image} />
      <p className="text">{product.name}</p>
      <p className="text">{product.price} KD</p>
    </div>
  ));
  return <div className="list">{productList}</div>;
};

export default ProductList;
