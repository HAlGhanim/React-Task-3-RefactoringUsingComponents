import React from "react";
import products from "../products";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const productList = products.map((product) => {
    return <ProductItem key={product.id} product={product} />;
  });
  return <div className="list">{productList}</div>;
};

export default ProductList;
