import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState } from "react";
import { Header } from "./Components/Header/Header";
import { BestSellers } from "./Components/BestSellers/BestSellers";
import { Product } from "./Components/Product/Product";
import { Address } from "./Components/Address/Address";
import { Category } from "./Components/Category/Category";
import { Cart } from "./Components/Cart/Cart";
import { Footer } from "./Components/Footer/Footer";
import "./App.css";

// import router from "./routes/routes";

export default function App() {
  const [productsInCart, setProductsInCart] = useState([]);

  // Компонент для обгортки Layout
  const Layout = ({ productsInCart, setProductsInCart }) => {
    return (
      <>
        <Header />
        <main>
          {/* Вставляємо Outlet для відображення дочірніх маршрутів */}
          <Outlet context={{ productsInCart, setProductsInCart }} />
        </main>
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: (
          <Layout
            productsInCart={productsInCart}
            setProductsInCart={setProductsInCart}
          />
        ),
        children: [
          {
            index: true,
            element: (
              <BestSellers
                productsInCart={productsInCart}
                setProductsInCart={setProductsInCart}
              />
            ),
          },
          {
            path: "/category",
            element: <Category />,
          },
          {
            path: "/product/:productId",
            element: (
              <Product
                productsInCart={productsInCart}
                setProductsInCart={setProductsInCart}
              />
            ),
          },
          {
            path: "/address",
            element: <Address />,
          },
          {
            path: "/cart",
            element: (
              <Cart
                productsInCart={productsInCart}
                setProductsInCart={setProductsInCart}
              />
            ),
          },
        ],
      },
    ],
    { basename: "/shop_react" }
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
