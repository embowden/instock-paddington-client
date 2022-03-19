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
          <div className="summary-details" id="single-inventory-topper">
            <div
              className="summary__left"
              id="l-page-header single-inventory-topper"
            >
              <div className="summary-details">
                <p id="title">ITEM DESCRIPTION:</p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas cupiditate quas necessitatibus accusamus ea earum odit
                ex totam, inventore labore dolores. Est quisquam dolores
                blanditiis!y
              </div>{" "}
            </div>
            <div className="summary__left" id="l-page-header">
              <p id="title">CATEGORY:</p>
              Category
            </div>
          </div>
          <div className="summary__middle" id="non-mobile"></div>
          <div className="mobile-divider__summary-section">
            <div className="mobile-divider" id="single-inventory-topper">
              <div className="summary__right ">
                <div className="summary-details">
                  <p id="title">STATUS:</p>
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
                  <p id="title">WAREHOUSE:</p> <p> location</p>
                </div>
                {/* {this.props.warehouses.contact.name} */}
              </div>{" "}
            </div>
            <div className="mobile-divider">
              <div className="summary__right ">
                <div>
                  <p id="title">QUANTITY:</p>
                </div>
                <p> 1000</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SingleInventorySummary;
