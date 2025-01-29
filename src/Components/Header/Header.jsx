import React from "react";
import logo from "../../assets/img/logo.svg";
import "./Header.scss";
import { CartIcon } from "../Cart/CartIcon/CartIcon";
import { NavLink } from "react-router";

export const Header = () => {
  return (
    <header>
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <nav>
        <NavLink to="/category">Category</NavLink>
        <NavLink to="/address">Address</NavLink>
        <NavLink to="/cart" href="#">
          <CartIcon />
        </NavLink>
      </nav>
    </header>
  );
};
