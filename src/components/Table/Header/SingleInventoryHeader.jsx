import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../table.scss";
import "./single-inventory-header.scss";
import SingleInventorySummary from "../Summary/SingleInventorySummary";
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
          <div className="table-header__right "></div>
          <div className="table-header__right">
            {/* <Link to={`/warehouses/add/`}> */}
            <div className="edit-button">
              <img src={editIcon} className="edit-icon" alt="Edit-Icon" /> Edit{" "}
            </div>{" "}
            {/* </Link> */}
          </div>
        </div>
        <div className="divider"></div>

        <SingleInventorySummary />
      </>
    );
  }
}

export default SingleInventoryHeader;
