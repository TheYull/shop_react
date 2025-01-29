import React from "react";
import style from "./BestSellersItem.module.scss";
import { useNavigate } from "react-router-dom";

export const BestSellersItem = ({
  product,
  setProductsInCart,
  productsInCart,
}) => {
  let navigate = useNavigate();

  const onClickHandler = () => {
    navigate(`/product/${product.id}`);
  };

  const addToCartHandler = () => {
    setProductsInCart([...productsInCart, product]); // Додаємо товар у кошик
    // navigate(`/cart`);
  };

  return (
    <div className={style.product}>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.price}$</p>
      <button onClick={onClickHandler}>Show more...</button>
      <button onClick={addToCartHandler}>Add to Card</button>
    </div>
  );
};
