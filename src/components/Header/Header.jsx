import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";
import logo from "../../assets/logo/instock-logo.svg";

export default function Header() {
  return (
    <header className="header">
      <section className="header__container">
        <article className="header__branding">
          <img src={logo} alt="" className="header__logo" />
        </article>
        <article className="header__links">
          <NavLink
            to="/warehouses"
            className={(isActive) =>
              "header__warehouse-link" + (!isActive ? "" : "--active")
            }
          >
            Warehouses
          </NavLink>
          <NavLink
            strict
            to="/inventory"
            className={(isActive) =>
              "header__inventory-link" + (!isActive ? "" : "--active")
            }
          >
            Inventory
          </NavLink>
        </article>
      </section>
    </header>
  );
}
