import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../table.scss";
import "./inventoryheader.scss";
import InventorySummary from "../Summary/InventorySummary";
import searchIcon from "../../../assets/icons/search-24px.svg";
import editIcon from "../../../assets/icons/edit-24px.svg";

export class SingleInventoryHeader extends Component {
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
            {/* <Link to={`/warehouses/add/`}> */}
            <div className="edit-button">
              <img src={editIcon} alt="Edit-Icon" /> Edit{" "}
            </div>{" "}
            {/* </Link> */}
          </div>
        </div>
        <InventorySummary />
      </>
    );
  }
}

export default SingleInventoryHeader;
