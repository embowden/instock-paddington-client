import React from "react";
import { useLocation } from "react-router-dom";
import "./header.scss";
import logo from "../../assets/logo/instock-logo.svg";

export default function Header() {
  const currentPath = useLocation().pathname;
  const warehouseClass = "header__warehouse-link";
  const inventoryClass = "header__inventory-link";

  const warehouseActive = (currClass) => {
    if (
      currentPath ===
      ("/" || "/warehouses-details" || "/warehouses-edit" || "/warehouses-add")
    ) {
      console.log("this is a warehouse url");
      return currClass + "--active";
    } else {
      return currClass;
    }
  };

  const inventoryActive = (currClass) => {
    if (
      currentPath ===
      ("/inventory" ||
        "/inventory-details" ||
        "/inventory-edit" ||
        "/inventory-add")
    ) {
      console.log("this is an inventory url");
      return currClass + "--active";
    } else {
      return currClass;
    }
  };

  return (
    <section className="header">
      <section className="header__container">
        <article className="header__branding">
          <img src={logo} alt="" className="header__logo" />
        </article>
        <article className="header__links">
          <button className={warehouseActive(warehouseClass)}>
            Warehouses
          </button>
          <button className={inventoryActive(inventoryClass)}>Inventory</button>
        </article>
      </section>
    </section>
  );
}
