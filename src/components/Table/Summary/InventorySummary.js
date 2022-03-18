import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../table.scss";
import "../Header/inventoryheader.scss";
import editIcon from "../../../assets/icons/edit-24px.svg";
import backArrow from "../../../assets/icons/arrow-back-24px.svg";

export class InventorySummary extends Component {
  // inventoryData = this.props.inventories;
  // state = {
  //   show: false,
  //   currentID: this.props.inventories.id,
  // };
  render() {
    return (
      <>
        <div className="summary">
          <div className="summary__left" id="l-page-header">
            <p id="title">Warehouse Address</p>
            <p id="mobile-only">address,city , country</p>
            <p id="non-mobile">
              address, <br></br>
              city ,country
            </p>
          </div>
          <div className="summary__middle" id="non-mobile"></div>
          <div className="mobile-divider">
            <div className="summary__right ">
              <div>
                <p id="title">Contact Name</p> <p> contactname</p>
                <p> contactposition</p>
              </div>
              {/* {this.props.warehouses.contact.name} */}
            </div>{" "}
            <div className="summary__right ">
              <div>
                <p id="title">Contact Details</p>
              </div>
              <p> contactphone</p>
              <p> contactemail</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default InventorySummary;
