import React from "react";
import s from "./Cart.module.scss";
// import heart from "../../assets/img/heart.svg";

export const Cart = ({ productsInCart, setProductsInCart }) => {
  const removeProductsFromCart = (indexToRemove) => {
    setProductsInCart(
      productsInCart.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <div className={s.container}>
      <h2>Cart</h2>

      {productsInCart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div>
          {/* <button>Remove all products</button> */}
          <ul>
            {productsInCart.map((product, index) => (
              <li key={product.id}>
                <img src={product.image} alt={product.title} />
                {product.title} - {product.price} $
                <button onClick={() => removeProductsFromCart(index)}>
                  Remove From Cart
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
