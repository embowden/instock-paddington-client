import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../table.scss";
import "../Header/inventoryheader.scss";

export class SingleInventorySummary extends Component {
  // inventoryData = this.props.inventories;
  // state = {
  //   show: false,
  //   currentID: this.props.inventories.id,
  // };
  render() {
    return (
      <>
        <div className="summary" id="summary">
          <div className="summary__left" id="l-page-header">
            <p id="title">Warehouse Address</p>
            <p id="mobile-only">address,city , country</p>
            <p id="non-mobile">
              address, <br></br>
              city ,country
            </p>
          </div>
          <div className="summary__middle" id="non-mobile"></div>
          <div className="mobile-divider" id="topper">
            <div className="summary__right ">
              <div className="summary-details">
                <p id="title">Contact Name</p>
                <div className="instock" id="topper">
                  IN STOCK
                </div>
                <div className="no-stock" id="topper">
                  OUT OF STOCK
                </div>
              </div>
            </div>
            <div className="summary__right">
              <div className="summary-details">
                <p id="title">Contact Name</p> <p> contactname</p>
                <p> contactposition</p>
              </div>
              {/* {this.props.warehouses.contact.name} */}
            </div>{" "}
          </div>
          <div className="mobile-divider">
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

export default SingleInventorySummary;
