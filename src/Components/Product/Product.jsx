import s from "./Product.module.scss";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Product = ({ setProductsInCart, productsInCart }) => {
  const [product, setProduct] = useState(null);
  let { productId } = useParams();
  // console.log(productId);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error("Помилка завантаження продукту:", err));
  }, [productId]);

  const addToCartHandler = () => {
    setProductsInCart([...productsInCart, product]);
  };

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className={s.Product}>
      <img src={product.image} alt={product.title} />
      <div className={s.container}>
        <h1>{product.title}</h1>
        <h2>Price: {product.price}$</h2>
        <h2>Category: {product.category}</h2>
        <p>{product.description}</p>
        <button onClick={addToCartHandler}>Add to Cart</button>
      </div>
    </div>
  );
};
