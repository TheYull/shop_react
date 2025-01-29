import axios from "axios";
import React, { useState, useEffect } from "react";
import s from "./Category.module.scss";

export const Category = () => {
  let [objects, setObjects] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setObjects(response.data);
      });
  }, []);
  return (
    <div className={s.Category}>
      {objects.map((item, idx) => (
        <button key={idx}>{item}</button>
      ))}
    </div>
  );
};
