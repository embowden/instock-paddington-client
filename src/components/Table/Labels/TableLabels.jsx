import React, { Component } from "react";
import "../table.scss";

import sortIcon from "../../../assets/icons/sort-24px.svg";

export class TableLabels extends Component {
  render() {
    return (
      <>
        <div>
          <div className="table-row__header" id="non-mobile">
            <li className="row-1" id="l-page-header">
              Warehouse{" "}
              <img src={sortIcon} alt="Sort Icon" className="icon "></img>
            </li>
            <li className="row-2">
              Address{" "}
              <img src={sortIcon} alt="Sort Icon" className="icon "></img>
            </li>
            <li className="row-3">
              Name <img src={sortIcon} alt="Sort Icon" className="icon "></img>
            </li>
            <li className="row-4">
              Contact Info{" "}
              <img src={sortIcon} alt="Sort Icon" className="icon "></img>
            </li>
            <li className="row-5">Actions</li>
          </div>
        </div>
      </>
    );
  }
}

export default TableLabels;
