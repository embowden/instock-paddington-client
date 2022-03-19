import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../table.scss";
import "./inventoryheader.scss";
// import InventorySummary from "../Summary/InventorySummary";
// import editIcon from "../../../assets/icons/edit-24px.svg";
import searchIcon from "../../../assets/icons/search-24px.svg";
// import backArrow from "../../../assets/icons/arrow-back-24px.svg";

export class InventoryHeader extends Component {
  // inventoryData = this.props.inventories;
  // state = {
  //   show: false,
  //   currentID: this.props.inventories.id,
  // };
  render() {
    return (
      <>
        <div className="table-header">
          <div className="table-header__left" id="l-page-header">
            <h1 className="table-header__header">Inventory </h1>
          </div>
          <div className="table-header__left" id="non-mobile"></div>
          <div className="table-header__right ">
            <div className="search-button">
              Search...
              <img src={searchIcon} alt="search-icon" id="search-icon" />
            </div>
          </div>
          <div className="table-header__right">
            <Link to="/inventory/add">
              <div className="blue-button">+ Add New Item </div>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default InventoryHeader;
