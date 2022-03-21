import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../table.scss";
import "./inventoryheader.scss";
import searchIcon from "../../../assets/icons/search-24px.svg";
import SearchButton from "../Buttons/SearchButton";

export class InventoryHeader extends Component {
  render() {
    return (
      <>
        <div className="table-header" id="warehouse-header">
          <div className="table-header__left" id="l-page-header">
            <h1 className="table-header__header">Inventory </h1>
          </div>
          <div className="table-header__left" id="non-mobile"></div>
          <div className="table-header__right ">
            <SearchButton />
          </div>
          <div className="table-header__right" id="wide">
            <Link to="/inventory/add" className="button-link">
              <div className="blue-button">+ Add New Item </div>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default InventoryHeader;
