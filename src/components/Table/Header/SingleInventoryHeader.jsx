import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../table.scss";
import "./single-inventory-header.scss";
import SingleInventorySummary from "../Summary/SingleInventorySummary";
import editIcon from "../../../assets/icons/edit-24px.svg";
import backArrow from "../../../assets/icons/arrow-back-24px.svg";

export class SingleInventoryHeader extends Component {
  render() {
    return (
      <>
        <div className="table-header">
          <div className="table-header__left" id="l-page-header">
            <h1 className="table-header__header">
              <Link to="/inventory">
                <img src={backArrow} alt="Back-Arrow" className="backArrow" />
              </Link>
              {this.props.inventoryItem.itemName}
            </h1>
          </div>
          <div className="table-header__left" id="non-mobile"></div>
          <div className="table-header__right  " id="non-mobile"></div>
          <div className="table-header__right">
            <Link to={`/inventory/edit/${this.props.inventoryItem.id}`}>
              <div className="edit-button">
                <img src={editIcon} className="edit-icon" alt="Edit-Icon" />
                <p id="non-mobile">Edit</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="divider"></div>
        <SingleInventorySummary inventoryItem={this.props.inventoryItem} />
      </>
    );
  }
}

export default SingleInventoryHeader;
