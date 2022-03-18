import React, { Component } from "react";
import "../table.scss";

import sortIcon from "../../../assets/icons/sort-24px.svg";

export class TableLabels extends Component {
  render() {
    return (
      <>
        {/* //       <div>
  //         <div className="table-row__header" id="non-mobile">
  //           <li className="row-1" id="l-page-header">
              
  //             <img src={sortIcon} alt="Sort Icon" className="icon "></img>
  //           </li>
  //           <li className="row-2">
  //             Address{" "}
  //             <img src={sortIcon} alt="Sort Icon" className="icon "></img>
  //           </li>
  //           <li className="row-3">
  //             Name <img src={sortIcon} alt="Sort Icon" className="icon "></img>
  //           </li>
  //           <li className="row-4">
  //             Contact Info{" "}
  //             <img src={sortIcon} alt="Sort Icon" className="icon "></img>
  //           </li>
  //           <li className="row-5">Actions</li>
  //         </div>
  //       </div>
  //     </>
  // <> */}
        <div>
          <div className="table-row__header" id="non-mobile">
            <div className="table-row__column--1">
              <div className="row-1 label" id="l-page-header">
                Warehouse{" "}
                <img src={sortIcon} alt="Sort Icon" className="icon "></img>
              </div>
              <div className="row-2 label">
                Address{" "}
                <img src={sortIcon} alt="Sort Icon" className="icon "></img>
              </div>
            </div>
            <div className="table-row__column--2">
              <div className="row-3 label">
                Name
                <img src={sortIcon} alt="Sort Icon" className="icon "></img>
              </div>
              <div className="row-4 label">
                Contact Info{" "}
                <img src={sortIcon} alt="Sort Icon" className="icon "></img>
              </div>
            </div>
            <div className="table-row__column--3">
              <div className="row-5 label">Actions</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TableLabels;
