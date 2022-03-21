import React, { Component } from "react";
import { Link } from "react-router-dom";
import WarehouseDetailsSummary from "../Summary/WarehouseDetailsSummary";
import "../table.scss";
import "./warehousedetailsheader.scss";
import editIcon from "../../../assets/icons/edit-24px.svg";
import backArrow from "../../../assets/icons/arrow-back-24px.svg";

export class WarehouseDetailsHeader extends Component {
  render() {
    const currWarehouse = this.props.warehouses.find(
      (warehouse) => warehouse.id === this.props.match.params.id
    );

    return (
      <>
        <div className="summary__top">
          <div className="summary__left" id="l-page-header">
            <h1 className="summary__title">
              <Link to="/warehouses">
                <img src={backArrow} alt="Back-Arrow" className="backArrow" />
              </Link>
              {currWarehouse.name}
            </h1>
          </div>
          <Link to={`/warehouses/edit/${currWarehouse.id}`}>
            <div className="edit-button">
              <img src={editIcon} alt="Edit-Icon" class="edit-icon" />
              <p id="non-mobile">Edit</p>
            </div>
          </Link>
        </div>
        <WarehouseDetailsSummary
          warehouses={this.props.warehouses}
          match={this.props.match}
        />
      </>
    );
  }
}

export default WarehouseDetailsHeader;
