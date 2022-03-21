import React, { Component } from "react";
import "../table.scss";
import "./label.scss";
import sortIcon from "../../../assets/icons/sort-24px.svg";

export class InventoryLabels extends Component {
  render() {
    return (
      <>
        <div>
          <div className="table-row__header" id="non-mobile">
            <div className="table-row__column--1">
              <div className="row-1 label" id="l-page-header">
                INVENTORY ITEM:
                <img src={sortIcon} alt="Sort Icon" className="icon "></img>
              </div>
              <div className="row-2 label">
                CATEGORY:
                <img src={sortIcon} alt="Sort Icon" className="icon "></img>
              </div>
            </div>
            <div className="table-row__column--2">
              <div className="row-3 label">
                STATUS:
                <img src={sortIcon} alt="Sort Icon" className="icon "></img>
              </div>
              <div className="row-4 label">
                QTY:{" "}
                <img src={sortIcon} alt="Sort Icon" className="icon "></img>
              </div>
              <div className="row-4 label">
                WAREHOUSE:
                <img src={sortIcon} alt="Sort Icon" className="icon "></img>
              </div>
            </div>
            <div className="table-row__column--3">
              <div className="row-5 label" id="row5">
                ACTIONS:
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default InventoryLabels;
