import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import smallLogo from "../../assets/logo/instock-logo.svg";
// import bigLogo from "../../assets/logo/instock-logo-2x.png";

export default function Header() {
  return (
    <section className="header">
      <section className="header__container">
        <article className="header__branding">
          <img src={smallLogo} alt="" className="header__logo" />
        </article>
        {/* <article className="header__links">
          <Link to={"/"}>Warehouses</Link>
          <Link to={"/inventory"}>Inventory</Link>
        </article> */}
        <article className="header__links">
          <button className="header__warehouse-link">Warehouses</button>
          <button className="header__inventory-link">Inventory</button>
        </article>
      </section>
    </section>
  );
}
