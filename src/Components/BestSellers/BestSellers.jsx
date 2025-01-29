import s from "./BestSellers.module.scss";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BestSellersItem } from "./BestSellersItem/BestSellersItem";

export const BestSellers = ({ productsInCart, setProductsInCart }) => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      //   console.log(response);
      setProducts(response.data);
    });
  }, []);

  return (
    <div className={s.BestSellers}>
      {products.map((product) => (
        <BestSellersItem
          product={product}
          key={product.id}
          setProductsInCart={setProductsInCart}
          productsInCart={productsInCart}
        />
      ))}
    </div>
  );
};
