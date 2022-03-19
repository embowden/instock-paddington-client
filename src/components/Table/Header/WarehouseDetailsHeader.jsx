import React, { Component } from "react";
import { Link } from "react-router-dom";
import WarehouseDetailsSummary from "../Summary/InventorySummary";
import "../table.scss";
import "./warehousedetailsheader.scss";
import editIcon from "../../../assets/icons/edit-24px.svg";
import backArrow from "../../../assets/icons/arrow-back-24px.svg";

export class WarehouseDetailsHeader extends Component {
  // inventoryData = this.props.inventories;
  // state = {
  //   show: false,
  //   currentID: this.props.inventories.id,
  // };
  render() {
    return (
      <>
        <div className="summary__top">
          <div className="summary__left" id="l-page-header">
            <h1 className="summary__title">
              {" "}
              <img src={backArrow} alt="Back-Arrow" className="backArrow" />
              Warehouses
            </h1>
          </div>
          <div className="edit-button">
            <img src={editIcon} alt="Edit-Icon" /> Edit{" "}
          </div>
        </div>
        <WarehouseDetailsSummary />
      </>
    );
  }
}

export default WarehouseDetailsHeader;