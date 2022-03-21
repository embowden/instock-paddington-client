import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "../table.scss";
import "../Header/inventoryheader.scss";

export class SingleInventorySummary extends Component {
  render() {
    const inventoryItem = this.props.inventoryItem;
    console.log(inventoryItem);

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
                {inventoryItem.description}
              </div>
            </div>
            <div className="summary__left" id="l-page-header">
              <p id="title">CATEGORY:</p>
              {inventoryItem.category}
            </div>
          </div>
          <div className="summary__middle" id="non-mobile"></div>
          <div className="mobile-divider__summary-section">
            <div className="mobile-divider" id="single-inventory-topper">
              <div className="summary__right ">
                <div className="summary-details">
                  <p id="title">STATUS:</p>
                  {inventoryItem.status === "In Stock" ? (
                    <div className="instock" id="topper">
                      IN STOCK
                    </div>
                  ) : (
                    <div className="no-stock" id="topper">
                      OUT OF STOCK
                    </div>
                  )}
                </div>
              </div>
              <div className="summary__right">
                <div className="summary-details">
                  <p id="title">WAREHOUSE:</p>{" "}
                  <p>{inventoryItem.warehouseName}</p>
                </div>
              </div>
            </div>
            <div className="mobile-divider">
              <div className="summary__right ">
                <div>
                  <p id="title">QUANTITY:</p>
                </div>
                <p>{inventoryItem.quantity}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SingleInventorySummary;
